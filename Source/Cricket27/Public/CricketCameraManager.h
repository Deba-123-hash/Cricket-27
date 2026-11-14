#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "CricketCameraManager.generated.h"

class UCameraComponent;
class USpringArmComponent;

UENUM(BlueprintType)
enum class ECricketCameraView : uint8
{
	BroadcastMain UMETA(DisplayName = "Broadcast Main (Side Angle)"),
	BattingPro UMETA(DisplayName = "Batting Pro (Behind Batsman)"),
	BowlingApproach UMETA(DisplayName = "Bowling Approach (Behind Bowler)"),
	StumpCam UMETA(DisplayName = "Stump Cam (Wicket Level)"),
	BallTracker UMETA(DisplayName = "Ball Tracking Dynamic"),
	StadiumCinematic UMETA(DisplayName = "Stadium Panoramic Orbit")
};

UCLASS()
class CRICKET27_API ACricketCameraManager : public AActor
{
	GENERATED_BODY()
	
public:	
	ACricketCameraManager();

protected:
	virtual void BeginPlay() override;

public:	
	virtual void Tick(float DeltaTime) override;

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Cricket|Camera")
	USceneComponent* SceneRoot;

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Cricket|Camera")
	USpringArmComponent* SpringArm;

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Cricket|Camera")
	UCameraComponent* MainCamera;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Camera")
	ECricketCameraView ActiveCameraView = ECricketCameraView::BroadcastMain;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Camera")
	float CameraBlendSpeed = 4.5f;

	UFUNCTION(BlueprintCallable, Category = "Cricket|Camera")
	void SetCameraMode(ECricketCameraView NewMode, AActor* TargetFocusActor = nullptr);

	UFUNCTION(BlueprintCallable, Category = "Cricket|Camera")
	void TrackBallInAir(AActor* BallActor);

private:
	FVector TargetCameraLocation;
	FRotator TargetCameraRotation;
	float TargetArmLength = 1200.0f;
	AActor* FocusedActor = nullptr;
};
