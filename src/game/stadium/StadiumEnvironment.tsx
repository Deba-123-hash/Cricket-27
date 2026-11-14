import React from 'react';
import { StadiumStructure } from './StadiumStructure';
import { StadiumScoreboard } from './StadiumScoreboard';
import { StadiumFloodlights } from './StadiumFloodlights';
import { useSettingsStore } from '../../store/settingsStore';
import { StadiumLighting } from '../core/GameTypes';

export const StadiumEnvironment: React.FC = () => {
  const lightingMode = useSettingsStore((s) => s.lightingMode);

  const skyColor =
    lightingMode === StadiumLighting.NIGHT
      ? '#030712'
      : lightingMode === StadiumLighting.EVENING
        ? '#451A03'
        : '#38BDF8';

  return (
    <group>
      {/* Dynamic Sky Sphere / Horizon Dome */}
      <mesh>
        <sphereGeometry args={[220, 32, 32]} />
        <meshBasicMaterial color={skyColor} side={2} />
      </mesh>

      {/* Main Structural Stadium */}
      <StadiumStructure />

      {/* Floodlight Towers */}
      <StadiumFloodlights />

      {/* Giant Stadium Scoreboard Display */}
      <StadiumScoreboard />
    </group>
  );
};
