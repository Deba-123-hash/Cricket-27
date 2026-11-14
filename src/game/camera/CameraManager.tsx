/**
 * CRICKET27 - Dynamic Camera Controller
 * Supports Broadcast, Batting Pro, Bowling Run-Up, Stump Cam, Ball Follow, and Aerial Blimp views.
 */

import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { useSettingsStore } from '../../store/settingsStore';
import { useBallStore } from '../../store/ballStore';
import { CameraMode } from '../core/GameTypes';

export const CameraDirector: React.FC = () => {
  const { camera } = useThree();
  const cameraMode = useSettingsStore((s) => s.cameraMode);
  const ballPos = useBallStore((s) => s.position);

  const targetLookAt = useRef(new THREE.Vector3(0, 1, 0));
  const desiredPos = useRef(new THREE.Vector3(0, 22, 38));

  useFrame((_, delta) => {
    const lerpSpeed = Math.min(1.0, delta * 5.0);

    switch (cameraMode) {
      case CameraMode.BATTING:
        // Behind the batsman looking down the pitch towards bowler
        desiredPos.current.set(0.1, 2.4, -13.8);
        targetLookAt.current.set(0, 1.2, 8.0);
        break;

      case CameraMode.BOWLING:
        // Behind bowler looking towards batting stumps
        desiredPos.current.set(0, 2.8, 15.5);
        targetLookAt.current.set(0, 1.0, -10.0);
        break;

      case CameraMode.STUMP_CAM:
        // Low wicket level looking down pitch
        desiredPos.current.set(0, 0.55, -10.5);
        targetLookAt.current.set(0, 0.8, 0);
        break;

      case CameraMode.BALL_FOLLOW:
        // Follows the moving ball dynamically with offset
        desiredPos.current.set(ballPos[0] + 1.8, Math.max(1.5, ballPos[1] + 1.2), ballPos[2] + 4.5);
        targetLookAt.current.set(ballPos[0], ballPos[1], ballPos[2]);
        break;

      case CameraMode.AERIAL:
        // High stadium overview
        desiredPos.current.set(0, 68, 15);
        targetLookAt.current.set(0, 0, 0);
        break;

      case CameraMode.BROADCAST:
      default:
        // Classic TV broadcast side angle
        desiredPos.current.set(-28, 18, 12);
        targetLookAt.current.set(0, 1.2, 0);
        break;
    }

    // Smoothly interpolate position and lookAt
    camera.position.lerp(desiredPos.current, lerpSpeed);

    const currentLookAt = new THREE.Vector3();
    camera.getWorldDirection(currentLookAt);
    currentLookAt.add(camera.position);
    currentLookAt.lerp(targetLookAt.current, lerpSpeed);
    camera.lookAt(currentLookAt);
  });

  return null;
};
