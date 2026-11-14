/**
 * CRICKET27 - Cricket Ball Physics Simulation
 * Integrates Rapier 3D with realistic aerodynamics (drag, Magnus swing), pitch bounce restitution,
 * spin deviation, and safe collision dispatching.
 */

import RAPIER from '@dimforge/rapier3d-compat';
import { GAME_CONSTANTS } from '../core/GameConstants';
import { BallState, CollisionTarget, DeliveryConfig, DeliveryType, PitchCondition } from '../core/GameTypes';
import { gameEvents } from '../core/GameEvents';
import { physicsManager } from '../physics/RapierWorld';
import { useBallStore } from '../../store/ballStore';
import { PITCH_PRESETS } from '../core/GameConfig';

export class CricketBallPhysics {
  private rigidBody: RAPIER.RigidBody | null = null;
  private collider: RAPIER.Collider | null = null;
  private isSimulating = false;
  private hasBounced = false;
  private lastCollisionTarget: CollisionTarget | null = null;
  private collisionDebounceTime = 0;
  private flightTime = 0;
  private activeDelivery: DeliveryConfig | null = null;
  private currentPitch: PitchCondition = PitchCondition.NORMAL;

  public init(startPos: [number, number, number] = [0, 2.15, 10.0]): boolean {
    const world = physicsManager.getWorld();
    const rapier = physicsManager.getRapier();
    if (!world || !rapier) return false;

    // Clean up existing body if present
    this.cleanup();

    // Create dynamic rigid body for the cricket ball
    const bodyDesc = rapier.RigidBodyDesc.dynamic()
      .setTranslation(startPos[0], startPos[1], startPos[2])
      .setLinearDamping(0.05)
      .setAngularDamping(0.12)
      .setCcdEnabled(true); // Continuous Collision Detection prevents tunneling through pitch

    this.rigidBody = world.createRigidBody(bodyDesc);

    // Create spherical collider with official cricket ball radius (3.6 cm = 0.036 m)
    const colliderDesc = rapier.ColliderDesc.ball(GAME_CONSTANTS.BALL.RADIUS_METERS)
      .setMass(GAME_CONSTANTS.BALL.MASS_KG)
      .setRestitution(0.65)
      .setFriction(0.45)
      .setActiveEvents(rapier.ActiveEvents.COLLISION_EVENTS);

    this.collider = world.createCollider(colliderDesc, this.rigidBody);
    return true;
  }

  public launchDelivery(config: DeliveryConfig, pitchCondition: PitchCondition = PitchCondition.NORMAL): void {
    if (!this.rigidBody) {
      this.init(config.releasePosition);
    }
    if (!this.rigidBody) return;

    this.activeDelivery = config;
    this.currentPitch = pitchCondition;
    this.hasBounced = false;
    this.lastCollisionTarget = null;
    this.flightTime = 0;
    this.collisionDebounceTime = 0;
    this.isSimulating = true;

    // Position at release point
    this.rigidBody.setTranslation(
      new RAPIER.Vector3(config.releasePosition[0], config.releasePosition[1], config.releasePosition[2]),
      true
    );

    // Speed in m/s (1 km/h = 1 / 3.6 m/s)
    const speedMs = config.speedKmh / 3.6;

    // Ballistics trajectory vector calculation
    const dx = config.pitchTarget[0] - config.releasePosition[0];
    const dy = config.pitchTarget[1] - config.releasePosition[1];
    const dz = config.pitchTarget[2] - config.releasePosition[2];

    const horizontalDist = Math.hypot(dx, dz);
    const timeToBounce = Math.max(0.15, horizontalDist / speedMs);

    const gravity = Math.abs(GAME_CONSTANTS.BALL.STANDARD_GRAVITY);
    const vx = dx / timeToBounce;
    const vz = dz / timeToBounce;
    const vy = (dy + 0.5 * gravity * timeToBounce * timeToBounce) / timeToBounce;

    this.rigidBody.setLinvel(new RAPIER.Vector3(vx, vy, vz), true);

    // Set spin rotation axis
    let angX = 0;
    let angY = 0;
    let angZ = 0;
    const spinRadSec = (config.spinRpm * 2 * Math.PI) / 60;

    switch (config.type) {
      case DeliveryType.FAST:
      case DeliveryType.YORKER:
      case DeliveryType.BOUNCER:
        angX = spinRadSec; // Seam backspin
        break;
      case DeliveryType.OFF_SPIN:
        angY = spinRadSec * 0.8;
        angX = spinRadSec * 0.5;
        break;
      case DeliveryType.LEG_SPIN:
        angY = -spinRadSec * 0.8;
        angX = spinRadSec * 0.5;
        break;
      case DeliveryType.IN_SWING:
        angZ = spinRadSec * 0.4;
        angX = spinRadSec * 0.9;
        break;
      case DeliveryType.OUT_SWING:
        angZ = -spinRadSec * 0.4;
        angX = spinRadSec * 0.9;
        break;
      default:
        angX = spinRadSec * 0.8;
        break;
    }

    this.rigidBody.setAngvel(new RAPIER.Vector3(angX, angY, angZ), true);

    useBallStore.getState().setBallState(BallState.RELEASED);
    gameEvents.emit('BALL_DELIVERED', {
      deliveryType: config.type,
      speedKmh: config.speedKmh,
      releasePos: config.releasePosition,
      spinRpm: config.spinRpm,
    });
  }

