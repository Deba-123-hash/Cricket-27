/**
 * CRICKET27 - Rapier 3D Physics Engine Integration
 * Provides deterministic rigid-body simulation, pitch contact, bounce restitution and collision callbacks.
 */

import RAPIER from '@dimforge/rapier3d-compat';
import { PHYSICS_CONSTANTS } from './PhysicsConstants';
import { GAME_CONSTANTS } from '../core/GameConstants';
import { PitchPhysicsProperties } from '../core/GameTypes';
import { PITCH_PRESETS } from '../core/GameConfig';
import { PitchCondition } from '../core/GameTypes';

export class RapierPhysicsManager {
  private static instance: RapierPhysicsManager | null = null;
  private rapier: typeof RAPIER | null = null;
  private world: RAPIER.World | null = null;
  private isReady = false;

  // Static Colliders
  private pitchCollider: RAPIER.Collider | null = null;
  private groundCollider: RAPIER.Collider | null = null;
  private strikerStumpCollider: RAPIER.Collider | null = null;
  private nonStrikerStumpCollider: RAPIER.Collider | null = null;

  private constructor() {}

  public static getInstance(): RapierPhysicsManager {
    if (!RapierPhysicsManager.instance) {
      RapierPhysicsManager.instance = new RapierPhysicsManager();
    }
    return RapierPhysicsManager.instance;
  }

  public async init(): Promise<boolean> {
    if (this.isReady && this.world) return true;

    try {
      await RAPIER.init();
      this.rapier = RAPIER;

      const gravity = new RAPIER.Vector3(
        PHYSICS_CONSTANTS.GRAVITY.x,
        PHYSICS_CONSTANTS.GRAVITY.y,
        PHYSICS_CONSTANTS.GRAVITY.z
      );

      this.world = new RAPIER.World(gravity);
      this.isReady = true;

      this.setupStaticEnvironment(PITCH_PRESETS[PitchCondition.NORMAL]);
      console.log('[RapierPhysics] 3D Physics World successfully initialized');
      return true;
    } catch (err) {
      console.error('[RapierPhysics] Failed to initialize Rapier WASM:', err);
      return false;
    }
  }

  public setupStaticEnvironment(pitchProps: PitchPhysicsProperties): void {
    if (!this.world || !this.rapier) return;

    // 1. Outfield Ground plane (Y = 0)
    if (!this.groundCollider) {
      const groundDesc = this.rapier.ColliderDesc.cuboid(75.0, 0.2, 75.0)
        .setTranslation(0, -0.2, 0)
        .setRestitution(0.40)
        .setFriction(0.60);
      this.groundCollider = this.world.createCollider(groundDesc);
    }

    // 2. Cricket Pitch strip (20.12m x 3.05m centered at Z = 0)
    if (this.pitchCollider) {
      this.world.removeCollider(this.pitchCollider, false);
    }

    const pitchDesc = this.rapier.ColliderDesc.cuboid(
      GAME_CONSTANTS.PITCH.WIDTH_METERS / 2,
      0.05,
      GAME_CONSTANTS.PITCH.LENGTH_METERS / 2
    )
      .setTranslation(0, 0.05, 0)
      .setRestitution(pitchProps.restitution)
      .setFriction(pitchProps.friction);

    this.pitchCollider = this.world.createCollider(pitchDesc);

    // 3. Striker Stumps Collider (Z = -10.06m)
    if (!this.strikerStumpCollider) {
      const stumpDesc = this.rapier.ColliderDesc.cuboid(
        GAME_CONSTANTS.WICKET.WIDTH_METERS / 2,
        GAME_CONSTANTS.WICKET.HEIGHT_METERS / 2,
        0.05
      ).setTranslation(0, GAME_CONSTANTS.WICKET.HEIGHT_METERS / 2, -10.06);
      this.strikerStumpCollider = this.world.createCollider(stumpDesc);
    }

    // 4. Non-striker Stumps Collider (Z = +10.06m)
    if (!this.nonStrikerStumpCollider) {
      const stumpDesc = this.rapier.ColliderDesc.cuboid(
        GAME_CONSTANTS.WICKET.WIDTH_METERS / 2,
        GAME_CONSTANTS.WICKET.HEIGHT_METERS / 2,
        0.05
      ).setTranslation(0, GAME_CONSTANTS.WICKET.HEIGHT_METERS / 2, 10.06);
      this.nonStrikerStumpCollider = this.world.createCollider(stumpDesc);
    }
  }

  public updatePitchProperties(props: PitchPhysicsProperties): void {
    if (this.pitchCollider) {
      this.pitchCollider.setRestitution(props.restitution);
      this.pitchCollider.setFriction(props.friction);
    }
  }

  public step(deltaTime: number): void {
    if (this.world) {
      this.world.timestep = Math.min(deltaTime, 0.033);
      this.world.step();
    }
  }

  public getWorld(): RAPIER.World | null {
    return this.world;
  }

  public getRapier(): typeof RAPIER | null {
    return this.rapier;
  }

  public getIsReady(): boolean {
    return this.isReady;
  }

  public destroy(): void {
    if (this.world) {
      this.world.free();
      this.world = null;
    }
    this.pitchCollider = null;
    this.groundCollider = null;
    this.strikerStumpCollider = null;
    this.nonStrikerStumpCollider = null;
    this.isReady = false;
    RapierPhysicsManager.instance = null;
  }
}

export const physicsManager = RapierPhysicsManager.getInstance();
