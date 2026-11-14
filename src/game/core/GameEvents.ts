/**
 * CRICKET27 - Centralized Type-Safe Game Event System
 */

import { GameState, CollisionTarget, DeliveryType, CameraMode } from './GameTypes';

export type GameEventMap = {
  GAME_INITIALIZED: { timestamp: number };
  GAME_STARTED: { timestamp: number };
  GAME_PAUSED: { timestamp: number };
  GAME_RESUMED: { timestamp: number };
  SCENE_CHANGED: { previousScene: string; nextScene: string };
  STATE_TRANSITION: { from: GameState; to: GameState };

  MATCH_STARTED: { matchId: string; homeTeam: string; awayTeam: string; overs: number };
  INNINGS_STARTED: { inningsNumber: 1 | 2; battingTeam: string };
  
  // Ball & Physics Events
  BALL_DELIVERED: {
    deliveryType: DeliveryType;
    speedKmh: number;
    releasePos: [number, number, number];
    spinRpm: number;
  };
  BALL_HIT: {
    impactPosition: [number, number, number];
    exitVelocity: [number, number, number];
    timingQuality: 'PERFECT' | 'GOOD' | 'EARLY' | 'LATE' | 'MISSED';
  };
  BALL_BOUNCED: {
    bouncePosition: [number, number, number];
    speedKmh: number;
    surface: 'PITCH' | 'OUTFIELD';
  };
  BALL_COLLISION: {
    target: CollisionTarget;
    point: [number, number, number];
    velocity: [number, number, number];
  };
  BALL_HIT_STUMPS: { stump: 'OFF' | 'MIDDLE' | 'LEG'; speedKmh: number };
  BALL_REACHED_BOUNDARY: { isSix: boolean; runs: number };
  BALL_STOPPED: { finalPosition: [number, number, number] };
  BALL_RESET: { resetPosition: [number, number, number] };

  // Match Scoring Events
  RUN_SCORED: { runs: number; isExtra: boolean; strikerName: string };
  WICKET_TAKEN: { dismissalType: string; batsmanName: string; bowlerName: string };
  OVER_COMPLETED: { overNumber: number; totalRuns: number; wickets: number };
  INNINGS_COMPLETED: { inningsNumber: 1 | 2; totalRuns: number; target: number };
  MATCH_COMPLETED: { winner: string; margin: string };

  CAMERA_MODE_CHANGED: { mode: CameraMode };
};

type EventCallback<T> = (data: T) => void;

class EventBus {
  private listeners: Map<keyof GameEventMap, Set<EventCallback<any>>> = new Map();

  /**
   * Subscribe to a typed game event
   */
  on<K extends keyof GameEventMap>(event: K, callback: EventCallback<GameEventMap[K]>): () => void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    const set = this.listeners.get(event)!;
    set.add(callback);

    // Return unsubscription lambda for clean React useEffect cleanup
    return () => {
      this.off(event, callback);
    };
  }

  /**
   * Unsubscribe from a game event
   */
  off<K extends keyof GameEventMap>(event: K, callback: EventCallback<GameEventMap[K]>): void {
    const set = this.listeners.get(event);
    if (set) {
      set.delete(callback);
      if (set.size === 0) {
        this.listeners.delete(event);
      }
    }
  }

  /**
   * Emit a typed game event
   */
  emit<K extends keyof GameEventMap>(event: K, data: GameEventMap[K]): void {
    const set = this.listeners.get(event);
    if (set) {
      set.forEach((cb) => {
        try {
          cb(data);
        } catch (err) {
          console.error(`[EventBus] Error in listener for event '${event}':`, err);
        }
      });
    }
  }

  /**
   * Clear all active listeners (used during scene teardown or test reset)
   */
  clear(): void {
    this.listeners.clear();
  }
}

export const gameEvents = new EventBus();
