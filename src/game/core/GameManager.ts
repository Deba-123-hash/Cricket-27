/**
 * CRICKET27 - Central Game Manager
 * Orchestrates game lifecycle, subsystem coordination, pause/resume, and resource cleanup.
 */

import { GameState } from './GameTypes';
import { useGameStore } from '../../store/gameStore';
import { gameEvents } from './GameEvents';
import { GAME_CONSTANTS } from './GameConstants';

export class GameManager {
  private static instance: GameManager | null = null;
  private isInitialized = false;
  private isRunning = false;
  private unsubscribers: Array<() => void> = [];

  private constructor() {
    // Private constructor for singleton
  }

  public static getInstance(): GameManager {
    if (!GameManager.instance) {
      GameManager.instance = new GameManager();
    }
    return GameManager.instance;
  }

  /**
   * Initialize central game systems and register event handlers
   */
  public async initialize(): Promise<boolean> {
    if (this.isInitialized) {
      console.warn('[GameManager] Already initialized');
      return true;
    }

    try {
      console.log(`[GameManager] Initializing ${GAME_CONSTANTS.IDENTITY.NAME} v${GAME_CONSTANTS.IDENTITY.VERSION}...`);

      // Bind to global event bus
      this.unsubscribers.push(
        gameEvents.on('GAME_PAUSED', () => {
          this.onPause();
        }),
        gameEvents.on('GAME_RESUMED', () => {
          this.onResume();
        })
      );

      this.isInitialized = true;
      this.isRunning = true;

      // Transition to MAIN_MENU from LOADING
      setTimeout(() => {
        useGameStore.getState().transitionTo(GameState.MAIN_MENU);
        gameEvents.emit('GAME_INITIALIZED', { timestamp: Date.now() });
      }, 500);

      return true;
    } catch (error) {
      console.error('[GameManager] Initialization failed:', error);
      useGameStore.getState().setError(error instanceof Error ? error.message : 'Unknown initialization error');
      return false;
    }
  }

  public start(): void {
    if (!this.isInitialized) {
      this.initialize();
    }
    this.isRunning = true;
    gameEvents.emit('GAME_STARTED', { timestamp: Date.now() });
  }

  public pause(): void {
    if (this.isRunning) {
      useGameStore.getState().pauseGame();
    }
  }

  public resume(): void {
    useGameStore.getState().resumeGame();
  }

  private onPause(): void {
    this.isRunning = false;
    console.log('[GameManager] Game paused');
  }

  private onResume(): void {
    this.isRunning = true;
    console.log('[GameManager] Game resumed');
  }

  public getIsRunning(): boolean {
    return this.isRunning;
  }

  /**
   * Tear down all game resources, listeners and subscriptions
   */
  public destroy(): void {
    console.log('[GameManager] Destroying game manager and clearing resources');
    this.isRunning = false;
    this.isInitialized = false;

    // Unsubscribe all registered event listeners
    this.unsubscribers.forEach((unsub) => unsub());
    this.unsubscribers = [];

    gameEvents.clear();
    GameManager.instance = null;
  }
}

export const gameManager = GameManager.getInstance();
