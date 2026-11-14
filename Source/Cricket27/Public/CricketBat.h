#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "CricketTypes.h"
#include "CricketBat.generated.h"

class UBoxComponent;
class UStaticMeshComponent;
class ACricketBall;

UCLASS()
class CRICKET27_API ACricketBat : public AActor
{
	GENERATED_BODY()
	
public:	
	ACricketBat();

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Cricket|Components")
	UStaticMeshComponent* BatMesh;

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Cricket|Components")
	UBoxComponent* SweetSpotCollision;

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Cricket|Components")
	UBoxComponent* EdgeCollision;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Batting")
	float SweetSpotPowerMultiplier = 1.35f;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Batting")
	float EdgeDeflectionAngleDeg = 35.0f;

	UPROPERTY(BlueprintReadOnly, Category = "Cricket|Batting")
	bool bIsSwinging = false;

	UPROPERTY(BlueprintReadOnly, Category = "Cricket|Batting")
	ECricketShotType ActiveShotType = ECricketShotType::StraightDrive;

	UPROPERTY(BlueprintReadOnly, Category = "Cricket|Batting")
	float SwingVelocityMagnitude = 0.0f;

	UFUNCTION(BlueprintCallable, Category = "Cricket|Batting")
	void StartSwing(ECricketShotType ShotType, float PowerRatio, FVector SwingDirection);

	UFUNCTION(BlueprintCallable, Category = "Cricket|Batting")
	void EndSwing();

protected:
	virtual void BeginPlay() override;

	UFUNCTION()
	void OnSweetSpotOverlap(UPrimitiveComponent* OverlappedComp, AActor* OtherActor, UPrimitiveComponent* OtherComp, int32 OtherBodyIndex, bool bFromSweep, const FHitResult& SweepResult);

	UFUNCTION()
	void OnEdgeOverlap(UPrimitiveComponent* OverlappedComp, AActor* OtherActor, UPrimitiveComponent* OtherComp, int32 OtherBodyIndex, bool bFromSweep, const FHitResult& SweepResult);

private:
	FVector CurrentSwingDirection = FVector::ForwardVector;
	float SwingPower = 1.0f;
	float SwingStartTime = 0.0f;
};
