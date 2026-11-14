#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "CricketTypes.h"
#include "CricketWicket.generated.h"

class UStaticMeshComponent;
class UCapsuleComponent;
class UBoxComponent;

DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FOnWicketBroken, EDeliveryOutcome, DismissalType);

UCLASS()
class CRICKET27_API ACricketWicket : public AActor
{
	GENERATED_BODY()
	
public:	
	ACricketWicket();

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Cricket|Components")
	USceneComponent* WicketRoot;

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Cricket|Components")
	UStaticMeshComponent* OffStump;

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Cricket|Components")
	UStaticMeshComponent* MiddleStump;

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Cricket|Components")
	UStaticMeshComponent* LegStump;

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Cricket|Components")
	UStaticMeshComponent* LeftBail;

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Cricket|Components")
	UStaticMeshComponent* RightBail;

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Cricket|Components")
	UBoxComponent* StumpsCollision;

	UPROPERTY(BlueprintReadOnly, Category = "Cricket|State")
	bool bAreBailsDislodged = false;

	UPROPERTY(BlueprintAssignable, Category = "Cricket|Events")
	FOnWicketBroken OnWicketBroken;

	UFUNCTION(BlueprintCallable, Category = "Cricket|Wicket")
	void BreakWicket(EDeliveryOutcome DismissalType);

	UFUNCTION(BlueprintCallable, Category = "Cricket|Wicket")
	void ResetWicket();

protected:
	virtual void BeginPlay() override;

	UFUNCTION()
	void OnStumpsHit(UPrimitiveComponent* HitComp, AActor* OtherActor, UPrimitiveComponent* OtherComp, FVector NormalImpulse, const FHitResult& Hit);

private:
	FTransform LeftBailInitialTransform;
	FTransform RightBailInitialTransform;
};
