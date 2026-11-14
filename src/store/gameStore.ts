import { create } from 'zustand';
import { GameState } from '../game/core/GameTypes';
import { gameEvents } from '../game/core/GameEvents';

// Define strictly allowed state transitions to prevent game flow breakage
const VALID_TRANSITIONS: Record<GameState, GameState[]> = {
  [GameState.LOADING]: [GameState.MAIN_MENU, GameState.MATCH_SETUP],
  [GameState.MAIN_MENU]: [GameState.MODE_SELECTION, GameState.SETTINGS, GameState.MATCH_SETUP, GameState.LOADING],
  [GameState.MODE_SELECTION]: [GameState.TEAM_SELECTION, GameState.MAIN_MENU],
  [GameState.TEAM_SELECTION]: [GameState.MATCH_SETUP, GameState.MODE_SELECTION],
  [GameState.MATCH_SETUP]: [GameState.TOSS, GameState.MAIN_MENU, GameState.MATCH_START],
  [GameState.TOSS]: [GameState.MATCH_START, GameState.MATCH_SETUP],
  [GameState.MATCH_START]: [GameState.FIRST_INNINGS, GameState.PAUSED],
  [GameState.FIRST_INNINGS]: [GameState.INNINGS_BREAK, GameState.PAUSED, GameState.MAIN_MENU],
  [GameState.INNINGS_BREAK]: [GameState.SECOND_INNINGS, GameState.PAUSED, GameState.MAIN_MENU],
  [GameState.SECOND_INNINGS]: [GameState.MATCH_COMPLETE, GameState.PAUSED, GameState.MAIN_MENU],
  [GameState.MATCH_COMPLETE]: [GameState.MAIN_MENU, GameState.MATCH_SETUP],
  [GameState.PAUSED]: [GameState.FIRST_INNINGS, GameState.SECOND_INNINGS, GameState.MAIN_MENU, GameState.SETTINGS],
  [GameState.SETTINGS]: [GameState.MAIN_MENU, GameState.PAUSED],
};

interface GameStoreState {
  currentState: GameState;
  previousState: GameState | null;
  isPaused: boolean;
  error: string | null;

  // Actions
  transitionTo: (nextState: GameState) => boolean;
  pauseGame: () => void;
  resumeGame: () => void;
  returnToMainMenu: () => void;
  setError: (msg: string | null) => void;
  resetGame: () => void;
}

export const useGameStore = create<GameStoreState>((set, get) => ({
  currentState: GameState.LOADING,
  previousState: null,
  isPaused: false,
  error: null,

  transitionTo: (nextState: GameState) => {
    const { currentState } = get();

    // Check transition validity
    const allowed = VALID_TRANSITIONS[currentState];
    if (allowed && !allowed.includes(nextState)) {
      console.warn(`[GameStore] Rejected invalid transition from '${currentState}' to '${nextState}'`);
      return false;
    }

    set({
      currentState: nextState,
      previousState: currentState,
      isPaused: nextState === GameState.PAUSED,
    });

    gameEvents.emit('STATE_TRANSITION', { from: currentState, to: nextState });
    return true;
  },

  pauseGame: () => {
    const { currentState, isPaused } = get();
    if (!isPaused && (currentState === GameState.FIRST_INNINGS || currentState === GameState.SECOND_INNINGS)) {
      set({
        previousState: currentState,
        currentState: GameState.PAUSED,
        isPaused: true,
      });
      gameEvents.emit('GAME_PAUSED', { timestamp: Date.now() });
    }
  },

  resumeGame: () => {
    const { currentState, previousState, isPaused } = get();
    if (isPaused && currentState === GameState.PAUSED && previousState) {
      set({
        currentState: previousState,
        previousState: GameState.PAUSED,
        isPaused: false,
      });
      gameEvents.emit('GAME_RESUMED', { timestamp: Date.now() });
    }
  },

  returnToMainMenu: () => {
    const { currentState } = get();
    set({
      currentState: GameState.MAIN_MENU,
      previousState: currentState,
      isPaused: false,
      error: null,
    });
  },

  setError: (msg) => set({ error: msg }),

  resetGame: () =>
    set({
      currentState: GameState.LOADING,
      previousState: null,
      isPaused: false,
      error: null,
    }),
}));
