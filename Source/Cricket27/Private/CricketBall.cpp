#include "CricketBall.h"
#include "Components/SphereComponent.h"
#include "Components/StaticMeshComponent.h"
#include "GameFramework/ProjectileMovementComponent.h"
#include "Kismet/GameplayStatics.h"
#include "DrawDebugHelpers.h"

ACricketBall::ACricketBall()
{
	PrimaryActorTick.bCanEverTick = true;

	SphereCollision = CreateDefaultSubobject<USphereComponent>(TEXT("SphereCollision"));
	SphereCollision->InitSphereRadius(BallRadiusCm);
	SphereCollision->SetCollisionProfileName(TEXT("PhysicsActor"));
	SphereCollision->SetNotifyRigidBodyCollision(true);
	SphereCollision->SetSimulatePhysics(false);
	RootComponent = SphereCollision;

	BallMesh = CreateDefaultSubobject<UStaticMeshComponent>(TEXT("BallMesh"));
	BallMesh->SetupAttachment(SphereCollision);
	BallMesh->SetCollisionEnabled(ECollisionEnabled::NoCollision);

	ProjectileMovement = CreateDefaultSubobject<UProjectileMovementComponent>(TEXT("ProjectileMovement"));
	ProjectileMovement->UpdatedComponent = SphereCollision;
	ProjectileMovement->InitialSpeed = 0.0f;
	ProjectileMovement->MaxSpeed = 5500.0f; // ~200 km/h in cm/s
	ProjectileMovement->bRotationFollowsVelocity = true;
	ProjectileMovement->bShouldBounce = true;
	ProjectileMovement->Bounciness = PitchRestitution;
	ProjectileMovement->Friction = PitchFriction;
	ProjectileMovement->ProjectileGravityScale = 1.0f;
	ProjectileMovement->bAutoActivate = false;
}

void ACricketBall::BeginPlay()
{
	Super::BeginPlay();
	SphereCollision->OnComponentHit.AddDynamic(this, &ACricketBall::OnBallHit);
}

void ACricketBall::Tick(float DeltaTime)
{
	Super::Tick(DeltaTime);

	if (bIsInAir && !bIsDeadBall)
	{
		FlightTimer += DeltaTime;
		ApplyAerodynamics(DeltaTime);

		// Boundary check (assuming 68m boundary radius ~ 6800 cm)
		FVector FlatPos = GetActorLocation();
		FlatPos.Z = 0.0f;
		float DistanceFromCenter = FlatPos.Size();

		if (DistanceFromCenter >= 6800.0f)
		{
			bool bIsSix = !bHasBouncedOnPitch && (GetActorLocation().Z > 50.0f);
			int32 Runs = bIsSix ? 6 : 4;
			bIsDeadBall = true;
			OnBallCrossedBoundary.Broadcast(bIsSix, Runs);
		}
	}
}

void ACricketBall::LaunchDelivery(FVector ReleaseLocation, FVector TargetBounceLocation, float SpeedKmh, EBowlingDeliveryType DeliveryType, float SwingSpinAmount)
{
	SetActorLocation(ReleaseLocation);
	bIsInAir = true;
	bHasBouncedOnPitch = false;
	bHasStruckBat = false;
	bIsDeadBall = false;
	FlightTimer = 0.0f;
	CurrentDeliveryType = DeliveryType;

	// Speed conversion: km/h to cm/s (1 km/h = 27.7778 cm/s)
	float SpeedCms = SpeedKmh * 27.7778f;

	// Calculate launch trajectory toward the pitch landing target
	FVector Displacement = TargetBounceLocation - ReleaseLocation;
	float Gravity = FMath::Abs(GetWorld()->GetDefaultGravityZ());
	
	// Ball flight time estimate to pitch target
	float HorizontalDist = FVector2D(Displacement.X, Displacement.Y).Size();
	float TimeToBounce = HorizontalDist / FMath::Max(SpeedCms * 0.95f, 500.0f);

	FVector InitialVel;
	InitialVel.X = Displacement.X / TimeToBounce;
	InitialVel.Y = Displacement.Y / TimeToBounce;
	InitialVel.Z = (Displacement.Z + 0.5f * Gravity * FMath::Square(TimeToBounce)) / TimeToBounce;

	// Set spin and swing axes based on bowling delivery type
	switch (DeliveryType)
	{
	case EBowlingDeliveryType::FastPace:
		BallSpinAxis = FVector(0.0f, 1.0f, 0.0f); // Backspin for seam stability
		SpinRateRpm = 1800.0f;
		break;
	case EBowlingDeliveryType::Inswinger:
		BallSpinAxis = FVector(0.3f, 1.0f, 0.5f).GetSafeNormal();
		SpinRateRpm = 2200.0f * (SwingSpinAmount / 100.0f);
		break;
	case EBowlingDeliveryType::Yorker:
		BallSpinAxis = FVector(0.0f, 1.0f, 0.0f);
		SpinRateRpm = 2400.0f;
		break;
	case EBowlingDeliveryType::Bouncer:
		BallSpinAxis = FVector(0.0f, 1.0f, 0.0f);
		SpinRateRpm = 2600.0f;
		break;
	case EBowlingDeliveryType::OffSpin:
		BallSpinAxis = FVector(0.0f, 0.4f, 1.0f).GetSafeNormal();
		SpinRateRpm = 2100.0f * (SwingSpinAmount / 100.0f);
		break;
	case EBowlingDeliveryType::LegSpin:
		BallSpinAxis = FVector(0.0f, -0.4f, -1.0f).GetSafeNormal();
		SpinRateRpm = 2300.0f * (SwingSpinAmount / 100.0f);
		break;
	default:
		BallSpinAxis = FVector::UpVector;
		SpinRateRpm = 1000.0f;
		break;
	}

	ProjectileMovement->Velocity = InitialVel;
	ProjectileMovement->Activate(true);
}

