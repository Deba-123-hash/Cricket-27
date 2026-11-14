import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { StadiumEnvironment } from '../stadium/StadiumEnvironment';
import { CricketPitch } from '../pitch/CricketPitch';
import { CricketWickets } from '../pitch/CricketWickets';
import { StadiumPlayers } from '../players/StadiumPlayers';
import { CricketBall } from '../ball/CricketBall';
import { StadiumLightingRig } from '../stadium/StadiumLighting';
import { CameraDirector } from '../camera/CameraManager';
import { physicsManager } from '../physics/RapierWorld';
import { ballPhysics } from '../ball/CricketBallPhysics';
import { useBallStore } from '../../store/ballStore';

export const GameCanvas: React.FC = () => {
  const [isPhysicsReady, setIsPhysicsReady] = useState(false);
  const activeDelivery = useBallStore((s) => s.activeDelivery);

  useEffect(() => {
    let mounted = true;

    async function setupWorld() {
      const ready = await physicsManager.init();
      if (mounted && ready) {
        ballPhysics.init(activeDelivery.releasePosition);
        setIsPhysicsReady(true);
      }
    }

    setupWorld();

    return () => {
      mounted = false;
      ballPhysics.cleanup();
      physicsManager.destroy();
    };
  }, []);

  return (
    <div className="w-full h-full relative overflow-hidden bg-slate-950">
      <Canvas
        shadows
        dpr={[1, 1.75]}
        camera={{ position: [-28, 18, 12], fov: 50, near: 0.1, far: 450 }}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      >
        {/* Dynamic Stadium & Sun/Floodlight Lighting */}
        <StadiumLightingRig />

        {/* Smooth Dynamic Camera Director */}
        <CameraDirector />

        {/* 3D Stadium & Atmosphere */}
        <StadiumEnvironment />

        {/* Official 22-Yard Cricket Pitch Strip & Markings */}
        <CricketPitch />

        {/* Authentic Stumps & Dislodgeable Bails */}
        <CricketWickets />

        {/* 11 Players on Field (Batsman, Bowler, Keeper, Fielders) */}
        <StadiumPlayers />

        {/* Realistic Rapier-Driven 3D Cricket Ball */}
        {isPhysicsReady && <CricketBall />}
      </Canvas>
    </div>
  );
};
