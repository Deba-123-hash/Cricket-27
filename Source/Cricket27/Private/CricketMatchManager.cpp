#include "CricketMatchManager.h"
#include "CricketBall.h"
#include "CricketWicket.h"
#include "Cricket27Character.h"
#include "CricketFieldingAI.h"
#include "CricketRulesManager.h"
#include "CricketCameraManager.h"
#include "Kismet/GameplayStatics.h"

ACricketMatchManager::ACricketMatchManager()
{
	PrimaryActorTick.bCanEverTick = true;
}

void ACricketMatchManager::BeginPlay()
{
	Super::BeginPlay();

	// Find or spawn Rules Manager
	TArray<AActor*> FoundRules;
	UGameplayStatics::GetAllActorsOfClass(GetWorld(), ACricketRulesManager::StaticClass(), FoundRules);
	if (FoundRules.Num() > 0)
	{
		RulesEngine = Cast<ACricketRulesManager>(FoundRules[0]);
	}
	else
	{
		RulesEngine = GetWorld()->SpawnActor<ACricketRulesManager>(ACricketRulesManager::StaticClass());
	}

	if (RulesEngine)
	{
		RulesEngine->InitializeMatch(HomeTeamName, AwayTeamName, MatchTotalOvers);
	}

	// Auto-locate scene actors
	TArray<AActor*> Balls;
	UGameplayStatics::GetAllActorsOfClass(GetWorld(), ACricketBall::StaticClass(), Balls);
	if (Balls.Num() > 0) MatchBall = Cast<ACricketBall>(Balls[0]);

	TArray<AActor*> Cameras;
	UGameplayStatics::GetAllActorsOfClass(GetWorld(), ACricketCameraManager::StaticClass(), Cameras);
	if (Cameras.Num() > 0) CameraDirector = Cast<ACricketCameraManager>(Cameras[0]);

	TArray<AActor*> Fielders;
	UGameplayStatics::GetAllActorsOfClass(GetWorld(), ACricketFieldingAI::StaticClass(), Fielders);
	if (Fielders.Num() > 0) FieldingManager = Cast<ACricketFieldingAI>(Fielders[0]);

	// Wire ball events
	if (MatchBall)
	{
		MatchBall->OnBallBatContact.AddDynamic(this, &ACricketMatchManager::OnBallStruckByBat);
		MatchBall->OnBallCrossedBoundary.AddDynamic(this, &ACricketMatchManager::OnBallBoundaryCrossed);
	}

	// Conduct default toss and start match flow
	ConductToss(true, true, true);
}

void ACricketMatchManager::Tick(float DeltaTime)
{
	Super::Tick(DeltaTime);

	if (bDeliveryActive)
	{
		DeliveryTimeoutTimer += DeltaTime;

		// If ball stopped or after 6 seconds of dead play, resolve delivery
		if (DeliveryTimeoutTimer > 6.5f || (MatchBall && MatchBall->bIsDeadBall && DeliveryTimeoutTimer > 2.0f))
		{
			if (CurrentMatchPhase != EMatchStatePhase::OverComplete && CurrentMatchPhase != EMatchStatePhase::MatchFinished)
			{
				CompleteActiveDelivery(EDeliveryOutcome::DotBall, 0, true, TEXT("Good defensive block, no run."));
			}
		}
	}
}

void ACricketMatchManager::SetPhase(EMatchStatePhase NewPhase)
{
	CurrentMatchPhase = NewPhase;
	OnMatchPhaseChanged.Broadcast(NewPhase);
}

void ACricketMatchManager::ConductToss(bool bPlayerCalledHeads, bool bPlayerWonToss, bool bChooseToBat)
{
	FString Decision = bChooseToBat ? TEXT("elect to bat first") : TEXT("elect to bowl first");
	FString TossCommentary = FString::Printf(TEXT("%s won the toss and decided to %s!"), *HomeTeamName, *Decision);
	OnCommentaryBroadcast.Broadcast(TossCommentary);

	PrepareNextDelivery();
}

