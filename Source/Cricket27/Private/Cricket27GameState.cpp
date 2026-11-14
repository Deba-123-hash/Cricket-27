#include "Cricket27GameState.h"
#include "Net/UnrealNetwork.h"

ACricket27GameState::ACricket27GameState()
{
	bReplicates = true;
}

void ACricket27GameState::GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& OutLifetimeProps) const
{
	Super::GetLifetimeReplicatedProps(OutLifetimeProps);

	DOREPLIFETIME(ACricket27GameState, ReplicatedMatchPhase);
	DOREPLIFETIME(ACricket27GameState, ReplicatedTotalRuns);
	DOREPLIFETIME(ACricket27GameState, ReplicatedTotalWickets);
	DOREPLIFETIME(ACricket27GameState, ReplicatedTotalOvers);
	DOREPLIFETIME(ACricket27GameState, ReplicatedCommentary);
}

void ACricket27GameState::OnRep_MatchPhase()
{
	// Client update hook for HUD phase notifications
}

void ACricket27GameState::OnRep_ScoreUpdate()
{
	// Client update hook for HUD scoreboard update
}
