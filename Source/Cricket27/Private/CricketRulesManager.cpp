#include "CricketRulesManager.h"

ACricketRulesManager::ACricketRulesManager()
{
	PrimaryActorTick.bCanEverTick = false;
}

void ACricketRulesManager::InitializeMatch(FString Team1Name, FString Team2Name, int32 OversPerInnings)
{
	MatchOvers = FMath::Max(1, OversPerInnings);
	CurrentInningsIndex = 1;
	TargetToWin = 0;
	bMatchFinished = false;
	bIsFreeHit = false;

	// Setup Team 1 (Batting First)
	Team1Scorecard = FTeamScorecard();
	Team1Scorecard.TeamName = Team1Name;
	Team1Scorecard.MaxOversAllowed = MatchOvers;

	for (int32 i = 1; i <= 11; ++i)
	{
		FBatterStats Batter;
		Batter.BatterName = FString::Printf(TEXT("%s Player %d"), *Team1Name, i);
		Team1Scorecard.BattingLineup.Add(Batter);
	}
	for (int32 i = 1; i <= 5; ++i)
	{
		FBowlerStats Bowler;
		Bowler.BowlerName = FString::Printf(TEXT("%s Bowler %d"), *Team2Name, i);
		Team1Scorecard.BowlingLineup.Add(Bowler);
	}

	// Setup Team 2 (Chasing)
	Team2Scorecard = FTeamScorecard();
	Team2Scorecard.TeamName = Team2Name;
	Team2Scorecard.MaxOversAllowed = MatchOvers;

	for (int32 i = 1; i <= 11; ++i)
	{
		FBatterStats Batter;
		Batter.BatterName = FString::Printf(TEXT("%s Player %d"), *Team2Name, i);
		Team2Scorecard.BattingLineup.Add(Batter);
	}
	for (int32 i = 1; i <= 5; ++i)
	{
		FBowlerStats Bowler;
		Bowler.BowlerName = FString::Printf(TEXT("%s Bowler %d"), *Team1Name, i);
		Team2Scorecard.BowlingLineup.Add(Bowler);
	}

	CurrentStrikerIndex = 0;
	CurrentNonStrikerIndex = 1;
	CurrentBowlerIndex = 0;
}

FTeamScorecard& ACricketRulesManager::GetActiveScorecard()
{
	return (CurrentInningsIndex == 1) ? Team1Scorecard : Team2Scorecard;
}

void ACricketRulesManager::RotateStrike()
{
	int32 Temp = CurrentStrikerIndex;
	CurrentStrikerIndex = CurrentNonStrikerIndex;
	CurrentNonStrikerIndex = Temp;
}

