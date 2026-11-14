import {
  CameraMode,
  ControlType,
  GameSettings,
  GraphicsQuality,
  PitchCondition,
  PitchPhysicsProperties,
  StadiumLighting,
} from './GameTypes';
import { GAME_CONSTANTS } from './GameConstants';

export const PITCH_PRESETS: Record<PitchCondition, PitchPhysicsProperties> = {
  [PitchCondition.NORMAL]: {
    restitution: 0.65,
    friction: 0.45,
    seamDeviation: 0.08,
    description: 'Balanced surface offering fair bounce and moderate pace carry.',
  },
  [PitchCondition.HARD]: {
    restitution: 0.78,
    friction: 0.38,
    seamDeviation: 0.05,
    description: 'Firm, fast surface with steep bounce favoring express pace bowlers and strokeplay.',
  },
  [PitchCondition.GREEN]: {
    restitution: 0.68,
    friction: 0.52,
    seamDeviation: 0.18,
    description: 'Grass cover offering dynamic seam movement and unpredictable lateral nip.',
  },
  [PitchCondition.DRY]: {
    restitution: 0.58,
    friction: 0.65,
    seamDeviation: 0.22,
    description: 'Cracked, dry wicket offering sharp turn and slower, variable bounce for spinners.',
  },
  [PitchCondition.DUSTY]: {
    restitution: 0.50,
    friction: 0.72,
    seamDeviation: 0.28,
    description: 'Loose soil offering excessive turn, low bounce, and grip off the straight.',
  },
};

export const DEFAULT_SETTINGS: GameSettings = {
  graphicsQuality: GraphicsQuality.HIGH,
  masterVolume: 0.8,
  musicVolume: 0.6,
  effectsVolume: 0.9,
  crowdVolume: 0.85,
  cameraMode: CameraMode.BROADCAST,
  difficulty: 'MEDIUM',
  controlType: ControlType.KEYBOARD_MOUSE,
  showTrajectory: true,
  debugPanel: true,
};

export const GAME_CONFIG = {
  IDENTITY: GAME_CONSTANTS.IDENTITY,

  DISPLAY: {
    DEFAULT_ASPECT_RATIO: 16 / 9,
    LANDSCAPE_REQUIRED: true,
    ALLOW_FULLSCREEN: true,
    MAX_DPR: 2.0,
    TARGET_FPS: 60,
  },

  MATCH_DEFAULTS: {
    DEFAULT_OVERS: 3,
    MAX_WICKETS: 10,
    LEGAL_BALLS_PER_OVER: 6,
    DEFAULT_DIFFICULTY: 'MEDIUM' as const,
  },

  GRAPHICS_PRESETS: {
    [GraphicsQuality.LOW]: {
      shadows: false,
      postProcessing: false,
      antialiasing: false,
      maxDpr: 1.0,
      crowdDensity: 0.2,
      lightQuality: 'simple',
    },
    [GraphicsQuality.MEDIUM]: {
      shadows: true,
      postProcessing: false,
      antialiasing: true,
      maxDpr: 1.25,
      crowdDensity: 0.5,
      lightQuality: 'medium',
    },
    [GraphicsQuality.HIGH]: {
      shadows: true,
      postProcessing: true,
      antialiasing: true,
      maxDpr: 1.75,
      crowdDensity: 0.85,
      lightQuality: 'high',
    },
    [GraphicsQuality.ULTRA]: {
      shadows: true,
      postProcessing: true,
      antialiasing: true,
      maxDpr: 2.0,
      crowdDensity: 1.0,
      lightQuality: 'ultra',
    },
  },

  PITCH_PRESETS,
  DEFAULT_SETTINGS,
} as const;
