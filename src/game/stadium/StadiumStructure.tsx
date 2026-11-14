import React, { useMemo } from 'react';
import * as THREE from 'three';
import { GAME_CONSTANTS } from '../core/GameConstants';

export const StadiumStructure: React.FC = () => {
  const boundaryRadius = GAME_CONSTANTS.STADIUM.BOUNDARY_RADIUS_METERS; // 65m
  const standRadius = GAME_CONSTANTS.STADIUM.STANDS_RADIUS_METERS; // 85m

  // Generate Boundary Rope Ring & Foam Cushions
  const boundaryCushions = useMemo(() => {
    const cushions: React.ReactNode[] = [];
    const count = 48;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const x = Math.sin(angle) * (boundaryRadius + 0.3);
      const z = Math.cos(angle) * (boundaryRadius + 0.3);
      cushions.push(
        <mesh key={`cushion-${i}`} position={[x, 0.25, z]} rotation={[0, -angle, 0]} castShadow>
          <boxGeometry args={[4.2, 0.5, 0.4]} />
          <meshStandardMaterial color={i % 2 === 0 ? '#0A2A1B' : '#22E573'} roughness={0.5} />
        </mesh>
      );
    }
    return cushions;
  }, [boundaryRadius]);

  // Generate Instanced Grandstand Tiers
  const grandstandTiers = useMemo(() => {
    const tiers: React.ReactNode[] = [];
    const tierCount = 8;
    for (let t = 0; t < tierCount; t++) {
      const radius = boundaryRadius + 6 + t * 2.8;
      const height = 1.2 + t * 1.8;
      tiers.push(
        <mesh key={`tier-${t}`} position={[0, height / 2, 0]} receiveShadow>
          <cylinderGeometry args={[radius + 2.8, radius, 1.8, 48, 1, true]} />
          <meshStandardMaterial
            color={t % 2 === 0 ? '#1E293B' : '#334155'}
            roughness={0.7}
            side={THREE.DoubleSide}
          />
        </mesh>
      );
    }
    return tiers;
  }, [boundaryRadius]);

  return (
    <group>
      {/* 1. Lush Outfield Turf Disc */}
      <mesh position={[0, -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[boundaryRadius + 6, 64]} />
        <meshStandardMaterial color="#15803D" roughness={0.82} />
      </mesh>

      {/* 2. Inner 30-Yard Field Circle Marking */}
      <mesh position={[0, 0.005, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[27.4, 27.48, 64]} />
        <meshBasicMaterial color="#FFFFFF" transparent opacity={0.45} side={THREE.DoubleSide} />
      </mesh>

      {/* 3. Circular Boundary Rope */}
      <mesh position={[0, 0.12, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[boundaryRadius - 0.08, boundaryRadius + 0.08, 64]} />
        <meshBasicMaterial color="#FFFFFF" side={THREE.DoubleSide} />
      </mesh>

      {/* 4. Perimeter Advertising Cushions */}
      <group>{boundaryCushions}</group>

      {/* 5. Stadium Grandstand Tiers */}
      <group>{grandstandTiers}</group>

      {/* 6. Grandstand Floating Cantilever Roof */}
      <mesh position={[0, 24.0, 0]} rotation={[-Math.PI / 2, 0, 0]} castShadow>
        <ringGeometry args={[standRadius - 8, standRadius + 6, 48]} />
        <meshStandardMaterial color="#0F172A" roughness={0.3} metalness={0.8} side={THREE.DoubleSide} />
      </mesh>

      {/* 7. Pavilion & Team Dugout Center (South End) */}
      <group position={[0, 4.5, standRadius - 4]}>
        {/* Main Pavilion Building */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[26, 9, 14]} />
          <meshStandardMaterial color="#1E293B" roughness={0.4} />
        </mesh>
        {/* Glass Frontage */}
        <mesh position={[0, 1.2, -7.05]}>
          <planeGeometry args={[24, 5.5]} />
          <meshStandardMaterial color="#38BDF8" roughness={0.1} metalness={0.9} transparent opacity={0.65} />
        </mesh>
        {/* Roof Canopy */}
        <mesh position={[0, 5.2, -2]} castShadow>
          <boxGeometry args={[28, 0.6, 18]} />
          <meshStandardMaterial color="#0A2A1B" roughness={0.2} />
        </mesh>
      </group>
    </group>
  );
};
