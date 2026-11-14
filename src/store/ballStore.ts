import { create } from 'zustand';
import { BallState, CollisionTarget, DeliveryConfig, DeliveryType } from '../game/core/GameTypes';

export const DEFAULT_DELIVERY: DeliveryConfig = {
  type: DeliveryType.FAST,
  speedKmh: 142.0,
  pitchTarget: [0, 0.05, -3.5], // Bounce spot in front of striker crease
  spinRpm: 1800,
  swingStrength: 0.25,
  releasePosition: [0, 2.15, 10.0], // Bowler release point near non-striker crease
};

interface BallStoreState {
  state: BallState;
  position: [number, number, number];
  velocity: [number, number, number];
  speedKmh: number;
  spinRpm: number;
  swingStrength: number;
  lastCollision: CollisionTarget | null;
  activeDelivery: DeliveryConfig;
  trajectoryPoints: [number, number, number][];
  ballColor: 'RED' | 'WHITE';

  // Debug Panel Tuning Parameters
  gravityMultiplier: number;
  bounceMultiplier: number;
  frictionMultiplier: number;

  // Actions
  setBallState: (state: BallState) => void;
  updatePhysicsState: (pos: [number, number, number], vel: [number, number, number]) => void;
  setDeliveryConfig: (config: Partial<DeliveryConfig>) => void;
  setLastCollision: (target: CollisionTarget) => void;
  setTrajectoryPoints: (points: [number, number, number][]) => void;
  setBallColor: (color: 'RED' | 'WHITE') => void;
  setPhysicsMultipliers: (gravity?: number, bounce?: number, friction?: number) => void;
  resetBall: () => void;
}

export const useBallStore = create<BallStoreState>((set) => ({
  state: BallState.IDLE,
  position: [0, 2.15, 10.0],
  velocity: [0, 0, 0],
  speedKmh: 0,
  spinRpm: DEFAULT_DELIVERY.spinRpm,
  swingStrength: DEFAULT_DELIVERY.swingStrength,
  lastCollision: null,
  activeDelivery: DEFAULT_DELIVERY,
  trajectoryPoints: [],
  ballColor: 'RED',

  gravityMultiplier: 1.0,
  bounceMultiplier: 1.0,
  frictionMultiplier: 1.0,

  setBallState: (state) => set({ state }),

  updatePhysicsState: (pos, vel) => {
    const speedMs = Math.hypot(vel[0], vel[1], vel[2]);
    const speedKmh = Math.round(speedMs * 3.6 * 10) / 10;
    set({
      position: pos,
      velocity: vel,
      speedKmh,
    });
  },

  setDeliveryConfig: (config) =>
    set((s) => ({
      activeDelivery: { ...s.activeDelivery, ...config },
      spinRpm: config.spinRpm ?? s.spinRpm,
      swingStrength: config.swingStrength ?? s.swingStrength,
    })),

  setLastCollision: (target) => set({ lastCollision: target }),

  setTrajectoryPoints: (points) => set({ trajectoryPoints: points }),

  setBallColor: (color) => set({ ballColor: color }),

  setPhysicsMultipliers: (gravity, bounce, friction) =>
    set((s) => ({
      gravityMultiplier: gravity ?? s.gravityMultiplier,
      bounceMultiplier: bounce ?? s.bounceMultiplier,
      frictionMultiplier: friction ?? s.frictionMultiplier,
    })),

  resetBall: () =>
    set((s) => ({
      state: BallState.IDLE,
      position: [...s.activeDelivery.releasePosition],
      velocity: [0, 0, 0],
      speedKmh: 0,
      lastCollision: null,
    })),
}));
