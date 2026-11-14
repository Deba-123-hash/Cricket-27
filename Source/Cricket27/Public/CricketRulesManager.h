#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "CricketTypes.h"
#include "CricketRulesManager.generated.h"

DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FOnBallCompleted, const FBallByBallRecord&, BallRecord);
DECLARE_DYNAMIC_MULTICAST_DELEGATE_TwoParams(FOnOverCompleted, int32, OverNumber, const FTeamScorecard&, CurrentScorecard);
DECLARE_DYNAMIC_MULTICAST_DELEGATE_TwoParams(FOnInningsCompleted, int32, InningsNumber, const FTeamScorecard&, FinalInningsScorecard);
DECLARE_DYNAMIC_MULTICAST_DELEGATE_TwoParams(FOnMatchCompleted, FString, WinnerTeam, FString, VictoryMarginDescription);

UCLASS()
class CRICKET27_API ACricketRulesManager : public AActor
{
	GENERATED_BODY()
	
public:	
	ACricketRulesManager();

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Rules")
	int32 MatchOvers = 3; // Default 3-over rapid match for playable prototype

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Cricket|Rules")
	int32 CurrentInningsIndex = 1; // 1 or 2

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Cricket|Rules")
	int32 TargetToWin = 0; // Set after Innings 1 completes

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Cricket|Scorecard")
	FTeamScorecard Team1Scorecard;

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Cricket|Scorecard")
	FTeamScorecard Team2Scorecard;

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Cricket|State")
	int32 CurrentStrikerIndex = 0;

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Cricket|State")
	int32 CurrentNonStrikerIndex = 1;

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Cricket|State")
	int32 CurrentBowlerIndex = 0;

	UPROPERTY(BlueprintReadOnly, Category = "Cricket|Rules")
	bool bIsFreeHit = false;

	// Event Delegates
	UPROPERTY(BlueprintAssignable, Category = "Cricket|Events")
	FOnBallCompleted OnBallCompleted;

	UPROPERTY(BlueprintAssignable, Category = "Cricket|Events")
	FOnOverCompleted OnOverCompleted;

	UPROPERTY(BlueprintAssignable, Category = "Cricket|Events")
	FOnInningsCompleted OnInningsCompleted;

	UPROPERTY(BlueprintAssignable, Category = "Cricket|Events")
	FOnMatchCompleted OnMatchCompleted;

	// Operations
	UFUNCTION(BlueprintCallable, Category = "Cricket|Rules")
	void InitializeMatch(FString Team1Name, FString Team2Name, int32 OversPerInnings);

	UFUNCTION(BlueprintCallable, Category = "Cricket|Rules")
	void RecordDelivery(EDeliveryOutcome Outcome, int32 RunsScored, bool bIsLegalDelivery, FString Commentary);

	UFUNCTION(BlueprintCallable, Category = "Cricket|Rules")
	void RotateStrike();

	UFUNCTION(BlueprintCallable, Category = "Cricket|Rules")
	FTeamScorecard& GetActiveScorecard();

	UFUNCTION(BlueprintPure, Category = "Cricket|Rules")
	FString GetMatchStatusText() const;

	UFUNCTION(BlueprintPure, Category = "Cricket|Rules")
	bool IsMatchFinished() const;

private:
	bool bMatchFinished = false;
	void CheckInningsProgression();
	void ConcludeMatch();
};
