import React from 'react';
import { CricketPlayer } from './CricketPlayer';
import { PlayerRole } from '../core/GameTypes';
import { useMatchStore } from '../../store/matchStore';

export const StadiumPlayers: React.FC = () => {
  const match = useMatchStore((s) => s.match);
  const homeTeam = match.homeTeam;
  const awayTeam = match.awayTeam;

  const battingTeam = match.currentInnings === 1 ? homeTeam : awayTeam;
  const bowlingTeam = match.currentInnings === 1 ? awayTeam : homeTeam;

  return (
    <group>
      {/* 1. Striker Batsman (Batting Stance at Z = -9.2m) */}
      <CricketPlayer
        position={[0.25, 0, -9.2]}
        rotationY={-Math.PI / 2}
        role={PlayerRole.BATSMAN}
        teamPrimaryColor={battingTeam.primaryColor}
        teamSecondaryColor={battingTeam.secondaryColor}
        hasBat={true}
        hasPads={true}
        name="Striker"
      />

      {/* 2. Non-Striker Batsman (Standing by Bowler End at Z = +9.0m) */}
      <CricketPlayer
        position={[-1.2, 0, 9.0]}
        rotationY={Math.PI}
        role={PlayerRole.BATSMAN}
        teamPrimaryColor={battingTeam.primaryColor}
        teamSecondaryColor={battingTeam.secondaryColor}
        hasBat={true}
        hasPads={true}
        name="Non-Striker"
      />

      {/* 3. Active Bowler (At Bowling Crease ready to run in at Z = +10.5m) */}
      <CricketPlayer
        position={[0.6, 0, 10.5]}
        rotationY={Math.PI}
        role={PlayerRole.BOWLER}
        teamPrimaryColor={bowlingTeam.primaryColor}
        teamSecondaryColor={bowlingTeam.secondaryColor}
        hasBat={false}
        hasPads={false}
        name="Bowler"
      />

      {/* 4. Wicketkeeper (Behind Striker Wicket at Z = -12.5m) */}
      <CricketPlayer
        position={[0.1, 0, -12.5]}
        rotationY={0}
        role={PlayerRole.WICKET_KEEPER}
        teamPrimaryColor={bowlingTeam.primaryColor}
        teamSecondaryColor={bowlingTeam.secondaryColor}
        hasBat={false}
        hasPads={true}
        name="Wicketkeeper"
      />

      {/* 5. First Slip (Behind Off Stump at Z = -13.5m, X = 2.2m) */}
      <CricketPlayer
        position={[2.2, 0, -13.5]}
        rotationY={0.2}
        role={PlayerRole.ALL_ROUNDER}
        teamPrimaryColor={bowlingTeam.primaryColor}
        teamSecondaryColor={bowlingTeam.secondaryColor}
        name="1st Slip"
      />

      {/* 6. Point (Off-side ring at X = 16.0m, Z = -8.0m) */}
      <CricketPlayer
        position={[16.0, 0, -8.0]}
        rotationY={-1.2}
        role={PlayerRole.ALL_ROUNDER}
        teamPrimaryColor={bowlingTeam.primaryColor}
        teamSecondaryColor={bowlingTeam.secondaryColor}
        name="Point"
      />

      {/* 7. Extra Cover (Off-side drive ring at X = 18.0m, Z = 2.0m) */}
      <CricketPlayer
        position={[18.0, 0, 2.0]}
        rotationY={-1.8}
        role={PlayerRole.ALL_ROUNDER}
        teamPrimaryColor={bowlingTeam.primaryColor}
        teamSecondaryColor={bowlingTeam.secondaryColor}
        name="Cover"
      />

      {/* 8. Mid-Off (Straight down ground off-side at X = 6.5m, Z = 14.0m) */}
      <CricketPlayer
        position={[6.5, 0, 14.0]}
        rotationY={Math.PI - 0.3}
        role={PlayerRole.ALL_ROUNDER}
        teamPrimaryColor={bowlingTeam.primaryColor}
        teamSecondaryColor={bowlingTeam.secondaryColor}
        name="Mid-Off"
      />

      {/* 9. Mid-On (Straight down ground leg-side at X = -6.5m, Z = 14.0m) */}
      <CricketPlayer
        position={[-6.5, 0, 14.0]}
        rotationY={Math.PI + 0.3}
        role={PlayerRole.ALL_ROUNDER}
        teamPrimaryColor={bowlingTeam.primaryColor}
        teamSecondaryColor={bowlingTeam.secondaryColor}
        name="Mid-On"
      />

      {/* 10. Deep Mid-Wicket (Leg-side boundary boundary rider at X = -38.0m, Z = 8.0m) */}
      <CricketPlayer
        position={[-38.0, 0, 8.0]}
        rotationY={1.7}
        role={PlayerRole.ALL_ROUNDER}
        teamPrimaryColor={bowlingTeam.primaryColor}
        teamSecondaryColor={bowlingTeam.secondaryColor}
        name="Deep Mid-Wicket"
      />
    </group>
  );
};
