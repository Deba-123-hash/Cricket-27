import React from 'react';
import { GAME_CONSTANTS } from '../core/GameConstants';

interface MastProps {
  position: [number, number, number];
  rotationY: number;
}

const FloodlightTowerMast: React.FC<MastProps> = ({ position, rotationY }) => {
  const height = GAME_CONSTANTS.STADIUM.FLOODLIGHT_TOWER_HEIGHT; // 38m

  return (
    <group position={position} rotation={[0, rotationY, 0]}>
      {/* Steel Lattice Pylon Mast */}
      <mesh position={[0, height / 2, 0]} castShadow>
        <cylinderGeometry args={[0.8, 1.8, height, 8]} />
        <meshStandardMaterial color="#475569" metalness={0.8} roughness={0.4} />
      </mesh>

      {/* Floodlight Head Frame */}
      <mesh position={[0, height + 1.2, 0]} castShadow>
        <boxGeometry args={[8.0, 3.8, 1.2]} />
        <meshStandardMaterial color="#1E293B" metalness={0.9} roughness={0.3} />
      </mesh>

      {/* High-Intensity LED Bulb Panels */}
      <mesh position={[0, height + 1.2, 0.65]}>
        <planeGeometry args={[7.4, 3.2]} />
        <meshBasicMaterial color="#FFFFFF" />
      </mesh>
    </group>
  );
};

export const StadiumFloodlights: React.FC = () => {
  const dist = 68;

  return (
    <group>
      {/* North-East Tower */}
      <FloodlightTowerMast position={[dist, 0, -dist]} rotationY={-Math.PI / 4} />

      {/* North-West Tower */}
      <FloodlightTowerMast position={[-dist, 0, -dist]} rotationY={Math.PI / 4} />

      {/* South-East Tower */}
      <FloodlightTowerMast position={[dist, 0, dist]} rotationY={(-3 * Math.PI) / 4} />

      {/* South-West Tower */}
      <FloodlightTowerMast position={[-dist, 0, dist]} rotationY={(3 * Math.PI) / 4} />
    </group>
  );
};
