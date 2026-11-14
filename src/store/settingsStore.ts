import { create } from 'zustand';
import { CameraMode, ControlType, GameSettings, GraphicsQuality, PitchCondition, StadiumLighting } from '../game/core/GameTypes';
import { DEFAULT_SETTINGS } from '../game/core/GameConfig';

interface SettingsStoreState extends GameSettings {
  pitchCondition: PitchCondition;
  lightingMode: StadiumLighting;
  setGraphicsQuality: (quality: GraphicsQuality) => void;
  setMasterVolume: (vol: number) => void;
  setMusicVolume: (vol: number) => void;
  setEffectsVolume: (vol: number) => void;
  setCrowdVolume: (vol: number) => void;
  setCameraMode: (mode: CameraMode) => void;
  setPitchCondition: (condition: PitchCondition) => void;
  setLightingMode: (lighting: StadiumLighting) => void;
  setControlType: (control: ControlType) => void;
  toggleTrajectory: () => void;
  toggleDebugPanel: () => void;
  resetToDefaults: () => void;
}

export const useSettingsStore = create<SettingsStoreState>((set) => ({
  ...DEFAULT_SETTINGS,
  pitchCondition: PitchCondition.NORMAL,
  lightingMode: StadiumLighting.DAY,

  setGraphicsQuality: (quality) => set({ graphicsQuality: quality }),
  setMasterVolume: (vol) => set({ masterVolume: Math.max(0, Math.min(1, vol)) }),
  setMusicVolume: (vol) => set({ musicVolume: Math.max(0, Math.min(1, vol)) }),
  setEffectsVolume: (vol) => set({ effectsVolume: Math.max(0, Math.min(1, vol)) }),
  setCrowdVolume: (vol) => set({ crowdVolume: Math.max(0, Math.min(1, vol)) }),
  setCameraMode: (mode) => set({ cameraMode: mode }),
  setPitchCondition: (condition) => set({ pitchCondition: condition }),
  setLightingMode: (lighting) => set({ lightingMode: lighting }),
  setControlType: (control) => set({ controlType: control }),
  toggleTrajectory: () => set((state) => ({ showTrajectory: !state.showTrajectory })),
  toggleDebugPanel: () => set((state) => ({ debugPanel: !state.debugPanel })),
  resetToDefaults: () =>
    set({
      ...DEFAULT_SETTINGS,
      pitchCondition: PitchCondition.NORMAL,
      lightingMode: StadiumLighting.DAY,
    }),
}));
