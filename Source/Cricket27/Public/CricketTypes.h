#pragma once

#include "CoreMinimal.h"
#include "CricketTypes.generated.h"

UENUM(BlueprintType)
enum class ECricketRole : uint8
{
	Batsman UMETA(DisplayName = "Batsman"),
	Bowler UMETA(DisplayName = "Bowler"),
	WicketKeeper UMETA(DisplayName = "Wicket Keeper"),
	Fielder UMETA(DisplayName = "Fielder"),
	Umpire UMETA(DisplayName = "Umpire")
};

UENUM(BlueprintType)
enum class ECricketShotType : uint8
{
	Defensive UMETA(DisplayName = "Forward Defensive"),
	StraightDrive UMETA(DisplayName = "Straight Drive"),
	CoverDrive UMETA(DisplayName = "Cover Drive"),
	PullShot UMETA(DisplayName = "Pull Shot"),
	HookShot UMETA(DisplayName = "Hook Shot"),
	Sweep UMETA(DisplayName = "Sweep Shot"),
	LoftedShot UMETA(DisplayName = "Lofted Shot (Six Hit)"),
	LegGlance UMETA(DisplayName = "Leg Glance"),
	CutShot UMETA(DisplayName = "Square Cut")
};

UENUM(BlueprintType)
enum class EBowlingDeliveryType : uint8
{
	FastPace UMETA(DisplayName = "Outswinger / Express Fast"),
	Inswinger UMETA(DisplayName = "Inswinger"),
	Yorker UMETA(DisplayName = "Toe-Crushing Yorker"),
	Bouncer UMETA(DisplayName = "Bouncer"),
	SlowerBall UMETA(DisplayName = "Slower Cutter"),
	OffSpin UMETA(DisplayName = "Off Spin"),
	LegSpin UMETA(DisplayName = "Leg Spin"),
	Googly UMETA(DisplayName = "Googly"),
	TopSpinner UMETA(DisplayName = "Top Spinner")
};

UENUM(BlueprintType)
enum class EBowlingLength : uint8
{
	FullToss UMETA(DisplayName = "Full Toss"),
	Yorker UMETA(DisplayName = "Yorker"),
	FullLength UMETA(DisplayName = "Full Length"),
	GoodLength UMETA(DisplayName = "Good Length"),
	ShortOfLength UMETA(DisplayName = "Short of Length"),
	BouncerLength UMETA(DisplayName = "Bouncer Length")
};

UENUM(BlueprintType)
enum class EBowlingLine : uint8
{
	WideOutsideOff UMETA(DisplayName = "Wide Outside Off"),
	OutsideOff UMETA(DisplayName = "Outside Off Stump"),
	MiddleAndOff UMETA(DisplayName = "Off Stump"),
	MiddleStump UMETA(DisplayName = "Middle Stump"),
	LegStump UMETA(DisplayName = "Leg Stump"),
	DownLeg UMETA(DisplayName = "Down Leg Side")
};

UENUM(BlueprintType)
enum class EShotTiming : uint8
{
	TooEarly UMETA(DisplayName = "Too Early"),
	Early UMETA(DisplayName = "Early"),
	Perfect UMETA(DisplayName = "Perfect"),
	Good UMETA(DisplayName = "Good"),
	Late UMETA(DisplayName = "Late"),
	TooLate UMETA(DisplayName = "Too Late"),
	Missed UMETA(DisplayName = "Missed")
};

UENUM(BlueprintType)
enum class EDeliveryOutcome : uint8
{
	None UMETA(DisplayName = "None"),
	DotBall UMETA(DisplayName = "Dot Ball"),
	Single UMETA(DisplayName = "Single (1 Run)"),
	TwoRuns UMETA(DisplayName = "Two Runs (2 Runs)"),
	ThreeRuns UMETA(DisplayName = "Three Runs (3 Runs)"),
	FourRuns UMETA(DisplayName = "Boundary Four (4 Runs)"),
	SixRuns UMETA(DisplayName = "Maximum Six (6 Runs)"),
	WicketBowled UMETA(DisplayName = "Wicket - Bowled"),
	WicketCaught UMETA(DisplayName = "Wicket - Caught"),
	WicketLBW UMETA(DisplayName = "Wicket - LBW"),
	WicketRunOut UMETA(DisplayName = "Wicket - Run Out"),
	WicketStumped UMETA(DisplayName = "Wicket - Stumped"),
	WideBall UMETA(DisplayName = "Wide Ball (+1 Extra)"),
	NoBall UMETA(DisplayName = "No Ball (+1 Extra & Free Hit)"),
	Bye UMETA(DisplayName = "Bye"),
	LegBye UMETA(DisplayName = "Leg Bye")
};

UENUM(BlueprintType)
enum class EMatchStatePhase : uint8
{
	PregameToss UMETA(DisplayName = "Toss & Team Selection"),
	BowlerRunUp UMETA(DisplayName = "Bowler Run-Up"),
	DeliveryRelease UMETA(DisplayName = "Delivery Release"),
	BallInAir UMETA(DisplayName = "Ball In Flight"),
	BatContactOrMiss UMETA(DisplayName = "Bat Impact / Pass"),
	FieldingChase UMETA(DisplayName = "Fielding & Pursuit"),
	RunningBetweenWickets UMETA(DisplayName = "Running Between Wickets"),
	OverComplete UMETA(DisplayName = "Over Complete"),
	InningsBreak UMETA(DisplayName = "Innings Break"),
	MatchFinished UMETA(DisplayName = "Match Completed")
};

