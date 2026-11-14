#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "CricketTypes.h"
#include "CricketBall.generated.h"

class USphereComponent;
class UStaticMeshComponent;
class UProjectileMovementComponent;
class UTrailRendererComponent;

DECLARE_DYNAMIC_MULTICAST_DELEGATE_TwoParams(FOnBallPitchBounce, FVector, BounceLocation, float, BounceSpeed);
DECLARE_DYNAMIC_MULTICAST_DELEGATE_ThreeParams(FOnBallBatContact, FVector, ContactPoint, FVector, ExitVelocity, EShotTiming, TimingQuality);
DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FOnBallHitWicket, AActor*, WicketActor);
DECLARE_DYNAMIC_MULTICAST_DELEGATE_TwoParams(FOnBallCrossedBoundary, bool, bIsSix, int32, RunsAwarded);

UCLASS()
class CRICKET27_API ACricketBall : public AActor
{
	GENERATED_BODY()
	
public:	
	ACricketBall();

protected:
	virtual void BeginPlay() override;

public:	
	virtual void Tick(float DeltaTime) override;

	// Core Components
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Cricket|Components")
	USphereComponent* SphereCollision;

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Cricket|Components")
	UStaticMeshComponent* BallMesh;

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Cricket|Components")
	UProjectileMovementComponent* ProjectileMovement;

	// Physics & Aerodynamic parameters
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Physics")
	float BallMassKg = 0.160f; // Official cricket ball mass ~160g

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Physics")
	float BallRadiusCm = 3.6f;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Physics")
	float PitchRestitution = 0.65f; // Coefficient of restitution on pitch bounce

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Physics")
	float PitchFriction = 0.42f;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Physics")
	float AirDragCoefficient = 0.28f;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Physics")
	float MagnusCoefficient = 0.15f; // Lateral swing & drift force

	// Current Flight & Delivery State
	UPROPERTY(BlueprintReadOnly, Category = "Cricket|State")
	bool bIsInAir = false;

	UPROPERTY(BlueprintReadOnly, Category = "Cricket|State")
	bool bHasBouncedOnPitch = false;

	UPROPERTY(BlueprintReadOnly, Category = "Cricket|State")
	bool bHasStruckBat = false;

	UPROPERTY(BlueprintReadOnly, Category = "Cricket|State")
	bool bIsDeadBall = false;

	UPROPERTY(BlueprintReadOnly, Category = "Cricket|State")
	EBowlingDeliveryType CurrentDeliveryType = EBowlingDeliveryType::FastPace;

	UPROPERTY(BlueprintReadOnly, Category = "Cricket|State")
	FVector BallSpinAxis = FVector::UpVector;

	UPROPERTY(BlueprintReadOnly, Category = "Cricket|State")
	float SpinRateRpm = 0.0f;

	// Events
	UPROPERTY(BlueprintAssignable, Category = "Cricket|Events")
	FOnBallPitchBounce OnBallPitchBounce;

	UPROPERTY(BlueprintAssignable, Category = "Cricket|Events")
	FOnBallBatContact OnBallBatContact;

	UPROPERTY(BlueprintAssignable, Category = "Cricket|Events")
	FOnBallHitWicket OnBallHitWicket;

	UPROPERTY(BlueprintAssignable, Category = "Cricket|Events")
	FOnBallCrossedBoundary OnBallCrossedBoundary;

	// Gameplay Methods
	UFUNCTION(BlueprintCallable, Category = "Cricket|Bowling")
	void LaunchDelivery(FVector ReleaseLocation, FVector TargetBounceLocation, float SpeedKmh, EBowlingDeliveryType DeliveryType, float SwingSpinAmount);

	UFUNCTION(BlueprintCallable, Category = "Cricket|Batting")
	void ApplyBatStrike(FVector ContactNormal, FVector BatSwingVelocity, float TimingOffset, ECricketShotType ShotType);

	UFUNCTION(BlueprintCallable, Category = "Cricket|Fielding")
	void InterceptBall(AActor* Fielder);

	UFUNCTION(BlueprintCallable, Category = "Cricket|Physics")
	FVector PredictPitchLandingPoint(float InitialSpeedKmh, FVector ReleasePoint, FVector AimTarget);

	UFUNCTION(BlueprintCallable, Category = "Cricket|State")
	void ResetBall(FVector ResetLocation);

protected:
	UFUNCTION()
	void OnBallHit(UPrimitiveComponent* HitComp, AActor* OtherActor, UPrimitiveComponent* OtherComp, FVector NormalImpulse, const FHitResult& Hit);

private:
	FVector PreviousVelocity;
	float FlightTimer = 0.0f;
	void ApplyAerodynamics(float DeltaTime);
};