  public update(deltaTime: number): void {
    if (!this.rigidBody || !this.isSimulating) return;

    this.flightTime += deltaTime;
    this.collisionDebounceTime = Math.max(0, this.collisionDebounceTime - deltaTime);

    const pos = this.rigidBody.translation();
    const vel = this.rigidBody.linvel();
    const speedMs = Math.hypot(vel.x, vel.y, vel.z);

    // Apply Aerodynamics (Drag & Magnus force) while in air
    if (!this.hasBounced && speedMs > 1.0) {
      this.applyAerodynamics(deltaTime, vel, speedMs);
    }

    // Check pitch / ground contact
    if (pos.y <= 0.08 && !this.hasBounced) {
      this.handlePitchBounce(pos, vel);
    }

    // Check stumps collision
    if (Math.abs(pos.z - -10.06) < 0.22 && Math.abs(pos.x) < 0.18 && pos.y < 0.72) {
      this.handleStumpCollision(pos, speedMs);
    }

    // Check boundary
    const distFromCenter = Math.hypot(pos.x, pos.z);
    if (distFromCenter >= GAME_CONSTANTS.STADIUM.BOUNDARY_RADIUS_METERS) {
      const isSix = !this.hasBounced && pos.y > 0.5;
      this.handleBoundaryCollision(isSix);
    }

    // Check ball stopped
    if (this.hasBounced && speedMs < 0.25 && pos.y < 0.15 && this.flightTime > 1.2) {
      this.handleBallStopped(pos);
    }

    // Sync to store
    useBallStore.getState().updatePhysicsState([pos.x, pos.y, pos.z], [vel.x, vel.y, vel.z]);
  }

  private applyAerodynamics(deltaTime: number, vel: RAPIER.Vector3, speedMs: number): void {
    if (!this.rigidBody || !this.activeDelivery) return;

    // 1. Air Drag Force (opposing direction of motion)
    const dragMag = 0.00045 * GAME_CONSTANTS.BALL.AIR_DRAG_COEFFICIENT * speedMs * speedMs;
    const dragX = -(vel.x / speedMs) * dragMag;
    const dragZ = -(vel.z / speedMs) * dragMag;

    // 2. Magnus Swing Force (lateral swing in X based on delivery type)
    let swingForceX = 0;
    const swingFactor = this.activeDelivery.swingStrength * (speedMs / 40.0);

    if (this.activeDelivery.type === DeliveryType.IN_SWING) {
      swingForceX = 0.015 * swingFactor; // curves towards right-hand batsman (+X)
    } else if (this.activeDelivery.type === DeliveryType.OUT_SWING) {
      swingForceX = -0.015 * swingFactor; // curves away from right-hand batsman (-X)
    }

    this.rigidBody.applyImpulse(
      new RAPIER.Vector3(
        (dragX + swingForceX) * deltaTime,
        0.0,
        dragZ * deltaTime
      ),
      true
    );
  }