void ACricketBall::ApplyAerodynamics(float DeltaTime)
{
	if (!ProjectileMovement || ProjectileMovement->Velocity.IsNearlyZero())
	{
		return;
	}

	FVector CurrentVel = ProjectileMovement->Velocity;
	float SpeedCms = CurrentVel.Size();

	// 1. Air Drag force (opposite to velocity)
	// F_drag = 0.5 * rho * v^2 * Cd * Area
	FVector DragDir = -CurrentVel.GetSafeNormal();
	float DragMagnitude = 0.000008f * AirDragCoefficient * FMath::Square(SpeedCms);
	FVector DragAcceleration = DragDir * DragMagnitude;

	// 2. Magnus Effect (swing and drift force)
	// F_magnus = S * (omega x v)
	FVector MagnusDir = FVector::CrossProduct(BallSpinAxis, CurrentVel).GetSafeNormal();
	float MagnusMagnitude = 0.000004f * MagnusCoefficient * (SpinRateRpm / 2000.0f) * SpeedCms;
	FVector MagnusAcceleration = MagnusDir * MagnusMagnitude;

	// Update projectile movement velocity
	ProjectileMovement->Velocity += (DragAcceleration + MagnusAcceleration) * DeltaTime;
}

void ACricketBall::ApplyBatStrike(FVector ContactNormal, FVector BatSwingVelocity, float TimingOffset, ECricketShotType ShotType)
{
	if (bHasStruckBat || bIsDeadBall)
	{
		return;
	}

	bHasStruckBat = true;

	// Timing multiplier: perfect timing (close to 0) gives highest exit velocity
	float TimingFactor = FMath::Clamp(1.0f - (FMath::Abs(TimingOffset) * 2.2f), 0.25f, 1.25f);
	
	EShotTiming TimingQuality = EShotTiming::Missed;
	if (FMath::Abs(TimingOffset) < 0.04f)
	{
		TimingQuality = EShotTiming::Perfect;
	}
	else if (FMath::Abs(TimingOffset) < 0.10f)
	{
		TimingQuality = (TimingOffset < 0.0f) ? EShotTiming::Early : EShotTiming::Late;
	}
	else
	{
		TimingQuality = (TimingOffset < 0.0f) ? EShotTiming::TooEarly : EShotTiming::TooLate;
	}

	// Physics impulse transfer: Reflection vector + bat swing impulse
	FVector IncomingVel = ProjectileMovement->Velocity;
	FVector ReflectedVel = FVector::VectorPlaneProject(IncomingVel, ContactNormal) - (ContactNormal * IncomingVel.Size() * 0.45f);

	// Add bat momentum
	FVector ExitVel = (ReflectedVel * 0.4f) + (BatSwingVelocity * TimingFactor * 1.6f);

	// Elevation depending on shot type
	if (ShotType == ECricketShotType::LoftedShot)
	{
		ExitVel.Z = FMath::Max(ExitVel.Z, 1200.0f * TimingFactor);
	}
	else if (ShotType == ECricketShotType::Defensive)
	{
		ExitVel *= 0.2f;
		ExitVel.Z = -100.0f; // Soft hands downward onto pitch
	}

	ProjectileMovement->Velocity = ExitVel;
	OnBallBatContact.Broadcast(GetActorLocation(), ExitVel, TimingQuality);
}

void ACricketBall::InterceptBall(AActor* Fielder)
{
	bIsInAir = false;
	bIsDeadBall = true;
	ProjectileMovement->Velocity = FVector::ZeroVector;
	ProjectileMovement->Deactivate();
}

FVector ACricketBall::PredictPitchLandingPoint(float InitialSpeedKmh, FVector ReleasePoint, FVector AimTarget)
{
	FVector Target = AimTarget;
	Target.Z = 0.0f; // Pitch surface plane
	return Target;
}

void ACricketBall::ResetBall(FVector ResetLocation)
{
	ProjectileMovement->Deactivate();
	ProjectileMovement->Velocity = FVector::ZeroVector;
	SetActorLocation(ResetLocation);
	bIsInAir = false;
	bHasBouncedOnPitch = false;
	bHasStruckBat = false;
	bIsDeadBall = false;
	FlightTimer = 0.0f;
}

void ACricketBall::OnBallHit(UPrimitiveComponent* HitComp, AActor* OtherActor, UPrimitiveComponent* OtherComp, FVector NormalImpulse, const FHitResult& Hit)
{
	if (!OtherActor)
	{
		return;
	}

	// 1. Check if pitch was struck
	if (!bHasBouncedOnPitch && Hit.ImpactPoint.Z <= 10.0f)
	{
		bHasBouncedOnPitch = true;
		
		// Spin deviation off the turf
		if (CurrentDeliveryType == EBowlingDeliveryType::OffSpin)
		{
			ProjectileMovement->Velocity += FVector(0.0f, 180.0f, 0.0f);
		}
		else if (CurrentDeliveryType == EBowlingDeliveryType::LegSpin)
		{
			ProjectileMovement->Velocity -= FVector(0.0f, 220.0f, 0.0f);
		}

		OnBallPitchBounce.Broadcast(Hit.ImpactPoint, ProjectileMovement->Velocity.Size());
	}

	// 2. Check if wicket was struck
	if (OtherActor->ActorHasTag(TEXT("Wicket")))
	{
		OnBallHitWicket.Broadcast(OtherActor);
	}
}
