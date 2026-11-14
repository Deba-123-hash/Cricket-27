import React, { useState } from 'react';
import { useBallStore } from '../../store/ballStore';
import { useSettingsStore } from '../../store/settingsStore';
import { ballPhysics } from '../ball/CricketBallPhysics';
import { DELIVERY_PRESETS } from '../ball/DeliveryPresets';
import { CameraMode, PitchCondition, StadiumLighting } from '../core/GameTypes';
import {
  Play,
  RotateCcw,
  Eye,
  EyeOff,
  Sun,
  Moon,
  Sunset,
  Camera,
  Activity,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

export const DebugPhysicsPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const ballState = useBallStore((s) => s.state);
  const position = useBallStore((s) => s.position);
  const speedKmh = useBallStore((s) => s.speedKmh);
  const lastCollision = useBallStore((s) => s.lastCollision);
  const activeDelivery = useBallStore((s) => s.activeDelivery);
  const setDeliveryConfig = useBallStore((s) => s.setDeliveryConfig);
  const ballColor = useBallStore((s) => s.ballColor);
  const setBallColor = useBallStore((s) => s.setBallColor);

  const pitchCondition = useSettingsStore((s) => s.pitchCondition);
  const setPitchCondition = useSettingsStore((s) => s.setPitchCondition);
  const lightingMode = useSettingsStore((s) => s.lightingMode);
  const setLightingMode = useSettingsStore((s) => s.setLightingMode);
  const cameraMode = useSettingsStore((s) => s.cameraMode);
  const setCameraMode = useSettingsStore((s) => s.setCameraMode);
  const showTrajectory = useSettingsStore((s) => s.showTrajectory);
  const toggleTrajectory = useSettingsStore((s) => s.toggleTrajectory);

  const handleDeliver = () => {
    ballPhysics.launchDelivery(activeDelivery, pitchCondition);
  };

  const handleReset = () => {
    ballPhysics.reset(activeDelivery.releasePosition);
  };

  return (
    <div className="fixed top-4 right-4 z-50 w-84 max-h-[92vh] overflow-y-auto bg-slate-900/95 backdrop-blur-md border border-slate-700/80 rounded-xl shadow-2xl text-xs text-slate-200">
      {/* Header */}
      <div
        className="flex items-center justify-between p-3 border-b border-slate-800 cursor-pointer bg-slate-800/60"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-emerald-400" />
          <span className="font-bold tracking-wider text-slate-100 uppercase">Physics Control</span>
        </div>
        <button className="text-slate-400 hover:text-white">
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {isOpen && (
        <div className="p-3.5 space-y-3.5">
          {/* Real-time Telemetry Readout */}
          <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1 font-mono text-[11px]">
            <div className="flex justify-between">
              <span className="text-slate-400">State:</span>
              <span className="text-emerald-400 font-bold">{ballState}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Speed:</span>
              <span className="text-amber-400 font-bold">{speedKmh} km/h</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Pos [X,Y,Z]:</span>
              <span className="text-slate-300">
                {position[0].toFixed(2)}, {position[1].toFixed(2)}, {position[2].toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Last Impact:</span>
              <span className="text-sky-400">{lastCollision ?? 'None'}</span>
            </div>
          </div>

          {/* Action Trigger Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleDeliver}
              className="flex items-center justify-center gap-1.5 py-2 px-3 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 active:scale-98 text-white font-bold rounded-lg shadow-lg shadow-emerald-900/40 transition-all cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>DELIVER</span>
            </button>
            <button
              onClick={handleReset}
              className="flex items-center justify-center gap-1.5 py-2 px-3 bg-slate-800 hover:bg-slate-700 active:scale-98 text-slate-200 font-semibold rounded-lg border border-slate-700 transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>RESET</span>
            </button>
          </div>

          {/* Delivery Presets Selection */}
          <div className="space-y-1.5">
            <label className="text-slate-400 font-medium block">Delivery Variation:</label>
            <div className="grid grid-cols-2 gap-1.5">
              {Object.entries(DELIVERY_PRESETS).map(([key, preset]) => (
                <button
                  key={key}
                  onClick={() => setDeliveryConfig(preset)}
                  className={`py-1.5 px-2 text-left rounded border transition-all truncate text-[10.5px] cursor-pointer ${
                    activeDelivery.type === preset.type && Math.abs(activeDelivery.speedKmh - preset.speedKmh) < 1
                      ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold'
                      : 'bg-slate-800/70 border-slate-700/60 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {key.replace(/_/g, ' ')}
                </button>
              ))}
            </div>
          </div>

          {/* Pitch Condition Preset */}
          <div className="space-y-1.5">
            <label className="text-slate-400 font-medium block">Pitch Condition:</label>
            <div className="grid grid-cols-3 gap-1">
              {Object.values(PitchCondition).map((cond) => (
                <button
                  key={cond}
                  onClick={() => setPitchCondition(cond)}
                  className={`py-1 px-1.5 text-center rounded border text-[10px] uppercase cursor-pointer ${
                    pitchCondition === cond
                      ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                      : 'bg-slate-800/70 border-slate-700/60 text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  {cond}
                </button>
              ))}
            </div>
          </div>

          {/* Camera Angles */}
          <div className="space-y-1.5">
            <label className="text-slate-400 font-medium flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5" /> Camera View:
            </label>
            <div className="grid grid-cols-3 gap-1">
              {[
                { mode: CameraMode.BROADCAST, label: 'Broadcast' },
                { mode: CameraMode.BATTING, label: 'Batting' },
                { mode: CameraMode.BOWLING, label: 'Bowling' },
                { mode: CameraMode.BALL_FOLLOW, label: 'Ball Follow' },
                { mode: CameraMode.STUMP_CAM, label: 'Stump Cam' },
                { mode: CameraMode.AERIAL, label: 'Aerial' },
              ].map(({ mode, label }) => (
                <button
                  key={mode}
                  onClick={() => setCameraMode(mode)}
                  className={`py-1 px-1 text-center rounded border text-[10px] cursor-pointer truncate ${
                    cameraMode === mode
                      ? 'bg-sky-500/20 border-sky-500 text-sky-300 font-bold'
                      : 'bg-slate-800/70 border-slate-700/60 text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Stadium Lighting & Ball Options */}
          <div className="flex items-center justify-between pt-1 border-t border-slate-800">
            {/* Lighting */}
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => setLightingMode(StadiumLighting.DAY)}
                className={`p-1.5 rounded cursor-pointer ${lightingMode === StadiumLighting.DAY ? 'bg-amber-500 text-slate-950' : 'text-slate-400'}`}
                title="Day Sunlight"
              >
                <Sun className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setLightingMode(StadiumLighting.EVENING)}
                className={`p-1.5 rounded cursor-pointer ${lightingMode === StadiumLighting.EVENING ? 'bg-orange-500 text-slate-950' : 'text-slate-400'}`}
                title="Golden Hour Sunset"
              >
                <Sunset className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setLightingMode(StadiumLighting.NIGHT)}
                className={`p-1.5 rounded cursor-pointer ${lightingMode === StadiumLighting.NIGHT ? 'bg-sky-500 text-slate-950' : 'text-slate-400'}`}
                title="Floodlit Night"
              >
                <Moon className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Ball Color & Trajectory */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setBallColor(ballColor === 'RED' ? 'WHITE' : 'RED')}
                className="px-2 py-1 text-[10.5px] font-bold rounded bg-slate-800 border border-slate-700 cursor-pointer"
              >
                {ballColor === 'RED' ? '🔴 Red Ball' : '⚪ White Ball'}
              </button>
              <button
                onClick={toggleTrajectory}
                className={`p-1.5 rounded border cursor-pointer ${
                  showTrajectory
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400'
                    : 'bg-slate-800 border-slate-700 text-slate-400'
                }`}
                title="Toggle Trajectory Line"
              >
                {showTrajectory ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