  private handlePitchBounce(pos: RAPIER.Vector3, vel: RAPIER.Vector3): void {
    if (this.collisionDebounceTime > 0) return;
    this.collisionDebounceTime = 0.15;
    this.hasBounced = true;

    const pitchProps = PITCH_PRESETS[this.currentPitch];
    const isOutfield = Math.abs(pos.x) > GAME_CONSTANTS.PITCH.WIDTH_METERS / 2 || Math.abs(pos.z) > GAME_CONSTANTS.PITCH.LENGTH_METERS / 2;

    // Restitution & Spin deviation off the turf
    let devX = 0;
    if (this.activeDelivery?.type === DeliveryType.OFF_SPIN) {
      devX = 0.85 * pitchProps.friction; // Turn into right hander
    } else if (this.activeDelivery?.type === DeliveryType.LEG_SPIN) {
      devX = -1.10 * pitchProps.friction; // Sharp turn away
    } else {
      // Natural seam movement
      devX = (Math.random() - 0.5) * pitchProps.seamDeviation;
    }

    // Apply rebound impulse
    const bounceMultiplier = useBallStore.getState().bounceMultiplier;
    const newVy = Math.max(1.8, Math.abs(vel.y) * pitchProps.restitution * bounceMultiplier);
    this.rigidBody?.setLinvel(new RAPIER.Vector3(vel.x + devX, newVy, vel.z * 0.88), true);

    useBallStore.getState().setBallState(BallState.BOUNCED);
    useBallStore.getState().setLastCollision(CollisionTarget.PITCH);

    gameEvents.emit('BALL_BOUNCED', {
      bouncePosition: [pos.x, pos.y, pos.z],
      speedKmh: Math.hypot(vel.x, vel.y, vel.z) * 3.6,
      surface: isOutfield ? 'OUTFIELD' : 'PITCH',
    });
  }

  private handleStumpCollision(pos: RAPIER.Vector3, speedMs: number): void {
    if (this.collisionDebounceTime > 0) return;
    this.collisionDebounceTime = 0.4;

    this.isSimulating = false;
    useBallStore.getState().setBallState(BallState.HIT_STUMPS);
    useBallStore.getState().setLastCollision(CollisionTarget.STUMPS);

    gameEvents.emit('BALL_HIT_STUMPS', {
      stump: Math.abs(pos.x) < 0.05 ? 'MIDDLE' : pos.x > 0 ? 'OFF' : 'LEG',
      speedKmh: speedMs * 3.6,
    });
  }

  private handleBoundaryCollision(isSix: boolean): void {
    this.isSimulating = false;
    useBallStore.getState().setBallState(BallState.STOPPED);
    useBallStore.getState().setLastCollision(CollisionTarget.BOUNDARY);

    gameEvents.emit('BALL_REACHED_BOUNDARY', {
      isSix,
      runs: isSix ? 6 : 4,
    });
  }

  private handleBallStopped(pos: RAPIER.Vector3): void {
    this.isSimulating = false;
    useBallStore.getState().setBallState(BallState.STOPPED);

    gameEvents.emit('BALL_STOPPED', {
      finalPosition: [pos.x, pos.y, pos.z],
    });
  }

  public reset(resetPos: [number, number, number] = [0, 2.15, 10.0]): void {
    this.isSimulating = false;
    this.hasBounced = false;
    this.flightTime = 0;
    this.collisionDebounceTime = 0;

    if (this.rigidBody) {
      this.rigidBody.setTranslation(new RAPIER.Vector3(resetPos[0], resetPos[1], resetPos[2]), true);
      this.rigidBody.setLinvel(new RAPIER.Vector3(0, 0, 0), true);
      this.rigidBody.setAngvel(new RAPIER.Vector3(0, 0, 0), true);
    }

    useBallStore.getState().resetBall();
    gameEvents.emit('BALL_RESET', { resetPosition: resetPos });
  }

  public getPosition(): [number, number, number] {
    if (!this.rigidBody) return [0, 2.15, 10.0];
    const t = this.rigidBody.translation();
    return [t.x, t.y, t.z];
  }

  public getVelocity(): [number, number, number] {
    if (!this.rigidBody) return [0, 0, 0];
    const v = this.rigidBody.linvel();
    return [v.x, v.y, v.z];
  }

  public cleanup(): void {
    const world = physicsManager.getWorld();
    if (world) {
      if (this.collider) {
        world.removeCollider(this.collider, false);
        this.collider = null;
      }
      if (this.rigidBody) {
        world.removeRigidBody(this.rigidBody);
        this.rigidBody = null;
      }
    }
    this.isSimulating = false;
  }
}

export const ballPhysics = new CricketBallPhysics();
