#include "Cricket27PlayerController.h"
#include "EnhancedInputComponent.h"
#include "EnhancedInputSubsystems.h"
#include "Cricket27Character.h"
#include "CricketMatchManager.h"
#include "Kismet/GameplayStatics.h"

ACricket27PlayerController::ACricket27PlayerController()
{
	bShowMouseCursor = true;
	bEnableClickEvents = true;
	bEnableTouchEvents = true;
}

void ACricket27PlayerController::BeginPlay()
{
	Super::BeginPlay();

	if (UEnhancedInputLocalPlayerSubsystem* Subsystem = ULocalPlayer::GetSubsystem<UEnhancedInputLocalPlayerSubsystem>(GetLocalPlayer()))
	{
		if (DefaultMappingContext)
		{
			Subsystem->AddMappingContext(DefaultMappingContext, 0);
		}
	}
}

void ACricket27PlayerController::SetupInputComponent()
{
	Super::SetupInputComponent();

	if (UEnhancedInputComponent* EnhancedInputComponent = Cast<UEnhancedInputComponent>(InputComponent))
	{
		if (MoveAimAction)
		{
			EnhancedInputComponent->BindAction(MoveAimAction, ETriggerEvent::Triggered, this, &ACricket27PlayerController::InputMoveAim);
		}
		if (BatSwingAction)
		{
			EnhancedInputComponent->BindAction(BatSwingAction, ETriggerEvent::Started, this, &ACricket27PlayerController::InputBatSwing);
		}
		if (BowlReleaseAction)
		{
			EnhancedInputComponent->BindAction(BowlReleaseAction, ETriggerEvent::Started, this, &ACricket27PlayerController::InputBowlRelease);
		}
		if (RunBetweenWicketsAction)
		{
			EnhancedInputComponent->BindAction(RunBetweenWicketsAction, ETriggerEvent::Started, this, &ACricket27PlayerController::InputRunBetweenWickets);
		}
		if (PauseGameAction)
		{
			EnhancedInputComponent->BindAction(PauseGameAction, ETriggerEvent::Started, this, &ACricket27PlayerController::InputPauseGame);
		}
	}
}

void ACricket27PlayerController::InputMoveAim(const FInputActionValue& Value)
{
	CurrentAimVector = Value.Get<FVector2D>();
}

void ACricket27PlayerController::InputBatSwing(const FInputActionValue& Value)
{
	FVector ShotDirection = FVector(CurrentAimVector.Y, CurrentAimVector.X, 0.2f).GetSafeNormal();
	if (ShotDirection.IsNearlyZero())
	{
		ShotDirection = FVector::ForwardVector;
	}

	OnShotExecuted(SelectedShotType, 0.95f, ShotDirection);
}

void ACricket27PlayerController::InputBowlRelease(const FInputActionValue& Value)
{
	FVector TargetBouncePoint = FVector(-1200.0f + (CurrentAimVector.Y * 300.0f), CurrentAimVector.X * 150.0f, 0.0f);
	OnBowlExecuted(EBowlingDeliveryType::FastPace, TargetBouncePoint, 142.0f);
}

void ACricket27PlayerController::InputRunBetweenWickets(const FInputActionValue& Value)
{
	// Running between wickets trigger
}

void ACricket27PlayerController::InputPauseGame(const FInputActionValue& Value)
{
	SetPause(!IsPaused());
}

void ACricket27PlayerController::OnShotExecuted(ECricketShotType ShotType, float Power, FVector Direction)
{
	ACricket27Character* MyCharacter = Cast<ACricket27Character>(GetPawn());
	if (MyCharacter)
	{
		MyCharacter->PlayShot(ShotType, Power, Direction);
	}
}

void ACricket27PlayerController::OnBowlExecuted(EBowlingDeliveryType DeliveryType, FVector TargetLocation, float SpeedKmh)
{
	TArray<AActor*> Matches;
	UGameplayStatics::GetAllActorsOfClass(GetWorld(), ACricketMatchManager::StaticClass(), Matches);
	if (Matches.Num() > 0)
	{
		ACricketMatchManager* Match = Cast<ACricketMatchManager>(Matches[0]);
		if (Match)
		{
			Match->TriggerBowlingDelivery(DeliveryType, TargetLocation, SpeedKmh);
		}
	}
}

void ACricket27PlayerController::HandleMobileSwipe(FVector2D SwipeStart, FVector2D SwipeEnd, float SwipeDuration)
{
	FVector2D SwipeDelta = SwipeEnd - SwipeStart;
	float SwipeSpeed = SwipeDelta.Size() / FMath::Max(SwipeDuration, 0.05f);

	// Convert 2D screen swipe to 3D world shot direction
	FVector ShotDir = FVector(SwipeDelta.Y, SwipeDelta.X, 0.25f).GetSafeNormal();
	float Power = FMath::Clamp(SwipeSpeed / 1200.0f, 0.4f, 1.0f);

	// Determine shot type by direction & speed
	ECricketShotType Shot = ECricketShotType::StraightDrive;
	if (SwipeDelta.Y < -150.0f) Shot = ECricketShotType::LoftedShot;
	else if (SwipeDelta.X > 100.0f) Shot = ECricketShotType::CoverDrive;
	else if (SwipeDelta.X < -100.0f) Shot = ECricketShotType::PullShot;

	OnShotExecuted(Shot, Power, ShotDir);
}

void ACricket27PlayerController::HandleMobileShotButton(ECricketShotType ShotType)
{
	SelectedShotType = ShotType;
}

void ACricket27PlayerController::HandleMobileRunButton()
{
	// Trigger running between wickets
}
