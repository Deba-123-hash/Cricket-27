#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "CricketTypes.h"
#include "CricketFieldingAI.generated.h"

class ACricket27Character;
class ACricketBall;

USTRUCT(BlueprintType)
struct FFielderSlot
{
	GENERATED_BODY()

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Fielding")
	EFieldingPosition Position = EFieldingPosition::Cover;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Fielding")
	FVector FieldLocation = FVector::ZeroVector;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Fielding")
	ACricket27Character* AssignedFielder = nullptr;
};

UCLASS()
class CRICKET27_API ACricketFieldingAI : public AActor
{
	GENERATED_BODY()
	
public:	
	ACricketFieldingAI();

protected:
	virtual void BeginPlay() override;

public:	
	virtual void Tick(float DeltaTime) override;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Fielding")
	TArray<FFielderSlot> ActiveFielders;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Fielding")
	float CatchRadius = 150.0f; // cm

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Fielding")
	float GroundPickupRadius = 110.0f; // cm

	UFUNCTION(BlueprintCallable, Category = "Cricket|Fielding")
	void SetupFieldPreset(bool bIsPowerplay);

	UFUNCTION(BlueprintCallable, Category = "Cricket|Fielding")
	void ResetFielderPositions();

	UFUNCTION(BlueprintCallable, Category = "Cricket|Fielding")
	void OnBallStruckByBat(ACricketBall* Ball);

private:
	ACricketBall* TrackedBall = nullptr;
	bool bIsChasingBall = false;
	ACricket27Character* PrimaryChaser = nullptr;

	void UpdateFielderPursuit(float DeltaTime);
};
