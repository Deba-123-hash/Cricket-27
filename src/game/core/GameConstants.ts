/**
 * CRICKET27 - Central Game Constants
 * Official world-scale dimensions and cricket physical constants (in SI units: meters, kg, seconds).
 */

export const GAME_CONSTANTS = {
  IDENTITY: {
    NAME: 'CRICKET27',
    TAGLINE: 'YOUR GAME. YOUR TEAM. YOUR LEGACY.',
    VERSION: '0.5.0-alpha',
  },

  PITCH: {
    LENGTH_METERS: 20.12, // 22 yards
    WIDTH_METERS: 3.05,
    POPPING_CREASE_OFFSET: 1.22,
    BOWLING_CREASE_OFFSET: 0.0,
    RETURN_CREASE_WIDTH: 2.64,
  },

  WICKET: {
    HEIGHT_METERS: 0.711, // 28 inches
    WIDTH_METERS: 0.228, // 9 inches
    STUMP_RADIUS: 0.019,
    BAIL_LENGTH: 0.111,
  },

  BALL: {
    RADIUS_METERS: 0.036, // 7.2cm diameter
    MASS_KG: 0.160, // 160 grams official weight
    STANDARD_GRAVITY: -9.81,
    AIR_DRAG_COEFFICIENT: 0.30,
    MAGNUS_LIFT_FACTOR: 0.00045,
  },

  STADIUM: {
    BOUNDARY_RADIUS_METERS: 65.0,
    INNER_CIRCLE_RADIUS_METERS: 27.43, // 30-yard circle
    FLOODLIGHT_TOWER_HEIGHT: 38.0,
    STANDS_RADIUS_METERS: 85.0,
  },

  TIMING: {
    PERFECT_WINDOW_SECONDS: 0.04,
    GOOD_WINDOW_SECONDS: 0.09,
    EARLY_LATE_WINDOW_SECONDS: 0.16,
  },
} as const;