void ACricketRulesManager::RecordDelivery(EDeliveryOutcome Outcome, int32 RunsScored, bool bIsLegalDelivery, FString Commentary)
{
	if (bMatchFinished)
	{
		return;
	}

	FTeamScorecard& Scorecard = GetActiveScorecard();

	// Calculate runs and extras
	int32 TotalBallRuns = RunsScored;
	bool bIsWide = (Outcome == EDeliveryOutcome::WideBall);
	bool bIsNoBall = (Outcome == EDeliveryOutcome::NoBall);
	bool bIsWicket = (Outcome == EDeliveryOutcome::WicketBowled || Outcome == EDeliveryOutcome::WicketCaught ||
					  Outcome == EDeliveryOutcome::WicketLBW || Outcome == EDeliveryOutcome::WicketRunOut ||
					  Outcome == EDeliveryOutcome::WicketStumped);

	// Free hit exemption: Batter can only be Run Out on a Free Hit
	if (bIsFreeHit && bIsWicket && Outcome != EDeliveryOutcome::WicketRunOut)
	{
		bIsWicket = false;
		Outcome = EDeliveryOutcome::DotBall;
		Commentary += TEXT(" (Not out on Free Hit!)");
	}

	if (bIsWide || bIsNoBall)
	{
		TotalBallRuns += 1; // 1 run penalty extra
		Scorecard.TotalExtras += 1;
		bIsFreeHit = bIsNoBall; // Next ball is free hit if NoBall
	}
	else
	{
		bIsFreeHit = false;
	}

	Scorecard.TotalRuns += TotalBallRuns;

	// Record bowler stats
	if (Scorecard.BowlingLineup.IsValidIndex(CurrentBowlerIndex))
	{
		FBowlerStats& ActiveBowler = Scorecard.BowlingLineup[CurrentBowlerIndex];
		ActiveBowler.RunsConceded += TotalBallRuns;

		if (bIsLegalDelivery)
		{
			ActiveBowler.LegalBallsBowled += 1;
		}
		if (bIsWide)
		{
			ActiveBowler.WidesConceded += 1;
		}
		if (bIsNoBall)
		{
			ActiveBowler.NoBallsConceded += 1;
		}
		if (bIsWicket && Outcome != EDeliveryOutcome::WicketRunOut)
		{
			ActiveBowler.WicketsTaken += 1;
		}
	}

	// Record batsman stats
	if (Scorecard.BattingLineup.IsValidIndex(CurrentStrikerIndex))
	{
		FBatterStats& Striker = Scorecard.BattingLineup[CurrentStrikerIndex];

		if (!bIsWide)
		{
			Striker.BallsFaced += 1;
		}

		if (Outcome != EDeliveryOutcome::Bye && Outcome != EDeliveryOutcome::LegBye && !bIsWide)
		{
			Striker.RunsScored += RunsScored;
			if (RunsScored == 4) Striker.FoursHit += 1;
			if (RunsScored == 6) Striker.SixesHit += 1;
		}

		if (bIsWicket)
		{
			Striker.bIsOut = true;
			Striker.DismissalReason = FString::Printf(TEXT("%s"), *UEnum::GetValueAsString(Outcome));
			Scorecard.TotalWickets += 1;

			// Bring next batter to crease
			int32 NextBatter = FMath::Max(CurrentStrikerIndex, CurrentNonStrikerIndex) + 1;
			if (NextBatter < Scorecard.BattingLineup.Num())
			{
				CurrentStrikerIndex = NextBatter;
			}
		}
	}

	// Strike rotation on odd runs
	if (RunsScored % 2 != 0)
	{
		RotateStrike();
	}

	if (bIsLegalDelivery)
	{
		Scorecard.TotalLegalBalls += 1;
	}

	// Record ball-by-ball history
	FBallByBallRecord Record;
	Record.OverIndex = Scorecard.TotalLegalBalls / 6;
	Record.BallInOver = Scorecard.TotalLegalBalls % 6;
	Record.Outcome = Outcome;
	Record.RunsThisBall = TotalBallRuns;
	Record.bIsLegalDelivery = bIsLegalDelivery;
	Record.CommentaryText = Commentary;
	if (Scorecard.BattingLineup.IsValidIndex(CurrentStrikerIndex))
	{
		Record.StrikerName = Scorecard.BattingLineup[CurrentStrikerIndex].BatterName;
	}
	if (Scorecard.BowlingLineup.IsValidIndex(CurrentBowlerIndex))
	{
		Record.BowlerName = Scorecard.BowlingLineup[CurrentBowlerIndex].BowlerName;
	}
	Scorecard.OverHistory.Add(Record);

	OnBallCompleted.Broadcast(Record);

	// Over completion check
	if (bIsLegalDelivery && (Scorecard.TotalLegalBalls % 6 == 0))
	{
		int32 CompletedOver = Scorecard.TotalLegalBalls / 6;
		RotateStrike(); // Batsmen switch ends at end of over
		CurrentBowlerIndex = (CurrentBowlerIndex + 1) % Scorecard.BowlingLineup.Num();
		OnOverCompleted.Broadcast(CompletedOver, Scorecard);
	}

	CheckInningsProgression();
}

