import React from 'react';
import { GAME_CONSTANTS } from '../core/GameConstants';

interface WicketProps {
  positionZ: number;
  rotationY?: number;
}

const SingleWicketEnd: React.FC<WicketProps> = ({ positionZ, rotationY = 0 }) => {
  const stumpHeight = GAME_CONSTANTS.WICKET.HEIGHT_METERS;
  const stumpRadius = GAME_CONSTANTS.WICKET.STUMP_RADIUS;
  const spacing = 0.085; // Distance between stump centers

  return (
    <group position={[0, 0, positionZ]} rotation={[0, rotationY, 0]}>
      {/* Off Stump */}
      <mesh position={[spacing, stumpHeight / 2, 0]} castShadow>
        <cylinderGeometry args={[stumpRadius, stumpRadius, stumpHeight, 16]} />
        <meshStandardMaterial color="#D97706" roughness={0.35} metalness={0.05} />
      </mesh>

      {/* Middle Stump */}
      <mesh position={[0, stumpHeight / 2, 0]} castShadow>
        <cylinderGeometry args={[stumpRadius, stumpRadius, stumpHeight, 16]} />
        <meshStandardMaterial color="#D97706" roughness={0.35} metalness={0.05} />
      </mesh>

      {/* Leg Stump */}
      <mesh position={[-spacing, stumpHeight / 2, 0]} castShadow>
        <cylinderGeometry args={[stumpRadius, stumpRadius, stumpHeight, 16]} />
        <meshStandardMaterial color="#D97706" roughness={0.35} metalness={0.05} />
      </mesh>

      {/* Left Bail */}
      <mesh position={[-spacing / 2, stumpHeight + 0.012, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.007, 0.007, 0.095, 12]} />
        <meshStandardMaterial color="#B45309" roughness={0.3} />
      </mesh>

      {/* Right Bail */}
      <mesh position={[spacing / 2, stumpHeight + 0.012, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.007, 0.007, 0.095, 12]} />
        <meshStandardMaterial color="#B45309" roughness={0.3} />
      </mesh>
    </group>
  );
};

export const CricketWickets: React.FC = () => {
  const halfPitchLength = GAME_CONSTANTS.PITCH.LENGTH_METERS / 2; // 10.06m

  return (
    <group>
      {/* Striker Wickets (Facing Down Pitch) */}
      <SingleWicketEnd positionZ={-halfPitchLength} rotationY={0} />

      {/* Non-Striker Wickets (Facing Bowler End) */}
      <SingleWicketEnd positionZ={halfPitchLength} rotationY={Math.PI} />
    </group>
  );
};
