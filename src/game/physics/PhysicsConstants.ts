export const PHYSICS_CONSTANTS = {
  TIMESTEP: 1 / 60,
  GRAVITY: { x: 0.0, y: -9.81, z: 0.0 },
  DEFAULT_SUBSTEPS: 2,

  // Collision groups (bitmasks)
  COLLISION_GROUPS: {
    BALL: 0x0001,
    PITCH: 0x0002,
    OUTFIELD: 0x0004,
    STUMPS: 0x0008,
    BAT: 0x0010,
    PLAYER: 0x0020,
    BOUNDARY: 0x0040,
  },

  MIN_BOUNCE_VELOCITY_MS: 0.5,
  MAX_BALL_SPEED_MS: 55.0, // ~198 km/h max speed cap to prevent tunnelling
} as const;
