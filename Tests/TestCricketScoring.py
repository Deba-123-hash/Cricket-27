"""
CRICKET27 Automated Cricket Scoring & Rules Engine Verification Suite
Tests the complete ball-by-ball scoring algorithm, strike rotation, extras,
overs, innings transition, target chasing, and match conclusion.
"""

from enum import Enum
from typing import List, Optional

class DeliveryOutcome(Enum):
    DOT_BALL = "Dot Ball"
    SINGLE = "Single"
    TWO_RUNS = "Two Runs"
    THREE_RUNS = "Three Runs"
    FOUR_RUNS = "Boundary Four"
    SIX_RUNS = "Maximum Six"
    WICKET_BOWLED = "Bowled"
    WICKET_CAUGHT = "Caught"
    WICKET_LBW = "LBW"
    WICKET_RUN_OUT = "Run Out"
    WICKET_STUMPED = "Stumped"
    WIDE_BALL = "Wide Ball"
    NO_BALL = "No Ball"
    BYE = "Bye"
    LEG_BYE = "Leg Bye"

class BatterStats:
    def __init__(self, name: str):
        self.name = name
        self.runs = 0
        self.balls = 0
        self.fours = 0
        self.sixes = 0
        self.is_out = False
        self.dismissal = "Not Out"

    @property
    def strike_rate(self) -> float:
        return (self.runs / self.balls * 100.0) if self.balls > 0 else 0.0

class BowlerStats:
    def __init__(self, name: str):
        self.name = name
        self.legal_balls = 0
        self.runs_conceded = 0
        self.wickets = 0
        self.wides = 0
        self.noballs = 0

    @property
    def economy_rate(self) -> float:
        overs = self.legal_balls / 6.0
        return (self.runs_conceded / overs) if overs > 0 else 0.0

class CricketRulesEngine:
    def __init__(self, team1_name: str, team2_name: str, match_overs: int = 3):
        self.team1_name = team1_name
        self.team2_name = team2_name
        self.match_overs = match_overs
        self.current_innings = 1
        self.target_to_win = 0
        self.is_match_finished = False
        self.is_free_hit = False

        # Team scores
        self.scores = {
            1: {"team": team1_name, "runs": 0, "wickets": 0, "legal_balls": 0, "extras": 0},
            2: {"team": team2_name, "runs": 0, "wickets": 0, "legal_balls": 0, "extras": 0}
        }

        self.batters = {
            1: [BatterStats(f"{team1_name} P{i}") for i in range(1, 12)],
            2: [BatterStats(f"{team2_name} P{i}") for i in range(1, 12)]
        }
        self.bowlers = {
            1: [BowlerStats(f"{team2_name} B{i}") for i in range(1, 6)],
            2: [BowlerStats(f"{team1_name} B{i}") for i in range(1, 6)]
        }

        self.striker_idx = 0
        self.non_striker_idx = 1
        self.bowler_idx = 0
        self.ball_history = []

    def rotate_strike(self):
        self.striker_idx, self.non_striker_idx = self.non_striker_idx, self.striker_idx

    def record_delivery(self, outcome: DeliveryOutcome, runs: int, is_legal: bool):
        if self.is_match_finished:
            return

        inn = self.current_innings
        score = self.scores[inn]
        total_ball_runs = runs

        is_wide = (outcome == DeliveryOutcome.WIDE_BALL)
        is_noball = (outcome == DeliveryOutcome.NO_BALL)
        is_wicket = outcome in (
            DeliveryOutcome.WICKET_BOWLED, DeliveryOutcome.WICKET_CAUGHT,
            DeliveryOutcome.WICKET_LBW, DeliveryOutcome.WICKET_RUN_OUT,
            DeliveryOutcome.WICKET_STUMPED
        )

        # Free hit protection: can only be run out
        if self.is_free_hit and is_wicket and outcome != DeliveryOutcome.WICKET_RUN_OUT:
            is_wicket = False
            outcome = DeliveryOutcome.DOT_BALL

        if is_wide or is_noball:
            total_ball_runs += 1
            score["extras"] += 1
            self.is_free_hit = is_noball
        else:
            self.is_free_hit = False

        score["runs"] += total_ball_runs

        # Bowler record
        bowler = self.bowlers[inn][self.bowler_idx]
        bowler.runs_conceded += total_ball_runs
        if is_legal:
            bowler.legal_balls += 1
        if is_wide:
            bowler.wides += 1
        if is_noball:
            bowler.noballs += 1
        if is_wicket and outcome != DeliveryOutcome.WICKET_RUN_OUT:
            bowler.wickets += 1

        # Batter record
        striker = self.batters[inn][self.striker_idx]
        if not is_wide:
            striker.balls += 1

        if outcome not in (DeliveryOutcome.BYE, DeliveryOutcome.LEG_BYE) and not is_wide:
            striker.runs += runs
            if runs == 4:
                striker.fours += 1
            if runs == 6:
                striker.sixes += 1

        if is_wicket:
            striker.is_out = True
            striker.dismissal = outcome.value
            score["wickets"] += 1
            next_batter = max(self.striker_idx, self.non_striker_idx) + 1
            if next_batter < len(self.batters[inn]):
                self.striker_idx = next_batter

        # Strike rotation on odd runs
        if runs % 2 != 0:
            self.rotate_strike()

        if is_legal:
            score["legal_balls"] += 1

        # Over completion
        if is_legal and (score["legal_balls"] % 6 == 0):
            self.rotate_strike()
            self.bowler_idx = (self.bowler_idx + 1) % len(self.bowlers[inn])

        self._check_innings_progression()

    def _check_innings_progression(self):
        score = self.scores[self.current_innings]
        max_balls = self.match_overs * 6
        all_out = (score["wickets"] >= 10)
        overs_done = (score["legal_balls"] >= max_balls)

        if self.current_innings == 2 and score["runs"] >= self.target_to_win:
            self.is_match_finished = True
            return

        if all_out or overs_done:
            if self.current_innings == 1:
                self.target_to_win = self.scores[1]["runs"] + 1
                self.current_innings = 2
                self.striker_idx = 0
                self.non_striker_idx = 1
                self.bowler_idx = 0
                self.is_free_hit = False
            else:
                self.is_match_finished = True

    def get_result_summary(self) -> str:
        s1 = self.scores[1]
        s2 = self.scores[2]
        if s2["runs"] > s1["runs"]:
            return f"{s2['team']} won by {10 - s2['wickets']} wickets"
        elif s1["runs"] > s2["runs"]:
            return f"{s1['team']} won by {s1['runs'] - s2['runs']} runs"
        else:
            return "Match Tied"


