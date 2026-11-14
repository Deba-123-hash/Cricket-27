import React from 'react';
import { PlayerRole } from '../core/GameTypes';

interface CricketPlayerProps {
  position: [number, number, number];
  rotationY?: number;
  role: PlayerRole;
  teamPrimaryColor?: string;
  teamSecondaryColor?: string;
  name?: string;
  jerseyNumber?: number;
  hasBat?: boolean;
  hasPads?: boolean;
}

export const CricketPlayer: React.FC<CricketPlayerProps> = ({
  position,
  rotationY = 0,
  role,
  teamPrimaryColor = '#0A2A1B',
  teamSecondaryColor = '#22E573',
  name = 'Player',
  hasBat = false,
  hasPads = false,
}) => {
  return (
    <group position={position} rotation={[0, rotationY, 0]}>
      {/* 1. Head & Cricket Helmet */}
      <mesh position={[0, 1.72, 0]} castShadow>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#1E293B" roughness={0.4} />
      </mesh>
      {/* Helmet Peak & Steel Grille */}
      <mesh position={[0, 1.71, 0.11]} castShadow>
        <boxGeometry args={[0.14, 0.08, 0.06]} />
        <meshStandardMaterial color="#334155" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* 2. Torso & Team Jersey */}
      <mesh position={[0, 1.35, 0]} castShadow>
        <boxGeometry args={[0.36, 0.52, 0.22]} />
        <meshStandardMaterial color={teamPrimaryColor} roughness={0.6} />
      </mesh>
      {/* Accent Stripe across chest */}
      <mesh position={[0, 1.42, 0.112]}>
        <planeGeometry args={[0.34, 0.08]} />
        <meshBasicMaterial color={teamSecondaryColor} />
      </mesh>

      {/* 3. Left Arm */}
      <mesh position={[-0.24, 1.34, 0]} castShadow>
        <cylinderGeometry args={[0.045, 0.04, 0.42, 12]} />
        <meshStandardMaterial color={teamPrimaryColor} roughness={0.6} />
      </mesh>
      {/* Left Hand / Glove */}
      <mesh position={[-0.24, 1.08, 0]} castShadow>
        <boxGeometry args={[0.07, 0.09, 0.07]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.3} />
      </mesh>

      {/* 4. Right Arm */}
      <mesh position={[0.24, 1.34, 0]} castShadow>
        <cylinderGeometry args={[0.045, 0.04, 0.42, 12]} />
        <meshStandardMaterial color={teamPrimaryColor} roughness={0.6} />
      </mesh>
      {/* Right Hand / Glove */}
      <mesh position={[0.24, 1.08, 0]} castShadow>
        <boxGeometry args={[0.07, 0.09, 0.07]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.3} />
      </mesh>

      {/* 5. Legs & Trousers */}
      {/* Left Leg */}
      <mesh position={[-0.11, 0.62, 0]} castShadow>
        <cylinderGeometry args={[0.065, 0.055, 0.82, 12]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.7} />
      </mesh>
      {/* Right Leg */}
      <mesh position={[0.11, 0.62, 0]} castShadow>
        <cylinderGeometry args={[0.065, 0.055, 0.82, 12]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.7} />
      </mesh>

      {/* 6. Batting Pads (Front Protectors) */}
      {hasPads && (
        <group>
          <mesh position={[-0.11, 0.45, 0.07]} castShadow>
            <boxGeometry args={[0.13, 0.58, 0.07]} />
            <meshStandardMaterial color="#F8FAFC" roughness={0.4} />
          </mesh>
          <mesh position={[0.11, 0.45, 0.07]} castShadow>
            <boxGeometry args={[0.13, 0.58, 0.07]} />
            <meshStandardMaterial color="#F8FAFC" roughness={0.4} />
          </mesh>
        </group>
      )}

      {/* 7. Spiked Cricket Shoes */}
      <mesh position={[-0.11, 0.06, 0.04]} castShadow>
        <boxGeometry args={[0.09, 0.1, 0.22]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.3} />
      </mesh>
      <mesh position={[0.11, 0.06, 0.04]} castShadow>
        <boxGeometry args={[0.09, 0.1, 0.22]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.3} />
      </mesh>

      {/* 8. Cricket Bat */}
      {hasBat && (
        <group position={[0.18, 0.55, 0.22]} rotation={[0.4, 0, -0.15]}>
          {/* Bat Blade */}
          <mesh position={[0, 0, 0]} castShadow>
            <boxGeometry args={[0.11, 0.72, 0.045]} />
            <meshStandardMaterial color="#E2B170" roughness={0.35} />
          </mesh>
          {/* Bat Cane Handle & Rubber Grip */}
          <mesh position={[0, 0.52, 0]} castShadow>
            <cylinderGeometry args={[0.018, 0.018, 0.32, 12]} />
            <meshStandardMaterial color="#1E293B" roughness={0.9} />
          </mesh>
        </group>
      )}
    </group>
  );
};
