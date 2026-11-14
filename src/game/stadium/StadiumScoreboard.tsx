import React from 'react';
import { useMatchStore } from '../../store/matchStore';

export const StadiumScoreboard: React.FC = () => {
  const match = useMatchStore((s) => s.match);
  const activeInnings = match.currentInnings === 1 ? match.innings1 : match.innings2;

  const totalRuns = activeInnings.runs;
  const totalWickets = activeInnings.wickets;
  const oversCompleted = Math.floor(activeInnings.legalBalls / 6);
  const ballsInOver = activeInnings.legalBalls % 6;

  return (
    <group position={[0, 16.5, -82.0]} rotation={[0, 0, 0]}>
      {/* Supporting Framework */}
      <mesh castShadow>
        <boxGeometry args={[22, 11, 2.5]} />
        <meshStandardMaterial color="#0B132B" roughness={0.3} metalness={0.7} />
      </mesh>

      {/* Screen Display Bezel */}
      <mesh position={[0, 0, 1.3]}>
        <planeGeometry args={[20.5, 9.8]} />
        <meshBasicMaterial color="#030712" />
      </mesh>

      {/* Inner Screen Content - Simulated 3D LED Banner */}
      <mesh position={[0, 3.2, 1.32]}>
        <planeGeometry args={[18, 1.8]} />
        <meshBasicMaterial color="#0A2A1B" />
      </mesh>

      {/* Score Text Emissive Panels */}
      <mesh position={[0, 0.4, 1.32]}>
        <planeGeometry args={[16, 2.8]} />
        <meshBasicMaterial color="#111827" />
      </mesh>
    </group>
  );
};
