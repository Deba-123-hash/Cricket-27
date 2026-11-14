#include "CoreMinimal.h"
#include "Misc/AutomationTest.h"
#include "CricketRulesManager.h"
#include "CricketTypes.h"

#if WITH_DEV_AUTOMATION_TESTS

IMPLEMENT_SIMPLE_AUTOMATION_TEST(FCricketScoringSingleTest, "Cricket27.Scoring.SingleRun", EAutomationTestFlags::ApplicationContextMask | EAutomationTestFlags::ProductFilter)

bool FCricketScoringSingleTest::RunTest(const FString& Parameters)
{
	ACricketRulesManager* Rules = NewObject<ACricketRulesManager>();
	Rules->InitializeMatch(TEXT("TeamA"), TEXT("TeamB"), 3);

	// Record a single run
	Rules->RecordDelivery(EDeliveryOutcome::Single, 1, true, TEXT("Single to long off"));

	TestEqual(TEXT("Total runs must be 1"), Rules->GetActiveScorecard().TotalRuns, 1);
	TestEqual(TEXT("Total legal balls must be 1"), Rules->GetActiveScorecard().TotalLegalBalls, 1);
	TestEqual(TEXT("Striker must have rotated"), Rules->CurrentStrikerIndex, 1);

	return true;
}

IMPLEMENT_SIMPLE_AUTOMATION_TEST(FCricketScoringBoundarySixTest, "Cricket27.Scoring.BoundarySix", EAutomationTestFlags::ApplicationContextMask | EAutomationTestFlags::ProductFilter)

bool FCricketScoringBoundarySixTest::RunTest(const FString& Parameters)
{
	ACricketRulesManager* Rules = NewObject<ACricketRulesManager>();
	Rules->InitializeMatch(TEXT("TeamA"), TEXT("TeamB"), 3);

	// Record a six
	Rules->RecordDelivery(EDeliveryOutcome::SixRuns, 6, true, TEXT("Huge six!"));

	TestEqual(TEXT("Total runs must be 6"), Rules->GetActiveScorecard().TotalRuns, 6);
	TestEqual(TEXT("Striker must have 6 runs"), Rules->GetActiveScorecard().BattingLineup[0].RunsScored, 6);
	TestEqual(TEXT("Striker must have 1 six hit"), Rules->GetActiveScorecard().BattingLineup[0].SixesHit, 1);
	TestEqual(TEXT("Striker retains strike on even runs"), Rules->CurrentStrikerIndex, 0);

	return true;
}

IMPLEMENT_SIMPLE_AUTOMATION_TEST(FCricketScoringWideBallTest, "Cricket27.Scoring.WideBall", EAutomationTestFlags::ApplicationContextMask | EAutomationTestFlags::ProductFilter)

bool FCricketScoringWideBallTest::RunTest(const FString& Parameters)
{
	ACricketRulesManager* Rules = NewObject<ACricketRulesManager>();
	Rules->InitializeMatch(TEXT("TeamA"), TEXT("TeamB"), 3);

	// Record wide ball (not a legal delivery)
	Rules->RecordDelivery(EDeliveryOutcome::WideBall, 0, false, TEXT("Wide down leg"));

	TestEqual(TEXT("Total runs must be 1 (extra)"), Rules->GetActiveScorecard().TotalRuns, 1);
	TestEqual(TEXT("Total extras must be 1"), Rules->GetActiveScorecard().TotalExtras, 1);
	TestEqual(TEXT("Legal balls must remain 0"), Rules->GetActiveScorecard().TotalLegalBalls, 0);

	return true;
}

IMPLEMENT_SIMPLE_AUTOMATION_TEST(FCricketScoringOverCompletionTest, "Cricket27.Scoring.OverCompletion", EAutomationTestFlags::ApplicationContextMask | EAutomationTestFlags::ProductFilter)

bool FCricketScoringOverCompletionTest::RunTest(const FString& Parameters)
{
	ACricketRulesManager* Rules = NewObject<ACricketRulesManager>();
	Rules->InitializeMatch(TEXT("TeamA"), TEXT("TeamB"), 3);

	// Bowl 6 legal deliveries
	for (int32 i = 0; i < 6; ++i)
	{
		Rules->RecordDelivery(EDeliveryOutcome::DotBall, 0, true, TEXT("Dot"));
	}

	TestEqual(TEXT("Legal balls must be 6"), Rules->GetActiveScorecard().TotalLegalBalls, 6);
	TestEqual(TEXT("Bowler must have rotated"), Rules->CurrentBowlerIndex, 1);

	return true;
}

#endif // WITH_DEV_AUTOMATION_TESTS
