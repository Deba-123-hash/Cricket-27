#pragma once

#include "CoreMinimal.h"
#include "GameFramework/GameStateBase.h"
#include "CricketTypes.h"
#include "Cricket27GameState.generated.h"

UCLASS()
class CRICKET27_API ACricket27GameState : public AGameStateBase
{
	GENERATED_BODY()

public:
	ACricket27GameState();

	virtual void GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& OutLifetimeProps) const override;

	UPROPERTY(ReplicatedUsing = OnRep_MatchPhase, BlueprintReadOnly, Category = "Cricket|Multiplayer")
	EMatchStatePhase ReplicatedMatchPhase = EMatchStatePhase::PregameToss;

	UPROPERTY(ReplicatedUsing = OnRep_ScoreUpdate, BlueprintReadOnly, Category = "Cricket|Multiplayer")
	int32 ReplicatedTotalRuns = 0;

	UPROPERTY(ReplicatedUsing = OnRep_ScoreUpdate, BlueprintReadOnly, Category = "Cricket|Multiplayer")
	int32 ReplicatedTotalWickets = 0;

	UPROPERTY(ReplicatedUsing = OnRep_ScoreUpdate, BlueprintReadOnly, Category = "Cricket|Multiplayer")
	int32 ReplicatedTotalOvers = 0;

	UPROPERTY(Replicated, BlueprintReadOnly, Category = "Cricket|Multiplayer")
	FString ReplicatedCommentary;

	UFUNCTION()
	void OnRep_MatchPhase();

	UFUNCTION()
	void OnRep_ScoreUpdate();
};
