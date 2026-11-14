import { DeliveryConfig, DeliveryType } from '../core/GameTypes';

export const DELIVERY_PRESETS: Record<string, DeliveryConfig> = {
  EXPRESS_PACE: {
    type: DeliveryType.FAST,
    speedKmh: 145.0,
    pitchTarget: [0.0, 0.05, -3.8],
    spinRpm: 1900,
    swingStrength: 0.15,
    releasePosition: [0.0, 2.15, 10.0],
  },
  TOE_CRUSHER_YORKER: {
    type: DeliveryType.YORKER,
    speedKmh: 142.0,
    pitchTarget: [0.0, 0.05, -9.6], // Exactly on the batting crease line
    spinRpm: 2100,
    swingStrength: 0.20,
    releasePosition: [0.0, 2.15, 10.0],
  },
  WICKED_BOUNCER: {
    type: DeliveryType.BOUNCER,
    speedKmh: 140.0,
    pitchTarget: [0.0, 0.05, 1.2], // Short pitch bouncing aggressively
    spinRpm: 2400,
    swingStrength: 0.10,
    releasePosition: [0.0, 2.20, 10.0],
  },
  SLOWER_CUTTER: {
    type: DeliveryType.SLOW,
    speedKmh: 112.0,
    pitchTarget: [0.15, 0.05, -4.2],
    spinRpm: 1400,
    swingStrength: 0.10,
    releasePosition: [0.0, 2.10, 10.0],
  },
  DRIFTING_OFF_SPIN: {
    type: DeliveryType.OFF_SPIN,
    speedKmh: 88.0,
    pitchTarget: [0.35, 0.05, -4.5], // Lands outside off stump and turns into middle
    spinRpm: 2200,
    swingStrength: 0.35,
    releasePosition: [-0.2, 2.05, 10.0],
  },
  SHARP_LEG_SPIN: {
    type: DeliveryType.LEG_SPIN,
    speedKmh: 84.0,
    pitchTarget: [-0.15, 0.05, -4.8], // Lands on middle and turns away past off
    spinRpm: 2350,
    swingStrength: 0.40,
    releasePosition: [0.2, 2.05, 10.0],
  },
  BANANA_IN_SWING: {
    type: DeliveryType.IN_SWING,
    speedKmh: 138.0,
    pitchTarget: [0.25, 0.05, -4.0],
    spinRpm: 2000,
    swingStrength: 0.85,
    releasePosition: [-0.3, 2.15, 10.0],
  },
  LATE_OUT_SWING: {
    type: DeliveryType.OUT_SWING,
    speedKmh: 136.0,
    pitchTarget: [-0.10, 0.05, -4.2],
    spinRpm: 2050,
    swingStrength: 0.85,
    releasePosition: [0.1, 2.15, 10.0],
  },
};
