import React from 'react';
import { useMatchStore } from '../../store/matchStore';
import { GAME_CONSTANTS } from '../../game/core/GameConstants';

export const GameHUD: React.FC = () => {
  const match = useMatchStore((s) => s.match);
  const commentary = useMatchStore((s) => s.commentary);
  const strikerIdx = useMatchStore((s) => s.currentStrikerIndex);
  const bowlerIdx = useMatchStore((s) => s.currentBowlerIndex);

  const activeInnings = match.currentInnings === 1 ? match.innings1 : match.innings2;
  const striker = activeInnings.battingScorecard[strikerIdx];
  const bowler = activeInnings.bowlingScorecard[bowlerIdx];

  const overs = Math.floor(activeInnings.legalBalls / 6);
  const balls = activeInnings.legalBalls % 6;

  return (
    <div className="pointer-events-none fixed inset-0 z-40 flex flex-col justify-between p-4 select-none">
      {/* Top Header: Brand & Live Scorecard Bar */}
      <div className="flex items-center justify-between w-full max-w-4xl mx-auto">
        {/* Brand Card */}
        <div className="pointer-events-auto flex items-center gap-2.5 px-4 py-2 bg-slate-950/90 backdrop-blur-md border border-emerald-500/40 rounded-xl shadow-lg">
          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-black text-sm tracking-wider text-slate-100">{GAME_CONSTANTS.IDENTITY.NAME}</span>
          <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold px-1.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/50">
            LIVE 3D
          </span>
        </div>

        {/* Live Broadcast Scoreboard Card */}
        <div className="pointer-events-auto flex items-center gap-4 px-5 py-2.5 bg-slate-950/90 backdrop-blur-md border border-slate-800 rounded-xl shadow-2xl">
          <div className="text-right">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{activeInnings.teamName}</div>
            <div className="text-2xl font-black tracking-tight text-white">
              {activeInnings.runs}
              <span className="text-emerald-400 font-bold">/{activeInnings.wickets}</span>
            </div>
          </div>

          <div className="h-8 w-px bg-slate-800" />

          <div>
            <div className="text-[11px] font-medium text-slate-400">OVERS</div>
            <div className="text-sm font-bold text-amber-400">
              {overs}.{balls} <span className="text-xs text-slate-500 font-normal">/ {match.overs}</span>
            </div>
          </div>

          <div className="h-8 w-px bg-slate-800" />

          {/* Active Batsman & Bowler Readout */}
          <div className="text-[11px] leading-tight text-slate-300">
            <div>
              <span className="text-slate-500 font-medium">BAT: </span>
              <span className="font-bold text-emerald-400">{striker?.name ?? 'Striker'}</span>
              <span className="text-slate-400"> ({striker?.runs ?? 0}*)</span>
            </div>
            <div>
              <span className="text-slate-500 font-medium">BOWL: </span>
              <span className="font-semibold text-slate-200">{bowler?.name ?? 'Bowler'}</span>
              <span className="text-slate-400"> ({bowler?.wickets ?? 0}/{bowler?.runsConceded ?? 0})</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer: Dynamic Commentary Ticker */}
      <div className="w-full max-w-2xl mx-auto">
        <div className="pointer-events-auto px-4 py-2.5 bg-slate-950/90 backdrop-blur-md border border-slate-800/80 rounded-xl shadow-xl flex items-center gap-3">
          <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 bg-amber-950/50 border border-amber-800/50 px-2 py-0.5 rounded">
            COMMENTARY
          </span>
          <p className="text-xs text-slate-200 font-medium truncate">
            {commentary[0] ?? 'Bowler approaching the crease...'}
          </p>
        </div>
      </div>
    </div>
  );
};
