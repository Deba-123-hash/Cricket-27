#include "CricketFieldingAI.h"
#include "Cricket27Character.h"
#include "CricketBall.h"
#include "Kismet/GameplayStatics.h"

ACricketFieldingAI::ACricketFieldingAI()
{
	PrimaryActorTick.bCanEverTick = true;
}

void ACricketFieldingAI::BeginPlay()
{
	Super::BeginPlay();
	SetupFieldPreset(true);
}

void ACricketFieldingAI::Tick(float DeltaTime)
{
	Super::Tick(DeltaTime);

	if (bIsChasingBall)
	{
		UpdateFielderPursuit(DeltaTime);
	}
}

void ACricketFieldingAI::SetupFieldPreset(bool bIsPowerplay)
{
	ActiveFielders.Empty();

	// Standard radius offsets from center pitch (cm)
	// In cricket, 30-yard inner circle is ~2743 cm. Deep boundaries are ~6500 cm.
	TArray<TPair<EFieldingPosition, FVector>> Positions = {
		{ EFieldingPosition::WicketKeeper, FVector(-2200.0f, 0.0f, 0.0f) },
		{ EFieldingPosition::Slip1, FVector(-2100.0f, 400.0f, 0.0f) },
		{ EFieldingPosition::Point, FVector(-800.0f, 2200.0f, 0.0f) },
		{ EFieldingPosition::Cover, FVector(600.0f, 2400.0f, 0.0f) },
		{ EFieldingPosition::MidOff, FVector(1800.0f, 1200.0f, 0.0f) },
		{ EFieldingPosition::MidOn, FVector(1800.0f, -1200.0f, 0.0f) },
		{ EFieldingPosition::MidWicket, FVector(800.0f, -2200.0f, 0.0f) },
		{ EFieldingPosition::SquareLeg, FVector(-600.0f, -2400.0f, 0.0f) },
		{ EFieldingPosition::FineLeg, FVector(-2400.0f, -3200.0f, 0.0f) },
		{ EFieldingPosition::ThirdMan, FVector(-2400.0f, 3200.0f, 0.0f) },
		{ EFieldingPosition::DeepMidWicket, FVector(2000.0f, -5000.0f, 0.0f) }
	};

	for (const auto& PosPair : Positions)
	{
		FFielderSlot Slot;
		Slot.Position = PosPair.Key;
		Slot.FieldLocation = PosPair.Value;
		ActiveFielders.Add(Slot);
	}
}

void ACricketFieldingAI::ResetFielderPositions()
{
	bIsChasingBall = false;
	TrackedBall = nullptr;
	PrimaryChaser = nullptr;

	for (FFielderSlot& Slot : ActiveFielders)
	{
		if (Slot.AssignedFielder)
		{
			Slot.AssignedFielder->SetActorLocation(Slot.FieldLocation);
			// Face batsman / center pitch
			FVector DirectionToPitch = (FVector::ZeroVector - Slot.FieldLocation).GetSafeNormal();
			Slot.AssignedFielder->SetActorRotation(DirectionToPitch.Rotation());
		}
	}
}

void ACricketFieldingAI::OnBallStruckByBat(ACricketBall* Ball)
{
	if (!Ball)
	{
		return;
	}

	TrackedBall = Ball;
	bIsChasingBall = true;

	// Pick the closest fielder to the trajectory
	float ClosestDistanceSq = MAX_FLT;
	PrimaryChaser = nullptr;

	FVector BallPos = Ball->GetActorLocation();

	for (FFielderSlot& Slot : ActiveFielders)
	{
		if (Slot.AssignedFielder)
		{
			float DistSq = FVector::DistSquared(Slot.AssignedFielder->GetActorLocation(), BallPos);
			if (DistSq < ClosestDistanceSq)
			{
				ClosestDistanceSq = DistSq;
				PrimaryChaser = Slot.AssignedFielder;
			}
		}
	}
}

void ACricketFieldingAI::UpdateFielderPursuit(float DeltaTime)
{
	if (!TrackedBall || !PrimaryChaser || TrackedBall->bIsDeadBall)
	{
		bIsChasingBall = false;
		return;
	}

	FVector BallPos = TrackedBall->GetActorLocation();
	FVector FielderPos = PrimaryChaser->GetActorLocation();
	float FlatDistance = FVector::Dist2D(BallPos, FielderPos);

	// In flight catch check
	if (FlatDistance <= CatchRadius && BallPos.Z <= 250.0f && BallPos.Z >= 30.0f && !TrackedBall->bHasBouncedOnPitch)
	{
		PrimaryChaser->AttemptCatch();
		TrackedBall->InterceptBall(PrimaryChaser);
		bIsChasingBall = false;
		return;
	}

	// Ground pickup check
	if (FlatDistance <= GroundPickupRadius && BallPos.Z <= 40.0f)
	{
		PrimaryChaser->PerformFieldingPickup(FVector(-2000.0f, 0.0f, 0.0f));
		TrackedBall->InterceptBall(PrimaryChaser);
		bIsChasingBall = false;
		return;
	}

	// Move fielder toward intercept location
	FVector PursuitDir = (BallPos - FielderPos).GetSafeNormal2D();
	float Speed = PrimaryChaser->Skills.FieldingSpeed * 6.5f;
	PrimaryChaser->AddMovementInput(PursuitDir, 1.0f);
	PrimaryChaser->SetActorRotation(PursuitDir.Rotation());
}
