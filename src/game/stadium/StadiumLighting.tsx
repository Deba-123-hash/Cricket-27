import React from 'react';
import { useSettingsStore } from '../../store/settingsStore';
import { StadiumLighting } from '../core/GameTypes';

export const StadiumLightingRig: React.FC = () => {
  const lightingMode = useSettingsStore((s) => s.lightingMode);

  switch (lightingMode) {
    case StadiumLighting.NIGHT:
      return (
        <group>
          {/* Ambient night base */}
          <ambientLight intensity={0.25} color="#0E1E38" />

          {/* 4 Quadrant High-Mast Stadium Floodlights */}
          {/* North-West Mast */}
          <spotLight
            position={[-55, 38, -55]}
            target-position={[0, 0, 0]}
            intensity={2.8}
            angle={0.65}
            penumbra={0.5}
            color="#FFFFFF"
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          {/* North-East Mast */}
          <spotLight
            position={[55, 38, -55]}
            target-position={[0, 0, 0]}
            intensity={2.8}
            angle={0.65}
            penumbra={0.5}
            color="#FFFFFF"
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          {/* South-West Mast */}
          <spotLight
            position={[-55, 38, 55]}
            target-position={[0, 0, 0]}
            intensity={2.8}
            angle={0.65}
            penumbra={0.5}
            color="#FFFFFF"
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          {/* South-East Mast */}
          <spotLight
            position={[55, 38, 55]}
            target-position={[0, 0, 0]}
            intensity={2.8}
            angle={0.65}
            penumbra={0.5}
            color="#FFFFFF"
            castShadow
            shadow-mapSize={[1024, 1024]}
          />

          {/* Central Pitch Fill Light */}
          <pointLight position={[0, 18, 0]} intensity={1.2} distance={45} color="#F8FAFC" />
        </group>
      );

    case StadiumLighting.EVENING:
      return (
        <group>
          {/* Warm Golden Hour Sun */}
          <ambientLight intensity={0.45} color="#7C2D12" />
          <directionalLight
            position={[60, 22, 45]}
            intensity={2.2}
            color="#FDBA74"
            castShadow
            shadow-mapSize={[1024, 1024]}
            shadow-camera-left={-40}
            shadow-camera-right={40}
            shadow-camera-top={40}
            shadow-camera-bottom={-40}
          />
          {/* Auxiliary Stadium Floodlights Warming Up */}
          <pointLight position={[-50, 32, -50]} intensity={0.8} color="#FEF08A" />
          <pointLight position={[50, 32, -50]} intensity={0.8} color="#FEF08A" />
        </group>
      );

    case StadiumLighting.DAY:
    default:
      return (
        <group>
          {/* Bright High-Noon Daylight */}
          <ambientLight intensity={0.75} color="#E0F2FE" />
          <directionalLight
            position={[25, 48, 20]}
            intensity={2.6}
            color="#FFFFFF"
            castShadow
            shadow-mapSize={[2048, 2048]}
            shadow-camera-left={-45}
            shadow-camera-right={45}
            shadow-camera-top={45}
            shadow-camera-bottom={-45}
            shadow-bias={-0.0001}
          />
          <hemisphereLight args={['#38BDF8', '#14532D', 0.6]} />
        </group>
      );
  }
};
