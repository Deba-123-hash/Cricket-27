#include "Cricket27Character.h"
#include "CricketBat.h"
#include "CricketBall.h"
#include "Components/CapsuleComponent.h"
#include "GameFramework/CharacterMovementComponent.h"
#include "Kismet/GameplayStatics.h"

ACricket27Character::ACricket27Character()
{
	PrimaryActorTick.bCanEverTick = true;

	GetCapsuleComponent()->InitCapsuleSize(42.0f, 96.0f);

	bUseControllerRotationPitch = false;
	bUseControllerRotationYaw = false;
	bUseControllerRotationRoll = false;

	GetCharacterMovement()->bOrientRotationToMovement = true;
	GetCharacterMovement()->RotationRate = FRotator(0.0f, 500.0f, 0.0f);
	GetCharacterMovement()->MaxWalkSpeed = 650.0f; // Sprinting speed between wickets / fielding
}

void ACricket27Character::BeginPlay()
{
	Super::BeginPlay();

	// Spawn and attach bat if batsman
	if (CurrentRole == ECricketRole::Batsman && BatClass)
	{
		FActorSpawnParameters SpawnParams;
		SpawnParams.Owner = this;
		AttachedBat = GetWorld()->SpawnActor<ACricketBat>(BatClass, SpawnParams);
		if (AttachedBat)
		{
			AttachedBat->AttachToComponent(GetMesh(), FAttachmentTransformRules::SnapToTargetIncludingScale, TEXT("hand_r_socket"));
		}
	}
}

void ACricket27Character::Tick(float DeltaTime)
{
	Super::Tick(DeltaTime);
}

void ACricket27Character::SetupPlayerInputComponent(UInputComponent* PlayerInputComponent)
{
	Super::SetupPlayerInputComponent(PlayerInputComponent);
}

void ACricket27Character::PlayShot(ECricketShotType ShotType, float Power, FVector Direction)
{
	UAnimMontage* MontageToPlay = nullptr;

	switch (ShotType)
	{
	case ECricketShotType::Defensive:
		MontageToPlay = DefensiveMontage;
		break;
	case ECricketShotType::StraightDrive:
		MontageToPlay = StraightDriveMontage;
		break;
	case ECricketShotType::CoverDrive:
		MontageToPlay = CoverDriveMontage;
		break;
	case ECricketShotType::PullShot:
		MontageToPlay = PullShotMontage;
		break;
	case ECricketShotType::HookShot:
		MontageToPlay = HookShotMontage;
		break;
	case ECricketShotType::Sweep:
		MontageToPlay = SweepMontage;
		break;
	case ECricketShotType::LoftedShot:
		MontageToPlay = LoftedShotMontage;
		break;
	case ECricketShotType::LegGlance:
		MontageToPlay = LegGlanceMontage;
		break;
	default:
		MontageToPlay = StraightDriveMontage;
		break;
	}

	if (MontageToPlay)
	{
		PlayAnimMontage(MontageToPlay, 1.0f);
	}

	if (AttachedBat)
	{
		AttachedBat->StartSwing(ShotType, Power, Direction);
	}
}

void ACricket27Character::StartBowlingRunUp(EBowlingDeliveryType DeliveryType, FVector TargetLandingPoint, float TargetSpeedKmh)
{
	bIsBowling = true;
	QueuedDeliveryType = DeliveryType;
	QueuedBounceTarget = TargetLandingPoint;
	QueuedSpeedKmh = TargetSpeedKmh;

	UAnimMontage* BowlerMontage = (DeliveryType == EBowlingDeliveryType::OffSpin || DeliveryType == EBowlingDeliveryType::LegSpin) 
		? SpinDeliveryMontage 
		: FastDeliveryMontage;

	if (BowlerMontage)
	{
		PlayAnimMontage(BowlerMontage, 1.0f);
	}
	else
	{
		// Fallback direct release if montage not yet bound
		OnBowlingReleasePointReached();
	}
}

void ACricket27Character::OnBowlingReleasePointReached()
{
	if (!bIsBowling)
	{
		return;
	}

	bIsBowling = false;

	// Release ball from bowling hand socket or forward offset
	FVector HandLocation = GetMesh()->GetSocketLocation(TEXT("hand_r_socket"));
	if (HandLocation.IsNearlyZero())
	{
		HandLocation = GetActorLocation() + GetActorForwardVector() * 80.0f + FVector(0.0f, 0.0f, 90.0f);
	}

	TArray<AActor*> FoundBalls;
	UGameplayStatics::GetAllActorsOfClass(GetWorld(), ACricketBall::StaticClass(), FoundBalls);
	if (FoundBalls.Num() > 0)
	{
		ACricketBall* Ball = Cast<ACricketBall>(FoundBalls[0]);
		if (Ball)
		{
			Ball->LaunchDelivery(HandLocation, QueuedBounceTarget, QueuedSpeedKmh, QueuedDeliveryType, Skills.BowlingSwingSpin);
		}
	}
}

void ACricket27Character::OnBatSwingContactWindowStart()
{
	// Triggered via AnimNotify in batting montage
}

void ACricket27Character::OnBatSwingContactWindowEnd()
{
	if (AttachedBat)
	{
		AttachedBat->EndSwing();
	}
}

void ACricket27Character::PerformFieldingPickup(FVector TargetStumpsLocation)
{
	if (PickupAndThrowMontage)
	{
		PlayAnimMontage(PickupAndThrowMontage, 1.1f);
	}
}

void ACricket27Character::AttemptCatch()
{
	if (CatchMontage)
	{
		PlayAnimMontage(CatchMontage, 1.2f);
	}
}

void ACricket27Character::PlayCelebration()
{
	if (CelebrationMontage)
	{
		PlayAnimMontage(CelebrationMontage, 1.0f);
	}
}
