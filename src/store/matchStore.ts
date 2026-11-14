import { create } from 'zustand';
import { MatchData, Team, PlayerRole, BattingStyle, BowlingStyle, PitchCondition, StadiumLighting } from '../game/core/GameTypes';
import { gameEvents } from '../game/core/GameEvents';

export const INITIAL_TEAMS: Team[] = [
  {
    id: 'team-royal-strikers',
    name: 'Royal Strikers',
    shortName: 'STR',
    logo: '/strikers.svg',
    primaryColor: '#0A2A1B', // Deep stadium emerald
    secondaryColor: '#22E573', // Vibrant lime
    accentColor: '#F5BA31', // Gold
    captainId: 'p-str-1',
    players: [
      { id: 'p-str-1', name: 'A. Sharma', teamId: 'team-royal-strikers', role: PlayerRole.BATSMAN, battingRating: 92, bowlingRating: 40, fieldingRating: 88, speed: 85, stamina: 90, battingStyle: BattingStyle.RIGHT_HAND, bowlingStyle: BowlingStyle.RIGHT_ARM_MEDIUM, overallRating: 90, jerseyNumber: 18 },
      { id: 'p-str-2', name: 'R. Khan', teamId: 'team-royal-strikers', role: PlayerRole.BATSMAN, battingRating: 89, bowlingRating: 35, fieldingRating: 82, speed: 88, stamina: 85, battingStyle: BattingStyle.LEFT_HAND, bowlingStyle: BowlingStyle.RIGHT_ARM_OFF_SPIN, overallRating: 87, jerseyNumber: 45 },
      { id: 'p-str-3', name: 'V. Patel', teamId: 'team-royal-strikers', role: PlayerRole.ALL_ROUNDER, battingRating: 84, bowlingRating: 82, fieldingRating: 86, speed: 82, stamina: 88, battingStyle: BattingStyle.RIGHT_HAND, bowlingStyle: BowlingStyle.RIGHT_ARM_FAST, overallRating: 85, jerseyNumber: 33 },
      { id: 'p-str-4', name: 'M. Santner', teamId: 'team-royal-strikers', role: PlayerRole.BOWLER, battingRating: 62, bowlingRating: 91, fieldingRating: 90, speed: 86, stamina: 89, battingStyle: BattingStyle.LEFT_HAND, bowlingStyle: BowlingStyle.LEFT_ARM_SPIN, overallRating: 88, jerseyNumber: 74 },
      { id: 'p-str-5', name: 'B. Lee', teamId: 'team-royal-strikers', role: PlayerRole.BOWLER, battingRating: 45, bowlingRating: 94, fieldingRating: 80, speed: 92, stamina: 92, battingStyle: BattingStyle.RIGHT_HAND, bowlingStyle: BowlingStyle.RIGHT_ARM_FAST, overallRating: 89, jerseyNumber: 58 },
    ],
  },
  {
    id: 'team-coastal-titans',
    name: 'Coastal Titans',
    shortName: 'TTN',
    logo: '/titans.svg',
    primaryColor: '#0F172A', // Slate dark
    secondaryColor: '#38BDF8', // Cyan sky
    accentColor: '#F97316', // Orange
    captainId: 'p-ttn-1',
    players: [
      { id: 'p-ttn-1', name: 'D. Warner', teamId: 'team-coastal-titans', role: PlayerRole.BATSMAN, battingRating: 91, bowlingRating: 30, fieldingRating: 89, speed: 89, stamina: 87, battingStyle: BattingStyle.LEFT_HAND, bowlingStyle: BowlingStyle.RIGHT_ARM_LEG_SPIN, overallRating: 89, jerseyNumber: 31 },
      { id: 'p-ttn-2', name: 'S. Smith', teamId: 'team-coastal-titans', role: PlayerRole.BATSMAN, battingRating: 93, bowlingRating: 50, fieldingRating: 91, speed: 80, stamina: 92, battingStyle: BattingStyle.RIGHT_HAND, bowlingStyle: BowlingStyle.RIGHT_ARM_LEG_SPIN, overallRating: 91, jerseyNumber: 49 },
      { id: 'p-ttn-3', name: 'B. Stokes', teamId: 'team-coastal-titans', role: PlayerRole.ALL_ROUNDER, battingRating: 88, bowlingRating: 86, fieldingRating: 93, speed: 87, stamina: 95, battingStyle: BattingStyle.LEFT_HAND, bowlingStyle: BowlingStyle.RIGHT_ARM_FAST, overallRating: 90, jerseyNumber: 55 },
      { id: 'p-ttn-4', name: 'J. Bumrah', teamId: 'team-coastal-titans', role: PlayerRole.BOWLER, battingRating: 35, bowlingRating: 96, fieldingRating: 85, speed: 88, stamina: 91, battingStyle: BattingStyle.RIGHT_HAND, bowlingStyle: BowlingStyle.RIGHT_ARM_FAST, overallRating: 92, jerseyNumber: 93 },
      { id: 'p-ttn-5', name: 'R. Ashwin', teamId: 'team-coastal-titans', role: PlayerRole.BOWLER, battingRating: 68, bowlingRating: 92, fieldingRating: 80, speed: 76, stamina: 86, battingStyle: BattingStyle.RIGHT_HAND, bowlingStyle: BowlingStyle.RIGHT_ARM_OFF_SPIN, overallRating: 87, jerseyNumber: 99 },
    ],
  },
];

