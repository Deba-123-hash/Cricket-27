#pragma once

#include "CoreMinimal.h"
#include "GameFramework/GameModeBase.h"
#include "Cricket27GameMode.generated.h"

class ACricketMatchManager;
class ACricketBall;
class ACricketWicket;
class ACricketCameraManager;

UCLASS()
class CRICKET27_API ACricket27GameMode : public AGameModeBase
{
	GENERATED_BODY()

public:
	ACricket27GameMode();

	virtual void StartPlay() override;

	UPROPERTY(EditDefaultsOnly, Category = "Cricket|Classes")
	TSubclassOf<ACricketMatchManager> MatchManagerClass;

	UPROPERTY(EditDefaultsOnly, Category = "Cricket|Classes")
	TSubclassOf<ACricketBall> BallClass;

	UPROPERTY(EditDefaultsOnly, Category = "Cricket|Classes")
	TSubclassOf<ACricketWicket> WicketClass;

	UPROPERTY(EditDefaultsOnly, Category = "Cricket|Classes")
	TSubclassOf<ACricketCameraManager> CameraManagerClass;

protected:
	void SpawnStadiumGameplayActors();
};
