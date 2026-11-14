#include "Cricket27GameMode.h"
#include "Cricket27GameState.h"
#include "Cricket27PlayerController.h"
#include "Cricket27Character.h"
#include "CricketMatchManager.h"
#include "CricketBall.h"
#include "CricketWicket.h"
#include "CricketCameraManager.h"

ACricket27GameMode::ACricket27GameMode()
{
	GameStateClass = ACricket27GameState::StaticClass();
	PlayerControllerClass = ACricket27PlayerController::StaticClass();
	DefaultPawnClass = ACricket27Character::StaticClass();

	MatchManagerClass = ACricketMatchManager::StaticClass();
	BallClass = ACricketBall::StaticClass();
	WicketClass = ACricketWicket::StaticClass();
	CameraManagerClass = ACricketCameraManager::StaticClass();
}

void ACricket27GameMode::StartPlay()
{
	Super::StartPlay();
	SpawnStadiumGameplayActors();
}

void ACricket27GameMode::SpawnStadiumGameplayActors()
{
	UWorld* World = GetWorld();
	if (!World)
	{
		return;
	}

	// 1. Spawn Wickets (22 yards apart ~ 2012 cm apart)
	// Striker wicket at (-1006, 0, 0)
	FActorSpawnParameters SpawnParams;
	SpawnParams.SpawnCollisionHandlingOverride = ESpawnActorCollisionHandlingMethod::AlwaysSpawn;

	if (WicketClass)
	{
		ACricketWicket* StrikerWicket = World->SpawnActor<ACricketWicket>(WicketClass, FVector(-1006.0f, 0.0f, 0.0f), FRotator::ZeroRotator, SpawnParams);
		ACricketWicket* NonStrikerWicket = World->SpawnActor<ACricketWicket>(WicketClass, FVector(1006.0f, 0.0f, 0.0f), FRotator(0.0f, 180.0f, 0.0f), SpawnParams);
	}

	// 2. Spawn Cricket Ball
	if (BallClass)
	{
		ACricketBall* Ball = World->SpawnActor<ACricketBall>(BallClass, FVector(1000.0f, 0.0f, 120.0f), FRotator::ZeroRotator, SpawnParams);
	}

	// 3. Spawn Camera Manager
	if (CameraManagerClass)
	{
		ACricketCameraManager* CamMgr = World->SpawnActor<ACricketCameraManager>(CameraManagerClass, FVector(-1200.0f, 0.0f, 180.0f), FRotator::ZeroRotator, SpawnParams);
	}

	// 4. Spawn Match Manager
	if (MatchManagerClass)
	{
		ACricketMatchManager* MatchMgr = World->SpawnActor<ACricketMatchManager>(MatchManagerClass, FVector::ZeroVector, FRotator::ZeroRotator, SpawnParams);
	}
}
