/**
 * CRICKET27 - 3D Cricket Ball Component
 * Renders the realistic red/white leather ball with stitched seam, motion trail, and trajectory preview.
 */

import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import { useBallStore } from '../../store/ballStore';
import { useSettingsStore } from '../../store/settingsStore';
import { ballPhysics } from './CricketBallPhysics';
import { GAME_CONSTANTS } from '../core/GameConstants';
import { BallState } from '../core/GameTypes';
import { TrajectoryPredictor } from './TrajectoryPredictor';

export const CricketBall: React.FC = () => {
  const meshRef = useRef<THREE.Group>(null);
  const position = useBallStore((s) => s.position);
  const ballState = useBallStore((s) => s.state);
  const ballColor = useBallStore((s) => s.ballColor);
  const activeDelivery = useBallStore((s) => s.activeDelivery);
  const showTrajectory = useSettingsStore((s) => s.showTrajectory);
  const pitchCondition = useSettingsStore((s) => s.pitchCondition);

  // Generate leather texture procedurally for authentic ball appearance
  const leatherTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // Leather base
      ctx.fillStyle = ballColor === 'RED' ? '#991B1B' : '#F8FAFC';
      ctx.fillRect(0, 0, 512, 256);

      // Subtle leather mottling
      for (let i = 0; i < 4000; i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 256;
        ctx.fillStyle = ballColor === 'RED' ? 'rgba(69, 10, 10, 0.12)' : 'rgba(203, 213, 225, 0.2)';
        ctx.fillRect(x, y, 1.5, 1.5);
      }

      // Stitched Seam down center
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 126, 512, 4);

      // Thread crosses along seam
      ctx.fillStyle = '#E2E8F0';
      for (let x = 0; x < 512; x += 6) {
        ctx.fillRect(x, 122, 2, 12);
      }
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    return texture;
  }, [ballColor]);

  // Pre-calculate trajectory preview points
  const { points: trajectoryPoints, bouncePoint } = useMemo(() => {
    return TrajectoryPredictor.calculatePredictedPath(activeDelivery, pitchCondition);
  }, [activeDelivery, pitchCondition]);

  // Physics stepping & visual position synchronization loop
  useFrame((_, delta) => {
    if (ballState === BallState.RELEASED || ballState === BallState.IN_AIR || ballState === BallState.BOUNCED) {
      ballPhysics.update(delta);
    }

    if (meshRef.current) {
      const curPos = ballPhysics.getPosition();
      meshRef.current.position.set(curPos[0], curPos[1], curPos[2]);

      // Rotate ball along flight direction
      if (ballState === BallState.RELEASED || ballState === BallState.IN_AIR) {
        meshRef.current.rotation.x += delta * 18.0;
        meshRef.current.rotation.y += delta * 4.0;
      }
    }
  });

  const radius = GAME_CONSTANTS.BALL.RADIUS_METERS;

  return (
    <group>
      {/* Real 3D Cricket Ball */}
      <group ref={meshRef} position={position}>
        {/* Main Leather Sphere */}
        <mesh castShadow receiveShadow>
          <sphereGeometry args={[radius, 32, 32]} />
          <meshStandardMaterial
            map={leatherTexture}
            color={ballColor === 'RED' ? '#B91C1C' : '#FFFFFF'}
            roughness={0.28}
            metalness={0.08}
          />
        </mesh>

        {/* Physical Seam Ring */}
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[radius + 0.0006, 0.0018, 12, 48]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.4} />
        </mesh>
      </group>

      {/* Trajectory Guide Preview */}
      {showTrajectory && trajectoryPoints.length > 1 && (
        <group>
          <Line
            points={trajectoryPoints}
            color="#22E573"
            lineWidth={2.2}
            transparent
            opacity={0.65}
            dashed
            dashScale={4}
            dashSize={0.6}
            gapSize={0.3}
          />

          {/* Pitch Landing Target Marker */}
          <mesh position={[bouncePoint[0], 0.052, bouncePoint[2]]} rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[0.08, 0.16, 24]} />
            <meshBasicMaterial color="#F5BA31" transparent opacity={0.85} side={THREE.DoubleSide} />
          </mesh>
        </group>
      )}
    </group>
  );
};
