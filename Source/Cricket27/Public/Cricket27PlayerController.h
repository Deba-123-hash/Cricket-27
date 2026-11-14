#pragma once

#include "CoreMinimal.h"
#include "GameFramework/PlayerController.h"
#include "CricketTypes.h"
#include "Cricket27PlayerController.generated.h"

class UInputMappingContext;
class UInputAction;
struct FInputActionValue;

UCLASS()
class CRICKET27_API ACricket27PlayerController : public APlayerController
{
	GENERATED_BODY()

public:
	ACricket27PlayerController();

protected:
	virtual void BeginPlay() override;
	virtual void SetupInputComponent() override;

public:
	// Enhanced Input Assets
	UPROPERTY(EditDefaultsOnly, Category = "Cricket|Input")
	UInputMappingContext* DefaultMappingContext;

	UPROPERTY(EditDefaultsOnly, Category = "Cricket|Input")
	UInputAction* MoveAimAction;

	UPROPERTY(EditDefaultsOnly, Category = "Cricket|Input")
	UInputAction* BatSwingAction;

	UPROPERTY(EditDefaultsOnly, Category = "Cricket|Input")
	UInputAction* ShotTypeSelectAction;

	UPROPERTY(EditDefaultsOnly, Category = "Cricket|Input")
	UInputAction* BowlReleaseAction;

	UPROPERTY(EditDefaultsOnly, Category = "Cricket|Input")
	UInputAction* RunBetweenWicketsAction;

	UPROPERTY(EditDefaultsOnly, Category = "Cricket|Input")
	UInputAction* PauseGameAction;

	// Batting Input Handlers
	UFUNCTION(BlueprintCallable, Category = "Cricket|Batting")
	void OnShotExecuted(ECricketShotType ShotType, float Power, FVector Direction);

	// Bowling Input Handlers
	UFUNCTION(BlueprintCallable, Category = "Cricket|Bowling")
	void OnBowlExecuted(EBowlingDeliveryType DeliveryType, FVector TargetLocation, float SpeedKmh);

	// Mobile Touch Interface Handlers
	UFUNCTION(BlueprintCallable, Category = "Cricket|Mobile")
	void HandleMobileSwipe(FVector2D SwipeStart, FVector2D SwipeEnd, float SwipeDuration);

	UFUNCTION(BlueprintCallable, Category = "Cricket|Mobile")
	void HandleMobileShotButton(ECricketShotType ShotType);

	UFUNCTION(BlueprintCallable, Category = "Cricket|Mobile")
	void HandleMobileRunButton();

private:
	void InputMoveAim(const FInputActionValue& Value);
	void InputBatSwing(const FInputActionValue& Value);
	void InputBowlRelease(const FInputActionValue& Value);
	void InputRunBetweenWickets(const FInputActionValue& Value);
	void InputPauseGame(const FInputActionValue& Value);

	FVector2D CurrentAimVector = FVector2D::ZeroVector;
	ECricketShotType SelectedShotType = ECricketShotType::StraightDrive;
};