# ==============================================================================
# TEST SUITE
# ==============================================================================
def run_all_tests():
    print("=" * 60)
    print("CRICKET27 RULES & SCORING ENGINE - TEST SUITE")
    print("=" * 60)

    # Test 1: Single run and strike rotation
    e = CricketRulesEngine("Royal Strikers", "Coastal Titans", match_overs=3)
    e.record_delivery(DeliveryOutcome.SINGLE, runs=1, is_legal=True)
    assert e.scores[1]["runs"] == 1, "Expected 1 run"
    assert e.scores[1]["legal_balls"] == 1, "Expected 1 legal ball"
    assert e.striker_idx == 1, "Strike should rotate to player 2"
    assert e.batters[1][0].runs == 1
    assert e.batters[1][0].balls == 1
    print("[PASS] Test 1: Single run and strike rotation")

    # Test 2: Boundary Six (no strike rotation, 6 runs to batter)
    e.record_delivery(DeliveryOutcome.SIX_RUNS, runs=6, is_legal=True)
    assert e.scores[1]["runs"] == 7
    assert e.scores[1]["legal_balls"] == 2
    assert e.batters[1][1].runs == 6
    assert e.batters[1][1].sixes == 1
    assert e.striker_idx == 1, "Even runs keep strike"
    print("[PASS] Test 2: Maximum Six boundary and striker retention")

    # Test 3: Wide ball (+1 extra run, ball re-bowled)
    e.record_delivery(DeliveryOutcome.WIDE_BALL, runs=0, is_legal=False)
    assert e.scores[1]["runs"] == 8
    assert e.scores[1]["extras"] == 1
    assert e.scores[1]["legal_balls"] == 2, "Wide must not increment legal balls"
    print("[PASS] Test 3: Wide delivery extra and legal ball invariance")

    # Test 4: Over completion (6 legal balls -> strike rotates and bowler switches)
    e.record_delivery(DeliveryOutcome.DOT_BALL, runs=0, is_legal=True) # 3
    e.record_delivery(DeliveryOutcome.DOT_BALL, runs=0, is_legal=True) # 4
    e.record_delivery(DeliveryOutcome.DOT_BALL, runs=0, is_legal=True) # 5
    assert e.bowler_idx == 0
    e.record_delivery(DeliveryOutcome.DOT_BALL, runs=0, is_legal=True) # 6 (over ends)
    assert e.scores[1]["legal_balls"] == 6
    assert e.bowler_idx == 1, "Bowler should switch after 6 balls"
    print("[PASS] Test 4: Over completion, bowler change, and end-of-over strike rotation")

    # Test 5: No-ball and Free Hit immunity
    e.record_delivery(DeliveryOutcome.NO_BALL, runs=0, is_legal=False)
    assert e.scores[1]["runs"] == 9
    assert e.is_free_hit == True
    # Attempt bowled wicket on free hit -> should be not out!
    e.record_delivery(DeliveryOutcome.WICKET_BOWLED, runs=0, is_legal=True)
    assert e.scores[1]["wickets"] == 0, "Cannot be bowled out on Free Hit"
    print("[PASS] Test 5: No-ball extra and Free Hit wicket immunity")

    # Test 6: Complete Innings 1 and Target calculation
    # Bowl remaining 2 overs (11 more legal balls)
    for _ in range(11):
        e.record_delivery(DeliveryOutcome.FOUR_RUNS, runs=4, is_legal=True)
    assert e.current_innings == 2, "Innings 1 should be complete after 3 overs (18 balls)"
    assert e.target_to_win == e.scores[1]["runs"] + 1
    print(f"[PASS] Test 6: Innings 1 conclusion. Target: {e.target_to_win} runs in 3 overs")

    # Test 7: Innings 2 Chase and Victory by Wickets
    # Chase target by hitting boundaries
    needed = e.target_to_win
    balls_bowled = 0
    while e.scores[2]["runs"] < needed and balls_bowled < 18:
        e.record_delivery(DeliveryOutcome.SIX_RUNS, runs=6, is_legal=True)
        balls_bowled += 1

    assert e.is_match_finished == True, "Match must finish when target chased"
    assert "won by 10 wickets" in e.get_result_summary()
    print(f"[PASS] Test 7: Successful target chase. Summary: {e.get_result_summary()}")

    print("=" * 60)
    print("ALL 7 CRICKET RULES & SCORING TESTS PASSED PERFECTLY!")
    print("=" * 60)

if __name__ == "__main__":
    run_all_tests()
