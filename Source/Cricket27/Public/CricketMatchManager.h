#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "CricketTypes.h"
#include "CricketMatchManager.generated.h"

class ACricketBall;
class ACricketWicket;
class ACricket27Character;
class ACricketFieldingAI;
class ACricketRulesManager;
class ACricketCameraManager;

DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FOnMatchPhaseChanged, EMatchStatePhase, NewPhase);
DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FOnCommentaryBroadcast, FString, Commentary);

UCLASS()
class CRICKET27_API ACricketMatchManager : public AActor
{
	GENERATED_BODY()
	
public:	
	ACricketMatchManager();

protected:
	virtual void BeginPlay() override;

public:	
	virtual void Tick(float DeltaTime) override;

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Cricket|Phase")
	EMatchStatePhase CurrentMatchPhase = EMatchStatePhase::PregameToss;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Teams")
	FString HomeTeamName = TEXT("ROYAL STRIKERS");

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Teams")
	FString AwayTeamName = TEXT("COASTAL TITANS");

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Rules")
	int32 MatchTotalOvers = 3;

	// World actor references
	UPROPERTY(BlueprintReadWrite, Category = "Cricket|References")
	ACricketBall* MatchBall;

	UPROPERTY(BlueprintReadWrite, Category = "Cricket|References")
	ACricketWicket* StrikerWicket;

	UPROPERTY(BlueprintReadWrite, Category = "Cricket|References")
	ACricketWicket* NonStrikerWicket;

	UPROPERTY(BlueprintReadWrite, Category = "Cricket|References")
	ACricket27Character* StrikerBatsman;

	UPROPERTY(BlueprintReadWrite, Category = "Cricket|References")
	ACricket27Character* NonStrikerBatsman;

	UPROPERTY(BlueprintReadWrite, Category = "Cricket|References")
	ACricket27Character* ActiveBowler;

	UPROPERTY(BlueprintReadWrite, Category = "Cricket|References")
	ACricketFieldingAI* FieldingManager;

	UPROPERTY(BlueprintReadWrite, Category = "Cricket|References")
	ACricketRulesManager* RulesEngine;

	UPROPERTY(BlueprintReadWrite, Category = "Cricket|References")
	ACricketCameraManager* CameraDirector;

	// Match Flow Control
	UPROPERTY(BlueprintAssignable, Category = "Cricket|Events")
	FOnMatchPhaseChanged OnMatchPhaseChanged;

	UPROPERTY(BlueprintAssignable, Category = "Cricket|Events")
	FOnCommentaryBroadcast OnCommentaryBroadcast;

	UFUNCTION(BlueprintCallable, Category = "Cricket|MatchFlow")
	void ConductToss(bool bPlayerCalledHeads, bool bPlayerWonToss, bool bChooseToBat);

	UFUNCTION(BlueprintCallable, Category = "Cricket|MatchFlow")
	void PrepareNextDelivery();

	UFUNCTION(BlueprintCallable, Category = "Cricket|MatchFlow")
	void TriggerBowlingDelivery(EBowlingDeliveryType DeliveryType, FVector TargetLanding, float SpeedKmh);

	UFUNCTION(BlueprintCallable, Category = "Cricket|MatchFlow")
	void OnBallStruckByBat(FVector ContactPoint, FVector ExitVelocity, EShotTiming TimingQuality);

	UFUNCTION(BlueprintCallable, Category = "Cricket|MatchFlow")
	void OnBallBoundaryCrossed(bool bIsSix, int32 Runs);

	UFUNCTION(BlueprintCallable, Category = "Cricket|MatchFlow")
	void OnWicketFell(EDeliveryOutcome DismissalType);

	UFUNCTION(BlueprintCallable, Category = "Cricket|MatchFlow")
	void CompleteActiveDelivery(EDeliveryOutcome Outcome, int32 Runs, bool bIsLegal, FString CustomCommentary = TEXT(""));

private:
	float DeliveryTimeoutTimer = 0.0f;
	bool bDeliveryActive = false;
	void SetPhase(EMatchStatePhase NewPhase);
};
