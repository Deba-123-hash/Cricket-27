import { DeliveryConfig, DeliveryType, PitchCondition } from '../core/GameTypes';
import { GAME_CONSTANTS } from '../core/GameConstants';
import { PITCH_PRESETS } from '../core/GameConfig';

export class TrajectoryPredictor {
  /**
   * Pre-calculates an estimated trajectory line before physical release.
   */
  public static calculatePredictedPath(
    config: DeliveryConfig,
    pitchCondition: PitchCondition = PitchCondition.NORMAL,
    segments: number = 36
  ): { points: [number, number, number][]; bouncePoint: [number, number, number] } {
    const points: [number, number, number][] = [];
    const speedMs = config.speedKmh / 3.6;

    const dx = config.pitchTarget[0] - config.releasePosition[0];
    const dy = config.pitchTarget[1] - config.releasePosition[1];
    const dz = config.pitchTarget[2] - config.releasePosition[2];

    const horizDist = Math.hypot(dx, dz);
    const timeToBounce = Math.max(0.15, horizDist / speedMs);
    const gravity = Math.abs(GAME_CONSTANTS.BALL.STANDARD_GRAVITY);

    const vx = dx / timeToBounce;
    const vz = dz / timeToBounce;
    const vy = (dy + 0.5 * gravity * timeToBounce * timeToBounce) / timeToBounce;

    const dt = timeToBounce / (segments / 2);

    // 1. Flight to pitch bounce
    for (let i = 0; i <= segments / 2; i++) {
      const t = i * dt;
      let swingX = 0;
      if (config.type === DeliveryType.IN_SWING) {
        swingX = 0.5 * 0.4 * config.swingStrength * t * t;
      } else if (config.type === DeliveryType.OUT_SWING) {
        swingX = -0.5 * 0.4 * config.swingStrength * t * t;
      }

      const x = config.releasePosition[0] + vx * t + swingX;
      const y = Math.max(0.04, config.releasePosition[1] + vy * t - 0.5 * gravity * t * t);
      const z = config.releasePosition[2] + vz * t;

      points.push([x, y, z]);
    }

    const bouncePoint: [number, number, number] = points[points.length - 1] ?? config.pitchTarget;

    // 2. Post-bounce trajectory to batting crease (Z = -10.06)
    const pitchProps = PITCH_PRESETS[pitchCondition];
    let devX = 0;
    if (config.type === DeliveryType.OFF_SPIN) devX = 0.75 * pitchProps.friction;
    else if (config.type === DeliveryType.LEG_SPIN) devX = -0.95 * pitchProps.friction;

    const postBounceVx = vx + devX;
    const postBounceVy = Math.max(1.8, Math.abs(vy - gravity * timeToBounce) * pitchProps.restitution);
    const postBounceVz = vz * 0.9;

    const postTimeTotal = Math.abs((-10.06 - bouncePoint[2]) / postBounceVz);
    const postDt = postTimeTotal / (segments / 2);

    for (let i = 1; i <= segments / 2; i++) {
      const t = i * postDt;
      const x = bouncePoint[0] + postBounceVx * t;
      const y = Math.max(0.04, bouncePoint[1] + postBounceVy * t - 0.5 * gravity * t * t);
      const z = bouncePoint[2] + postBounceVz * t;

      points.push([x, y, z]);
    }

    return { points, bouncePoint };
  }
}
