/**
 * CRICKET27 - Core TypeScript Interfaces & Enums
 */

export enum GameState {
  LOADING = 'LOADING',
  MAIN_MENU = 'MAIN_MENU',
  MODE_SELECTION = 'MODE_SELECTION',
  TEAM_SELECTION = 'TEAM_SELECTION',
  MATCH_SETUP = 'MATCH_SETUP',
  TOSS = 'TOSS',
  MATCH_START = 'MATCH_START',
  FIRST_INNINGS = 'FIRST_INNINGS',
  INNINGS_BREAK = 'INNINGS_BREAK',
  SECOND_INNINGS = 'SECOND_INNINGS',
  MATCH_COMPLETE = 'MATCH_COMPLETE',
  PAUSED = 'PAUSED',
  SETTINGS = 'SETTINGS',
}

export enum PlayerRole {
  BATSMAN = 'BATSMAN',
  BOWLER = 'BOWLER',
  ALL_ROUNDER = 'ALL_ROUNDER',
  WICKET_KEEPER = 'WICKET_KEEPER',
}

export enum BattingStyle {
  RIGHT_HAND = 'RIGHT_HAND',
  LEFT_HAND = 'LEFT_HAND',
}

export enum BowlingStyle {
  RIGHT_ARM_FAST = 'RIGHT_ARM_FAST',
  RIGHT_ARM_MEDIUM = 'RIGHT_ARM_MEDIUM',
  RIGHT_ARM_OFF_SPIN = 'RIGHT_ARM_OFF_SPIN',
  RIGHT_ARM_LEG_SPIN = 'RIGHT_ARM_LEG_SPIN',
  LEFT_ARM_FAST = 'LEFT_ARM_FAST',
  LEFT_ARM_SPIN = 'LEFT_ARM_SPIN',
}

export interface Player {
  id: string;
  name: string;
  teamId: string;
  role: PlayerRole;
  battingRating: number;
  bowlingRating: number;
  fieldingRating: number;
  speed: number;
  stamina: number;
  battingStyle: BattingStyle;
  bowlingStyle: BowlingStyle;
  overallRating: number;
  jerseyNumber: number;
}

export interface Team {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  players: Player[];
  captainId: string;
}

export enum PitchCondition {
  NORMAL = 'NORMAL',
  DRY = 'DRY',
  GREEN = 'GREEN',
  DUSTY = 'DUSTY',
  HARD = 'HARD',
}

export enum StadiumLighting {
  DAY = 'DAY',
  EVENING = 'EVENING',
  NIGHT = 'NIGHT',
}

export interface Stadium {
  id: string;
  name: string;
  location: string;
  capacity: number;
  pitchType: PitchCondition;
  lightingType: StadiumLighting;
  boundarySize: number;
}

export enum CameraMode {
  BROADCAST = 'BROADCAST',
  BATTING = 'BATTING',
  BOWLING = 'BOWLING',
  BALL_FOLLOW = 'BALL_FOLLOW',
  STUMP_CAM = 'STUMP_CAM',
  FIELDING = 'FIELDING',
  AERIAL = 'AERIAL',
}

export enum DeliveryType {
  STRAIGHT = 'STRAIGHT',
  FAST = 'FAST',
  SLOW = 'SLOW',
  YORKER = 'YORKER',
  BOUNCER = 'BOUNCER',
  FULL_LENGTH = 'FULL_LENGTH',
  SHORT_PITCH = 'SHORT_PITCH',
  OFF_SPIN = 'OFF_SPIN',
  LEG_SPIN = 'LEG_SPIN',
  IN_SWING = 'IN_SWING',
  OUT_SWING = 'OUT_SWING',
}

export enum BallState {
  IDLE = 'IDLE',
  IN_HAND = 'IN_HAND',
  RELEASED = 'RELEASED',
  IN_AIR = 'IN_AIR',
  BOUNCED = 'BOUNCED',
  HIT_BY_BAT = 'HIT_BY_BAT',
  HIT_BY_PLAYER = 'HIT_BY_PLAYER',
  HIT_STUMPS = 'HIT_STUMPS',
  GROUNDED = 'GROUNDED',
  STOPPED = 'STOPPED',
}

export enum CollisionTarget {
  PITCH = 'PITCH',
  GROUND = 'GROUND',
  STUMPS = 'STUMPS',
  BAT = 'BAT',
  PLAYER = 'PLAYER',
  BOUNDARY = 'BOUNDARY',
}

export interface DeliveryConfig {
  type: DeliveryType;
  speedKmh: number;
  pitchTarget: [number, number, number]; // [X, Y, Z] on pitch
  spinRpm: number;
  swingStrength: number;
  releasePosition: [number, number, number];
}

export interface PitchPhysicsProperties {
  restitution: number; // Bounce factor
  friction: number; // Grip / turn factor
  seamDeviation: number; // Lateral variation multiplier
  description: string;
}

export interface BatterScore {
  playerId: string;
  name: string;
  runs: number;
  ballsFaced: number;
  fours: number;
  sixes: number;
  isOut: boolean;
  dismissal: string;
}

export interface BowlerScore {
  playerId: string;
  name: string;
  legalBalls: number;
  runsConceded: number;
  wickets: number;
  maidens: number;
  wides: number;
  noballs: number;
}

export interface InningsScorecard {
  teamId: string;
  teamName: string;
  runs: number;
  wickets: number;
  legalBalls: number;
  extras: number;
  battingScorecard: BatterScore[];
  bowlingScorecard: BowlerScore[];
}

export interface MatchData {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  stadium: Stadium;
  overs: number;
  currentInnings: 1 | 2;
  currentOver: number;
  currentBall: number;
  innings1: InningsScorecard;
  innings2: InningsScorecard;
  targetToWin: number;
  winnerTeamId: string | null;
  status: 'SCHEDULED' | 'LIVE' | 'COMPLETED';
}

export enum GraphicsQuality {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  ULTRA = 'ULTRA',
}

export enum ControlType {
  KEYBOARD_MOUSE = 'KEYBOARD_MOUSE',
  TOUCH = 'TOUCH',
  GAMEPAD = 'GAMEPAD',
}

export interface GameSettings {
  graphicsQuality: GraphicsQuality;
  masterVolume: number;
  musicVolume: number;
  effectsVolume: number;
  crowdVolume: number;
  cameraMode: CameraMode;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  controlType: ControlType;
  showTrajectory: boolean;
  debugPanel: boolean;
}