void ACricketRulesManager::CheckInningsProgression()
{
	FTeamScorecard& Scorecard = GetActiveScorecard();
	int32 MaxBalls = MatchOvers * 6;
	bool bAllOut = (Scorecard.TotalWickets >= 10);
	bool bOversExhausted = (Scorecard.TotalLegalBalls >= MaxBalls);

	// Second Innings win condition: Target reached!
	if (CurrentInningsIndex == 2 && Scorecard.TotalRuns >= TargetToWin)
	{
		ConcludeMatch();
		return;
	}

	if (bAllOut || bOversExhausted)
	{
		if (CurrentInningsIndex == 1)
		{
			// End Innings 1
			TargetToWin = Team1Scorecard.TotalRuns + 1;
			OnInningsCompleted.Broadcast(1, Team1Scorecard);

			CurrentInningsIndex = 2;
			CurrentStrikerIndex = 0;
			CurrentNonStrikerIndex = 1;
			CurrentBowlerIndex = 0;
			bIsFreeHit = false;
		}
		else
		{
			// End Innings 2 -> Conclude match
			OnInningsCompleted.Broadcast(2, Team2Scorecard);
			ConcludeMatch();
		}
	}
}

void ACricketRulesManager::ConcludeMatch()
{
	bMatchFinished = true;
	FString Winner;
	FString Margin;

	if (Team2Scorecard.TotalRuns > Team1Scorecard.TotalRuns)
	{
		Winner = Team2Scorecard.TeamName;
		int32 WicketsLeft = 10 - Team2Scorecard.TotalWickets;
		Margin = FString::Printf(TEXT("Won by %d wickets"), WicketsLeft);
	}
	else if (Team1Scorecard.TotalRuns > Team2Scorecard.TotalRuns)
	{
		Winner = Team1Scorecard.TeamName;
		int32 RunsDiff = Team1Scorecard.TotalRuns - Team2Scorecard.TotalRuns;
		Margin = FString::Printf(TEXT("Won by %d runs"), RunsDiff);
	}
	else
	{
		Winner = TEXT("Match Tied");
		Margin = TEXT("Scores level - Proceed to Super Over");
	}

	OnMatchCompleted.Broadcast(Winner, Margin);
}

FString ACricketRulesManager::GetMatchStatusText() const
{
	if (bMatchFinished)
	{
		if (Team1Scorecard.TotalRuns > Team2Scorecard.TotalRuns)
		{
			return FString::Printf(TEXT("%s won by %d runs!"), *Team1Scorecard.TeamName, Team1Scorecard.TotalRuns - Team2Scorecard.TotalRuns);
		}
		else if (Team2Scorecard.TotalRuns > Team1Scorecard.TotalRuns)
		{
			return FString::Printf(TEXT("%s won by %d wickets!"), *Team2Scorecard.TeamName, 10 - Team2Scorecard.TotalWickets);
		}
		else
		{
			return TEXT("Match Tied!");
		}
	}

	if (CurrentInningsIndex == 1)
	{
		return FString::Printf(TEXT("%s: %d/%d (%d.%d/%d ov)"), 
			*Team1Scorecard.TeamName, 
			Team1Scorecard.TotalRuns, 
			Team1Scorecard.TotalWickets, 
			Team1Scorecard.TotalLegalBalls / 6, 
			Team1Scorecard.TotalLegalBalls % 6, 
			MatchOvers);
	}
	else
	{
		int32 RunsNeeded = TargetToWin - Team2Scorecard.TotalRuns;
		int32 BallsRemaining = (MatchOvers * 6) - Team2Scorecard.TotalLegalBalls;
		return FString::Printf(TEXT("%s: %d/%d (%d.%d/%d ov) - Need %d runs from %d balls"), 
			*Team2Scorecard.TeamName, 
			Team2Scorecard.TotalRuns, 
			Team2Scorecard.TotalWickets, 
			Team2Scorecard.TotalLegalBalls / 6, 
			Team2Scorecard.TotalLegalBalls % 6, 
			MatchOvers,
			RunsNeeded,
			BallsRemaining);
	}
}

bool ACricketRulesManager::IsMatchFinished() const
{
	return bMatchFinished;
}
