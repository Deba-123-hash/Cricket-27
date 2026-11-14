import React, { useEffect } from 'react';
import { GameCanvas } from '../game/engine/GameCanvas';
import { GameHUD } from '../components/game-ui/GameHUD';
import { DebugPhysicsPanel } from '../game/controls/DebugPhysicsPanel';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { gameManager } from '../game/core/GameManager';

export const App: React.FC = () => {
  useEffect(() => {
    gameManager.initialize();

    return () => {
      gameManager.destroy();
    };
  }, []);

  return (
    <ErrorBoundary>
      <main className="w-screen h-screen relative overflow-hidden bg-slate-950">
        {/* Central 3D WebGL Canvas */}
        <GameCanvas />

        {/* Live Broadcast Scoreboard HUD */}
        <GameHUD />

        {/* Developer Physics Control Panel */}
        <DebugPhysicsPanel />
      </main>
    </ErrorBoundary>
  );
};

export default App;
