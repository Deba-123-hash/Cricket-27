#include "CricketCameraManager.h"
#include "Camera/CameraComponent.h"
#include "GameFramework/SpringArmComponent.h"
#include "Kismet/KismetMathLibrary.h"

ACricketCameraManager::ACricketCameraManager()
{
	PrimaryActorTick.bCanEverTick = true;

	SceneRoot = CreateDefaultSubobject<USceneComponent>(TEXT("SceneRoot"));
	RootComponent = SceneRoot;

	SpringArm = CreateDefaultSubobject<USpringArmComponent>(TEXT("SpringArm"));
	SpringArm->SetupAttachment(SceneRoot);
	SpringArm->TargetArmLength = 1400.0f;
	SpringArm->bDoCollisionTest = false;
	SpringArm->bEnableCameraLag = true;
	SpringArm->CameraLagSpeed = 6.0f;

	MainCamera = CreateDefaultSubobject<UCameraComponent>(TEXT("MainCamera"));
	MainCamera->SetupAttachment(SpringArm, USpringArmComponent::SocketName);
	MainCamera->FieldOfView = 65.0f;
}

void ACricketCameraManager::BeginPlay()
{
	Super::BeginPlay();
	SetCameraMode(ECricketCameraView::BattingPro);
}

void ACricketCameraManager::Tick(float DeltaTime)
{
	Super::Tick(DeltaTime);

	// Smoothly interpolate arm length
	SpringArm->TargetArmLength = FMath::FInterpTo(SpringArm->TargetArmLength, TargetArmLength, DeltaTime, CameraBlendSpeed);

	if (ActiveCameraView == ECricketCameraView::BallTracker && FocusedActor)
	{
		// Smoothly follow ball location while maintaining angle
		FVector BallPos = FocusedActor->GetActorLocation();
		SetActorLocation(FMath::VInterpTo(GetActorLocation(), BallPos, DeltaTime, 8.0f));
	}
	else if (ActiveCameraView == ECricketCameraView::StadiumCinematic)
	{
		// Gentle 360 orbit around stadium
		AddActorLocalRotation(FRotator(0.0f, DeltaTime * 6.0f, 0.0f));
	}
}

void ACricketCameraManager::SetCameraMode(ECricketCameraView NewMode, AActor* TargetFocusActor)
{
	ActiveCameraView = NewMode;
	FocusedActor = TargetFocusActor;

	switch (NewMode)
	{
	case ECricketCameraView::BroadcastMain:
		// Elevated side-on TV broadcast view
		SetActorLocation(FVector(0.0f, 3200.0f, 950.0f));
		SetActorRotation(FRotator(-14.0f, -90.0f, 0.0f));
		TargetArmLength = 400.0f;
		MainCamera->FieldOfView = 55.0f;
		break;

	case ECricketCameraView::BattingPro:
		// Close third-person behind batsman looking down the pitch
		SetActorLocation(FVector(-2250.0f, 0.0f, 155.0f));
		SetActorRotation(FRotator(-5.0f, 0.0f, 0.0f));
		TargetArmLength = 320.0f;
		MainCamera->FieldOfView = 75.0f;
		break;

	case ECricketCameraView::BowlingApproach:
		// Behind bowler running in toward batting crease
		SetActorLocation(FVector(2500.0f, 0.0f, 220.0f));
		SetActorRotation(FRotator(-8.0f, 180.0f, 0.0f));
		TargetArmLength = 450.0f;
		MainCamera->FieldOfView = 68.0f;
		break;

	case ECricketCameraView::StumpCam:
		// Ground-level wide view from batting wicket looking out
		SetActorLocation(FVector(-2010.0f, 0.0f, 50.0f));
		SetActorRotation(FRotator(2.0f, 0.0f, 0.0f));
		TargetArmLength = 10.0f;
		MainCamera->FieldOfView = 95.0f;
		break;

	case ECricketCameraView::BallTracker:
		TargetArmLength = 650.0f;
		MainCamera->FieldOfView = 70.0f;
		break;

	case ECricketCameraView::StadiumCinematic:
		SetActorLocation(FVector(0.0f, 0.0f, 1800.0f));
		SetActorRotation(FRotator(-28.0f, 0.0f, 0.0f));
		TargetArmLength = 4800.0f;
		MainCamera->FieldOfView = 80.0f;
		break;
	}
}

void ACricketCameraManager::TrackBallInAir(AActor* BallActor)
{
	if (BallActor)
	{
		SetCameraMode(ECricketCameraView::BallTracker, BallActor);
	}
}
