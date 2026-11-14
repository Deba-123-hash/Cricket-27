#include "CricketBat.h"
#include "Components/StaticMeshComponent.h"
#include "Components/BoxComponent.h"
#include "CricketBall.h"
#include "Kismet/GameplayStatics.h"

ACricketBat::ACricketBat()
{
	PrimaryActorTick.bCanEverTick = false;

	BatMesh = CreateDefaultSubobject<UStaticMeshComponent>(TEXT("BatMesh"));
	RootComponent = BatMesh;
	BatMesh->SetCollisionProfileName(TEXT("NoCollision"));

	// Sweet spot box collision (center of blade)
	SweetSpotCollision = CreateDefaultSubobject<UBoxComponent>(TEXT("SweetSpotCollision"));
	SweetSpotCollision->SetupAttachment(BatMesh);
	SweetSpotCollision->SetBoxExtent(FVector(6.0f, 4.0f, 20.0f));
	SweetSpotCollision->SetRelativeLocation(FVector(0.0f, 0.0f, 35.0f));
	SweetSpotCollision->SetCollisionProfileName(TEXT("OverlapAllDynamic"));
	SweetSpotCollision->SetGenerateOverlapEvents(true);

	// Edge collision box (outer blade edges for nicks/edges to slips/keeper)
	EdgeCollision = CreateDefaultSubobject<UBoxComponent>(TEXT("EdgeCollision"));
	EdgeCollision->SetupAttachment(BatMesh);
	EdgeCollision->SetBoxExtent(FVector(2.0f, 5.0f, 25.0f));
	EdgeCollision->SetRelativeLocation(FVector(0.0f, 0.0f, 35.0f));
	EdgeCollision->SetCollisionProfileName(TEXT("OverlapAllDynamic"));
	EdgeCollision->SetGenerateOverlapEvents(true);
}

void ACricketBat::BeginPlay()
{
	Super::BeginPlay();

	SweetSpotCollision->OnComponentBeginOverlap.AddDynamic(this, &ACricketBat::OnSweetSpotOverlap);
	EdgeCollision->OnComponentBeginOverlap.AddDynamic(this, &ACricketBat::OnEdgeOverlap);
}

void ACricketBat::StartSwing(ECricketShotType ShotType, float PowerRatio, FVector SwingDirection)
{
	bIsSwinging = true;
	ActiveShotType = ShotType;
	SwingPower = FMath::Clamp(PowerRatio, 0.2f, 1.0f);
	CurrentSwingDirection = SwingDirection.GetSafeNormal();
	SwingStartTime = GetWorld()->GetTimeSeconds();
	SwingVelocityMagnitude = 2800.0f * SwingPower; // approx bat tip speed in cm/s
}

void ACricketBat::EndSwing()
{
	bIsSwinging = false;
	SwingVelocityMagnitude = 0.0f;
}

void ACricketBat::OnSweetSpotOverlap(UPrimitiveComponent* OverlappedComp, AActor* OtherActor, UPrimitiveComponent* OtherComp, int32 OtherBodyIndex, bool bFromSweep, const FHitResult& SweepResult)
{
	if (!bIsSwinging || !OtherActor)
	{
		return;
	}

	ACricketBall* Ball = Cast<ACricketBall>(OtherActor);
	if (Ball && !Ball->bHasStruckBat)
	{
		float ElapsedSwing = GetWorld()->GetTimeSeconds() - SwingStartTime;
		// Ideal contact window is around 0.12 - 0.18 seconds into the swing montage
		float TimingOffset = ElapsedSwing - 0.15f;

		FVector ContactNormal = CurrentSwingDirection;
		FVector BatSwingVel = CurrentSwingDirection * (SwingVelocityMagnitude * SweetSpotPowerMultiplier);

		Ball->ApplyBatStrike(ContactNormal, BatSwingVel, TimingOffset, ActiveShotType);
	}
}

void ACricketBat::OnEdgeOverlap(UPrimitiveComponent* OverlappedComp, AActor* OtherActor, UPrimitiveComponent* OtherComp, int32 OtherBodyIndex, bool bFromSweep, const FHitResult& SweepResult)
{
	if (!bIsSwinging || !OtherActor)
	{
		return;
	}

	ACricketBall* Ball = Cast<ACricketBall>(OtherActor);
	if (Ball && !Ball->bHasStruckBat)
	{
		float ElapsedSwing = GetWorld()->GetTimeSeconds() - SwingStartTime;
		float TimingOffset = ElapsedSwing - 0.15f;

		// Edge gives an angled deflection toward wicketkeeper / slips
		FVector EdgeDeflectionDir = FRotator(15.0f, EdgeDeflectionAngleDeg, 0.0f).RotateVector(CurrentSwingDirection);
		FVector BatSwingVel = EdgeDeflectionDir * (SwingVelocityMagnitude * 0.45f);

		Ball->ApplyBatStrike(EdgeDeflectionDir, BatSwingVel, TimingOffset, ActiveShotType);
	}
}
