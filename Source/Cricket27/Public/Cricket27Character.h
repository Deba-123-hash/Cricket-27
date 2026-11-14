#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Character.h"
#include "CricketTypes.h"
#include "Cricket27Character.generated.h"

class ACricketBat;
class ACricketBall;
class UAnimMontage;

UCLASS()
class CRICKET27_API ACricket27Character : public ACharacter
{
	GENERATED_BODY()

public:
	ACricket27Character();

protected:
	virtual void BeginPlay() override;

public:	
	virtual void Tick(float DeltaTime) override;
	virtual void SetupPlayerInputComponent(class UInputComponent* PlayerInputComponent) override;

	// Character Role & Skills
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Role")
	ECricketRole CurrentRole = ECricketRole::Batsman;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Skills")
	FPlayerSkills Skills;

	UPROPERTY(BlueprintReadOnly, Category = "Cricket|Equipment")
	ACricketBat* AttachedBat;

	UPROPERTY(EditDefaultsOnly, Category = "Cricket|Equipment")
	TSubclassOf<ACricketBat> BatClass;

	// Batting Montages
	UPROPERTY(EditDefaultsOnly, Category = "Cricket|Animations|Batting")
	UAnimMontage* StanceMontage;

	UPROPERTY(EditDefaultsOnly, Category = "Cricket|Animations|Batting")
	UAnimMontage* DefensiveMontage;

	UPROPERTY(EditDefaultsOnly, Category = "Cricket|Animations|Batting")
	UAnimMontage* StraightDriveMontage;

	UPROPERTY(EditDefaultsOnly, Category = "Cricket|Animations|Batting")
	UAnimMontage* CoverDriveMontage;

	UPROPERTY(EditDefaultsOnly, Category = "Cricket|Animations|Batting")
	UAnimMontage* PullShotMontage;

	UPROPERTY(EditDefaultsOnly, Category = "Cricket|Animations|Batting")
	UAnimMontage* HookShotMontage;

	UPROPERTY(EditDefaultsOnly, Category = "Cricket|Animations|Batting")
	UAnimMontage* SweepMontage;

	UPROPERTY(EditDefaultsOnly, Category = "Cricket|Animations|Batting")
	UAnimMontage* LoftedShotMontage;

	UPROPERTY(EditDefaultsOnly, Category = "Cricket|Animations|Batting")
	UAnimMontage* LegGlanceMontage;

	// Bowling Montages
	UPROPERTY(EditDefaultsOnly, Category = "Cricket|Animations|Bowling")
	UAnimMontage* BowlingRunUpMontage;

	UPROPERTY(EditDefaultsOnly, Category = "Cricket|Animations|Bowling")
	UAnimMontage* FastDeliveryMontage;

	UPROPERTY(EditDefaultsOnly, Category = "Cricket|Animations|Bowling")
	UAnimMontage* SpinDeliveryMontage;

	// Fielding Montages
	UPROPERTY(EditDefaultsOnly, Category = "Cricket|Animations|Fielding")
	UAnimMontage* CatchMontage;

	UPROPERTY(EditDefaultsOnly, Category = "Cricket|Animations|Fielding")
	UAnimMontage* PickupAndThrowMontage;

	UPROPERTY(EditDefaultsOnly, Category = "Cricket|Animations|Fielding")
	UAnimMontage* DiveMontage;

	UPROPERTY(EditDefaultsOnly, Category = "Cricket|Animations|Celebration")
	UAnimMontage* CelebrationMontage;

	// Actions
	UFUNCTION(BlueprintCallable, Category = "Cricket|Batting")
	void PlayShot(ECricketShotType ShotType, float Power, FVector Direction);

	UFUNCTION(BlueprintCallable, Category = "Cricket|Bowling")
	void StartBowlingRunUp(EBowlingDeliveryType DeliveryType, FVector TargetLandingPoint, float TargetSpeedKmh);

	UFUNCTION(BlueprintCallable, Category = "Cricket|Fielding")
	void PerformFieldingPickup(FVector TargetStumpsLocation);

	UFUNCTION(BlueprintCallable, Category = "Cricket|Fielding")
	void AttemptCatch();

	UFUNCTION(BlueprintCallable, Category = "Cricket|Celebration")
	void PlayCelebration();

	// Montage Notification Hook (called when bowler hand reaches release point)
	UFUNCTION(BlueprintCallable, Category = "Cricket|Bowling")
	void OnBowlingReleasePointReached();

	// Montage Notification Hook (called at start/end of bat swing arc)
	UFUNCTION(BlueprintCallable, Category = "Cricket|Batting")
	void OnBatSwingContactWindowStart();

	UFUNCTION(BlueprintCallable, Category = "Cricket|Batting")
	void OnBatSwingContactWindowEnd();

protected:
	UPROPERTY(BlueprintReadOnly, Category = "Cricket|Bowling")
	bool bIsBowling = false;

	EBowlingDeliveryType QueuedDeliveryType;
	FVector QueuedBounceTarget;
	float QueuedSpeedKmh = 135.0f;
};
