#pragma once

#include "CoreMinimal.h"
#include "Engine/GameInstance.h"
#include "Cricket27GameInstance.generated.h"

USTRUCT(BlueprintType)
struct FCareerProfile
{
	GENERATED_BODY()

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Profile")
	FString PlayerName = TEXT("Original Master");

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Profile")
	int32 MatchesPlayed = 0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Profile")
	int32 MatchesWon = 0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Profile")
	int32 TotalCareerRuns = 0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Profile")
	int32 HighestScore = 0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Profile")
	int32 TotalCareerWickets = 0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Profile")
	FString BestBowlingFigures = TEXT("0/0");
};

UCLASS()
class CRICKET27_API ACricket27GameInstance : public UGameInstance
{
	GENERATED_BODY()

public:
	ACricket27GameInstance();

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Profile")
	FCareerProfile UserProfile;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Settings")
	float MasterVolume = 1.0f;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Settings")
	float CrowdVolume = 0.85f;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Settings")
	int32 GraphicsQualityLevel = 3; // 0 = Low (Mobile), 3 = Epic (PC)

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Match")
	FString SelectedHomeTeam = TEXT("ROYAL STRIKERS");

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Match")
	FString SelectedAwayTeam = TEXT("COASTAL TITANS");

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Match")
	int32 SelectedMatchOvers = 3;

	UFUNCTION(BlueprintCallable, Category = "Cricket|Save")
	void SaveProfileData();

	UFUNCTION(BlueprintCallable, Category = "Cricket|Save")
	void LoadProfileData();
};