interface MatchStoreState {
  match: MatchData;
  commentary: string[];
  currentStrikerIndex: number;
  currentNonStrikerIndex: number;
  currentBowlerIndex: number;

  // Actions
  recordDeliveryResult: (runs: number, isWicket: boolean, isExtra: boolean, text: string) => void;
  resetMatch: () => void;
  addCommentary: (text: string) => void;
}

const createInitialMatch = (): MatchData => ({
  id: 'match-cricket27-001',
  homeTeam: INITIAL_TEAMS[0],
  awayTeam: INITIAL_TEAMS[1],
  stadium: {
    id: 'stadium-royal-park',
    name: 'Royal Park Stadium',
    location: 'Melbourne Arena',
    capacity: 45000,
    pitchType: PitchCondition.NORMAL,
    lightingType: StadiumLighting.DAY,
    boundarySize: 65,
  },
  overs: 3,
  currentInnings: 1,
  currentOver: 0,
  currentBall: 0,
  innings1: {
    teamId: INITIAL_TEAMS[0].id,
    teamName: INITIAL_TEAMS[0].name,
    runs: 0,
    wickets: 0,
    legalBalls: 0,
    extras: 0,
    battingScorecard: INITIAL_TEAMS[0].players.map((p) => ({
      playerId: p.id,
      name: p.name,
      runs: 0,
      ballsFaced: 0,
      fours: 0,
      sixes: 0,
      isOut: false,
      dismissal: 'Not Out',
    })),
    bowlingScorecard: INITIAL_TEAMS[1].players.filter((p) => p.role === PlayerRole.BOWLER || p.role === PlayerRole.ALL_ROUNDER).map((p) => ({
      playerId: p.id,
      name: p.name,
      legalBalls: 0,
      runsConceded: 0,
      wickets: 0,
      maidens: 0,
      wides: 0,
      noballs: 0,
    })),
  },
  innings2: {
    teamId: INITIAL_TEAMS[1].id,
    teamName: INITIAL_TEAMS[1].name,
    runs: 0,
    wickets: 0,
    legalBalls: 0,
    extras: 0,
    battingScorecard: INITIAL_TEAMS[1].players.map((p) => ({
      playerId: p.id,
      name: p.name,
      runs: 0,
      ballsFaced: 0,
      fours: 0,
      sixes: 0,
      isOut: false,
      dismissal: 'Not Out',
    })),
    bowlingScorecard: INITIAL_TEAMS[0].players.filter((p) => p.role === PlayerRole.BOWLER || p.role === PlayerRole.ALL_ROUNDER).map((p) => ({
      playerId: p.id,
      name: p.name,
      legalBalls: 0,
      runsConceded: 0,
      wickets: 0,
      maidens: 0,
      wides: 0,
      noballs: 0,
    })),
  },
  targetToWin: 0,
  winnerTeamId: null,
  status: 'LIVE',
});

export const useMatchStore = create<MatchStoreState>((set, get) => ({
  match: createInitialMatch(),
  commentary: ['Welcome to CRICKET27! Match is set at Royal Park Stadium.'],
  currentStrikerIndex: 0,
  currentNonStrikerIndex: 1,
  currentBowlerIndex: 0,

  addCommentary: (text) => set((s) => ({ commentary: [text, ...s.commentary.slice(0, 19)] })),

  recordDeliveryResult: (runs, isWicket, isExtra, text) => {
    const { match, currentStrikerIndex, currentBowlerIndex } = get();
    const innKey = match.currentInnings === 1 ? 'innings1' : 'innings2';
    const inn = { ...match[innKey] };

    inn.runs += runs;
    if (isExtra) inn.extras += 1;
    if (isWicket) inn.wickets += 1;
    if (!isExtra) inn.legalBalls += 1;

    // Update striker stats
    if (inn.battingScorecard[currentStrikerIndex]) {
      const striker = { ...inn.battingScorecard[currentStrikerIndex] };
      if (!isExtra) {
        striker.runs += runs;
        striker.ballsFaced += 1;
        if (runs === 4) striker.fours += 1;
        if (runs === 6) striker.sixes += 1;
      }
      if (isWicket) {
        striker.isOut = true;
        striker.dismissal = 'Bowled';
      }
      inn.battingScorecard[currentStrikerIndex] = striker;
    }

    const updatedMatch: MatchData = {
      ...match,
      [innKey]: inn,
      currentOver: Math.floor(inn.legalBalls / 6),
      currentBall: inn.legalBalls % 6,
    };

    set({ match: updatedMatch });
    get().addCommentary(text);

    if (isWicket) {
      gameEvents.emit('WICKET_TAKEN', {
        dismissalType: 'Bowled',
        batsmanName: inn.battingScorecard[currentStrikerIndex]?.name ?? 'Batter',
        bowlerName: 'Bowler',
      });
    } else {
      gameEvents.emit('RUN_SCORED', {
        runs,
        isExtra,
        strikerName: inn.battingScorecard[currentStrikerIndex]?.name ?? 'Batter',
      });
    }
  },

  resetMatch: () =>
    set({
      match: createInitialMatch(),
      commentary: ['Match reset. Ready for next delivery.'],
      currentStrikerIndex: 0,
      currentNonStrikerIndex: 1,
      currentBowlerIndex: 0,
    }),
}));
