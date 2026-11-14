#include "CricketWicket.h"
#include "Components/StaticMeshComponent.h"
#include "Components/BoxComponent.h"
#include "CricketBall.h"

ACricketWicket::ACricketWicket()
{
	PrimaryActorTick.bCanEverTick = false;

	WicketRoot = CreateDefaultSubobject<USceneComponent>(TEXT("WicketRoot"));
	RootComponent = WicketRoot;

	Tags.Add(TEXT("Wicket"));

	// Standard cricket stumps height ~ 71.1 cm (28 inches), width ~ 22.8 cm (9 inches)
	OffStump = CreateDefaultSubobject<UStaticMeshComponent>(TEXT("OffStump"));
	OffStump->SetupAttachment(WicketRoot);
	OffStump->SetRelativeLocation(FVector(0.0f, 11.4f, 35.5f));

	MiddleStump = CreateDefaultSubobject<UStaticMeshComponent>(TEXT("MiddleStump"));
	MiddleStump->SetupAttachment(WicketRoot);
	MiddleStump->SetRelativeLocation(FVector(0.0f, 0.0f, 35.5f));

	LegStump = CreateDefaultSubobject<UStaticMeshComponent>(TEXT("LegStump"));
	LegStump->SetupAttachment(WicketRoot);
	LegStump->SetRelativeLocation(FVector(0.0f, -11.4f, 35.5f));

	LeftBail = CreateDefaultSubobject<UStaticMeshComponent>(TEXT("LeftBail"));
	LeftBail->SetupAttachment(WicketRoot);
	LeftBail->SetRelativeLocation(FVector(0.0f, -5.7f, 72.0f));

	RightBail = CreateDefaultSubobject<UStaticMeshComponent>(TEXT("RightBail"));
	RightBail->SetupAttachment(WicketRoot);
	RightBail->SetRelativeLocation(FVector(0.0f, 5.7f, 72.0f));

	StumpsCollision = CreateDefaultSubobject<UBoxComponent>(TEXT("StumpsCollision"));
	StumpsCollision->SetupAttachment(WicketRoot);
	StumpsCollision->SetBoxExtent(FVector(8.0f, 16.0f, 36.0f));
	StumpsCollision->SetRelativeLocation(FVector(0.0f, 0.0f, 36.0f));
	StumpsCollision->SetCollisionProfileName(TEXT("BlockAllDynamic"));
	StumpsCollision->SetNotifyRigidBodyCollision(true);
}

void ACricketWicket::BeginPlay()
{
	Super::BeginPlay();

	LeftBailInitialTransform = LeftBail->GetRelativeTransform();
	RightBailInitialTransform = RightBail->GetRelativeTransform();

	StumpsCollision->OnComponentHit.AddDynamic(this, &ACricketWicket::OnStumpsHit);
}

void ACricketWicket::OnStumpsHit(UPrimitiveComponent* HitComp, AActor* OtherActor, UPrimitiveComponent* OtherComp, FVector NormalImpulse, const FHitResult& Hit)
{
	if (bAreBailsDislodged)
	{
		return;
	}

	if (OtherActor && OtherActor->IsA(ACricketBall::StaticClass()))
	{
		BreakWicket(EDeliveryOutcome::WicketBowled);
	}
}

void ACricketWicket::BreakWicket(EDeliveryOutcome DismissalType)
{
	if (bAreBailsDislodged)
	{
		return;
	}

	bAreBailsDislodged = true;

	// Enable physics simulation on bails so they fly realistically
	LeftBail->SetSimulatePhysics(true);
	RightBail->SetSimulatePhysics(true);

	FVector RandomDislodgeImpulse = FVector(FMath::RandRange(-80.0f, -150.0f), FMath::RandRange(-80.0f, 80.0f), FMath::RandRange(180.0f, 300.0f));
	LeftBail->AddImpulse(RandomDislodgeImpulse, NAME_None, true);
	RightBail->AddImpulse(RandomDislodgeImpulse * 1.1f, NAME_None, true);

	OnWicketBroken.Broadcast(DismissalType);
}

void ACricketWicket::ResetWicket()
{
	bAreBailsDislodged = false;

	LeftBail->SetSimulatePhysics(false);
	RightBail->SetSimulatePhysics(false);

	LeftBail->SetRelativeTransform(LeftBailInitialTransform);
	RightBail->SetRelativeTransform(RightBailInitialTransform);
}
