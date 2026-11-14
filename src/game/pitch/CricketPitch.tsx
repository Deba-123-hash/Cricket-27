import React, { useMemo } from 'react';
import * as THREE from 'three';
import { useSettingsStore } from '../../store/settingsStore';
import { PitchCondition } from '../core/GameTypes';
import { GAME_CONSTANTS } from '../core/GameConstants';

export const CricketPitch: React.FC = () => {
  const pitchCondition = useSettingsStore((s) => s.pitchCondition);

  // Pitch surface coloration by condition
  const pitchColors: Record<PitchCondition, { base: string; roughness: number }> = {
    [PitchCondition.NORMAL]: { base: '#C2A676', roughness: 0.8 },
    [PitchCondition.HARD]: { base: '#D4B988', roughness: 0.65 },
    [PitchCondition.GREEN]: { base: '#708A4E', roughness: 0.85 },
    [PitchCondition.DRY]: { base: '#B59661', roughness: 0.9 },
    [PitchCondition.DUSTY]: { base: '#A3814C', roughness: 0.95 },
  };

  const currentTheme = pitchColors[pitchCondition] ?? pitchColors[PitchCondition.NORMAL];

  const pitchLength = GAME_CONSTANTS.PITCH.LENGTH_METERS; // 20.12m
  const pitchWidth = GAME_CONSTANTS.PITCH.WIDTH_METERS; // 3.05m
  const halfLength = pitchLength / 2; // 10.06m
  const poppingOffset = GAME_CONSTANTS.PITCH.POPPING_CREASE_OFFSET; // 1.22m inside stumps

  return (
    <group>
      {/* 1. Central Pitch Strip */}
      <mesh position={[0, 0.025, 0]} receiveShadow>
        <boxGeometry args={[pitchWidth, 0.05, pitchLength]} />
        <meshStandardMaterial color={currentTheme.base} roughness={currentTheme.roughness} />
      </mesh>

      {/* 2. Crease Markings - Striker End */}
      {/* Popping Crease Line */}
      <mesh position={[0, 0.051, -halfLength + poppingOffset]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[pitchWidth, 0.06]} />
        <meshBasicMaterial color="#FFFFFF" side={THREE.DoubleSide} />
      </mesh>

      {/* Bowling Crease Line */}
      <mesh position={[0, 0.051, -halfLength]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.64, 0.04]} />
        <meshBasicMaterial color="#FFFFFF" side={THREE.DoubleSide} />
      </mesh>

      {/* Return Crease Left */}
      <mesh position={[-1.32, 0.051, -halfLength + poppingOffset / 2]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.04, poppingOffset + 0.6]} />
        <meshBasicMaterial color="#FFFFFF" side={THREE.DoubleSide} />
      </mesh>

      {/* Return Crease Right */}
      <mesh position={[1.32, 0.051, -halfLength + poppingOffset / 2]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.04, poppingOffset + 0.6]} />
        <meshBasicMaterial color="#FFFFFF" side={THREE.DoubleSide} />
      </mesh>

      {/* 3. Crease Markings - Bowler End */}
      {/* Popping Crease Line */}
      <mesh position={[0, 0.051, halfLength - poppingOffset]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[pitchWidth, 0.06]} />
        <meshBasicMaterial color="#FFFFFF" side={THREE.DoubleSide} />
      </mesh>

      {/* Bowling Crease Line */}
      <mesh position={[0, 0.051, halfLength]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.64, 0.04]} />
        <meshBasicMaterial color="#FFFFFF" side={THREE.DoubleSide} />
      </mesh>

      {/* Return Crease Left */}
      <mesh position={[-1.32, 0.051, halfLength - poppingOffset / 2]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.04, poppingOffset + 0.6]} />
        <meshBasicMaterial color="#FFFFFF" side={THREE.DoubleSide} />
      </mesh>

      {/* Return Crease Right */}
      <mesh position={[1.32, 0.051, halfLength - poppingOffset / 2]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.04, poppingOffset + 0.6]} />
        <meshBasicMaterial color="#FFFFFF" side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};
