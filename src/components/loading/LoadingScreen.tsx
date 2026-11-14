import React from 'react';
import { GAME_CONSTANTS } from '../../game/core/GameConstants';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white select-none">
      <div className="text-center space-y-4">
        {/* Animated Cricket Ball Spinner */}
        <div className="relative w-16 h-16 mx-auto">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600 via-red-700 to-red-950 border-2 border-white/60 shadow-2xl shadow-red-900/60 animate-bounce flex items-center justify-center">
            <div className="w-16 h-0.5 bg-white/80 rotate-45 transform" />
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-black tracking-widest text-slate-100">{GAME_CONSTANTS.IDENTITY.NAME}</h1>
          <p className="text-xs uppercase tracking-widest text-emerald-400 font-bold mt-1">
            {GAME_CONSTANTS.IDENTITY.TAGLINE}
          </p>
        </div>

        <p className="text-xs text-slate-500 font-mono animate-pulse">Initializing Rapier 3D Physics & Stadium...</p>
      </div>
    </div>
  );
};