void ACricketMatchManager::PrepareNextDelivery()
{
	bDeliveryActive = false;
	DeliveryTimeoutTimer = 0.0f;

	if (RulesEngine && RulesEngine->IsMatchFinished())
	{
		SetPhase(EMatchStatePhase::MatchFinished);
		if (CameraDirector)
		{
			CameraDirector->SetCameraMode(ECricketCameraView::StadiumCinematic);
		}
		return;
	}

	SetPhase(EMatchStatePhase::BowlerRunUp);

	if (MatchBall)
	{
		MatchBall->ResetBall(FVector(2000.0f, 0.0f, 150.0f));
	}

	if (FieldingManager)
	{
		FieldingManager->ResetFielderPositions();
	}

	if (CameraDirector)
	{
		CameraDirector->SetCameraMode(ECricketCameraView::BattingPro);
	}
}

void ACricketMatchManager::TriggerBowlingDelivery(EBowlingDeliveryType DeliveryType, FVector TargetLanding, float SpeedKmh)
{
	if (bDeliveryActive)
	{
		return;
	}

	bDeliveryActive = true;
	DeliveryTimeoutTimer = 0.0f;
	SetPhase(EMatchStatePhase::DeliveryRelease);

	if (ActiveBowler)
	{
		ActiveBowler->StartBowlingRunUp(DeliveryType, TargetLanding, SpeedKmh);
	}
	else if (MatchBall)
	{
		// Fallback direct launch if bowler character not placed in test map
		MatchBall->LaunchDelivery(FVector(1800.0f, 0.0f, 210.0f), TargetLanding, SpeedKmh, DeliveryType, 60.0f);
	}

	SetPhase(EMatchStatePhase::BallInAir);
}

void ACricketMatchManager::OnBallStruckByBat(FVector ContactPoint, FVector ExitVelocity, EShotTiming TimingQuality)
{
	SetPhase(EMatchStatePhase::BatContactOrMiss);

	FString TimingText;
	switch (TimingQuality)
	{
	case EShotTiming::Perfect: TimingText = TEXT("Sweet as a nut! Timed to absolute perfection!"); break;
	case EShotTiming::Good: TimingText = TEXT("Crisp connection through the outfield."); break;
	case EShotTiming::Early: TimingText = TEXT("Played a touch early through the shot."); break;
	case EShotTiming::Late: TimingText = TEXT("Late on the stroke, thick edge!"); break;
	default: TimingText = TEXT("Off the blade."); break;
	}
	OnCommentaryBroadcast.Broadcast(TimingText);

	if (FieldingManager && MatchBall)
	{
		FieldingManager->OnBallStruckByBat(MatchBall);
	}

	if (CameraDirector && MatchBall)
	{
		CameraDirector->TrackBallInAir(MatchBall);
	}
}

void ACricketMatchManager::OnBallBoundaryCrossed(bool bIsSix, int32 Runs)
{
	FString BoundaryText = bIsSix 
		? TEXT("MASSIVE HIT! IT'S OUT OF THE PARK FOR SIX!") 
		: TEXT("Races away across the lush outfield for FOUR!");
	
	OnCommentaryBroadcast.Broadcast(BoundaryText);
	EDeliveryOutcome Outcome = bIsSix ? EDeliveryOutcome::SixRuns : EDeliveryOutcome::FourRuns;
	CompleteActiveDelivery(Outcome, Runs, true, BoundaryText);
}

void ACricketMatchManager::OnWicketFell(EDeliveryOutcome DismissalType)
{
	FString WicketText = TEXT("OUT! The stumps are shattered! What a sensational breakthrough!");
	OnCommentaryBroadcast.Broadcast(WicketText);

	if (ActiveBowler)
	{
		ActiveBowler->PlayCelebration();
	}

	CompleteActiveDelivery(DismissalType, 0, true, WicketText);
}

void ACricketMatchManager::CompleteActiveDelivery(EDeliveryOutcome Outcome, int32 Runs, bool bIsLegal, FString CustomCommentary)
{
	if (!bDeliveryActive)
	{
		return;
	}

	bDeliveryActive = false;

	if (RulesEngine)
	{
		RulesEngine->RecordDelivery(Outcome, Runs, bIsLegal, CustomCommentary);
	}

	// Prepare for next ball after short delay (1.5s)
	FTimerHandle NextBallTimer;
	GetWorld()->GetTimerManager().SetTimer(NextBallTimer, this, &ACricketMatchManager::PrepareNextDelivery, 2.0f, false);
}