UENUM(BlueprintType)
enum class EFieldingPosition : uint8
{
	WicketKeeper UMETA(DisplayName = "Wicket Keeper"),
	Slip1 UMETA(DisplayName = "First Slip"),
	Slip2 UMETA(DisplayName = "Second Slip"),
	Gully UMETA(DisplayName = "Gully"),
	Point UMETA(DisplayName = "Point"),
	Cover UMETA(DisplayName = "Cover"),
	ExtraCover UMETA(DisplayName = "Extra Cover"),
	MidOff UMETA(DisplayName = "Mid Off"),
	MidOn UMETA(DisplayName = "Mid On"),
	MidWicket UMETA(DisplayName = "Mid Wicket"),
	SquareLeg UMETA(DisplayName = "Square Leg"),
	FineLeg UMETA(DisplayName = "Fine Leg"),
	ThirdMan UMETA(DisplayName = "Third Man"),
	DeepCover UMETA(DisplayName = "Deep Cover"),
	LongOff UMETA(DisplayName = "Long Off"),
	LongOn UMETA(DisplayName = "Long On"),
	DeepMidWicket UMETA(DisplayName = "Deep Mid Wicket"),
	DeepSquareLeg UMETA(DisplayName = "Deep Square Leg")
};

USTRUCT(BlueprintType)
struct FPlayerSkills
{
	GENERATED_BODY()

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Skills")
	FString PlayerName = TEXT("Original Player");

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Skills")
	ECricketRole PrimaryRole = ECricketRole::Batsman;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Skills")
	float BattingTimingSkill = 85.0f; // 0 - 100

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Skills")
	float BattingPowerSkill = 80.0f; // 0 - 100

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Skills")
	float BowlingPaceSpeedKmh = 142.0f; // km/h

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Skills")
	float BowlingAccuracy = 82.0f; // 0 - 100

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Skills")
	float BowlingSwingSpin = 78.0f; // 0 - 100

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Skills")
	float FieldingSpeed = 84.0f; // 0 - 100

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Skills")
	float ThrowingAccuracy = 80.0f; // 0 - 100
};

USTRUCT(BlueprintType)
struct FBatterStats
{
	GENERATED_BODY()

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Scorecard")
	FString BatterName = TEXT("Player");

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Scorecard")
	int32 RunsScored = 0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Scorecard")
	int32 BallsFaced = 0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Scorecard")
	int32 FoursHit = 0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Scorecard")
	int32 SixesHit = 0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Scorecard")
	bool bIsOut = false;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Scorecard")
	FString DismissalReason = TEXT("Not Out");

	float GetStrikeRate() const
	{
		return (BallsFaced > 0) ? ((float)RunsScored / (float)BallsFaced) * 100.0f : 0.0f;
	}
};

USTRUCT(BlueprintType)
struct FBowlerStats
{
	GENERATED_BODY()

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Scorecard")
	FString BowlerName = TEXT("Bowler");

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Scorecard")
	int32 LegalBallsBowled = 0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Scorecard")
	int32 RunsConceded = 0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Scorecard")
	int32 WicketsTaken = 0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Scorecard")
	int32 MaidenOvers = 0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Scorecard")
	int32 WidesConceded = 0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Scorecard")
	int32 NoBallsConceded = 0;

	float GetEconomyRate() const
	{
		float Overs = (float)LegalBallsBowled / 6.0f;
		return (Overs > 0.0f) ? ((float)RunsConceded / Overs) : 0.0f;
	}

	FString GetOversString() const
	{
		int32 FullOvers = LegalBallsBowled / 6;
		int32 RemBalls = LegalBallsBowled % 6;
		return FString::Printf(TEXT("%d.%d"), FullOvers, RemBalls);
	}
};

USTRUCT(BlueprintType)
struct FBallByBallRecord
{
	GENERATED_BODY()

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Record")
	int32 OverIndex = 0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Record")
	int32 BallInOver = 0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Record")
	FString BowlerName;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Record")
	FString StrikerName;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Record")
	EDeliveryOutcome Outcome = EDeliveryOutcome::None;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Record")
	int32 RunsThisBall = 0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Record")
	bool bIsLegalDelivery = true;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Record")
	FString CommentaryText;
};

USTRUCT(BlueprintType)
struct FTeamScorecard
{
	GENERATED_BODY()

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Scorecard")
	FString TeamName = TEXT("Titans");

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Scorecard")
	int32 TotalRuns = 0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Scorecard")
	int32 TotalWickets = 0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Scorecard")
	int32 TotalLegalBalls = 0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Scorecard")
	int32 TotalExtras = 0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Scorecard")
	int32 MaxOversAllowed = 3;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Scorecard")
	TArray<FBatterStats> BattingLineup;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Scorecard")
	TArray<FBowlerStats> BowlingLineup;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Cricket|Scorecard")
	TArray<FBallByBallRecord> OverHistory;

	FString GetScoreString() const
	{
		int32 FullOvers = TotalLegalBalls / 6;
		int32 RemBalls = TotalLegalBalls % 6;
		return FString::Printf(TEXT("%s: %d/%d (%d.%d ov)"), *TeamName, TotalRuns, TotalWickets, FullOvers, RemBalls);
	}
};
