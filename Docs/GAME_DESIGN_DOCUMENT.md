# CRICKET27 — GAME DESIGN DOCUMENT (GDD)
**Version:** 0.1.0-alpha  
**Engine:** Unreal Engine 5  
**Target Platforms:** Windows PC, Android, iOS  
**Tagline:** *YOUR GAME. YOUR TEAM. YOUR LEGACY.*

---

## 1. Executive Summary & Vision

CRICKET27 is a premium 3D cricket simulation game engineered to bring the intensity, atmosphere, and tactical depth of international cricket broadcasts into hands-on interactive gaming. 

Unlike casual arcade titles or browser-based minigames, CRICKET27 is built with genuine physics-driven ball flight, physical bat-ball collision, dynamic AI fielding, and a broadcast camera presentation.

### Key Pillars
1. **Authentic Physics over Scripted Animations**: Ball speed, trajectory, seam angle, turf friction, and bat swing velocity calculate physically—not predetermined by dice rolls.
2. **Accessible Depth**: Intuitive two-tap/swipe controls for mobile players alongside granular footwork, shot timing, and pitch placement for PC enthusiasts.
3. **Cinematic Broadcast Presentation**: Elevated stadium cameras, pitch-level stump cameras, Hawkeye-style ball tracking, and celebratory crowd audio.
4. **Original Identity**: Original fictional clubs, teams, players, uniforms, and stadiums.

---

## 2. Gameplay Loops

### 2.1 The Core Delivery Loop (Seconds 0 – 8)
```
[1. Bowler Marker & Delivery Selection]
               │
               ▼
   [2. Bowler Run-Up & Release Point]
               │
               ▼
  [3. Ball Flight & Magnus Swing / Drift]
               │
               ▼
    [4. Pitch Bounce & Seam Deviation]
               │
               ▼
[5. Batsman Footwork & Swing Timing Window]
               │
               ▼
    [6. Physical Bat-Ball Collision]
               │
               ▼
 [7. Outfield Pursuit / Interception / Catch]
               │
               ▼
[8. Rules Engine Scoring & Scoreboard Update]
```

### 2.2 The Over Loop (Balls 1 – 6)
- 6 legal deliveries bowled per over.
- Extras (wides, no-balls) re-bowled with 1-run penalty.
- No-balls trigger an automatic Free Hit on the subsequent delivery.
- Batsmen rotate strike on odd runs (1, 3).
- At the end of 6 legal balls: strike rotates automatically, bowling end switches, and a new bowler is assigned.

### 2.3 The Match Loop (Rapid 3-Over Prototype)
1. **Pre-Match**: Stadium fly-through, Team Lineups, Toss Screen (Heads/Tails & Bat/Bowl decision).
2. **Innings 1**: Team 1 bats for 3 overs or until all 10 wickets fall.
3. **Innings Break**: 1st Innings Scorecard review, Target calculated (`Target = Team1Runs + 1`).
4. **Innings 2**: Team 2 chases the target under run-rate pressure.
5. **Post-Match**: Match Result announcement, Player of the Match, detailed batting/bowling scorecard, restart option.

---

## 3. Gameplay Mechanics

### 3.1 Cricket Ball Physics
- **Mass**: 160 grams.
- **Diameter**: 7.2 cm.
- **Flight Aerodynamics**: 
  - Drag force $F_d = \frac{1}{2} C_d \rho v^2 A$ slows incoming pace.
  - Magnus effect $F_m = S (\vec{\omega} \times \vec{v})$ induces outswing, inswing, or drift.
- **Pitch Interaction**:
  - Restitution coefficient $e \approx 0.65$ determines bounce height.
  - Seam angle and pitch friction trigger lateral deviation (spin turn and seam movement).

### 3.2 Batting System & Timing Window
- **Shot Categories**:
  1. *Defensive*: Soft hands, suppresses rebound, anchors wicket.
  2. *Straight Drive*: Classic high-elbow straight bat stroke down the ground.
  3. *Cover Drive*: High-speed stroke through extra cover off good length balls.
  4. *Pull / Hook*: Horizontal bat stroke punished through mid-wicket / square leg against short deliveries.
  5. *Sweep*: Knee-down ground stroke against spinners through backward square.
  6. *Lofted Maximum*: Full bat face elevation for clearing boundary ropes.
- **Timing Window Evaluation**:
  - `Perfect` (Error $< \pm 0.04s$): Maximum sweet-spot impulse, optimum exit velocity.
  - `Good` (Error $\pm 0.04s - 0.10s$): Controlled shot, high boundary probability.
  - `Early / Late` (Error $\pm 0.10s - 0.18s$): Edge deflection hazard to slips or keeper.
  - `Missed`: Complete swing-and-miss or clean bowled.

### 3.3 Bowling System
- **Pace Options**: Express Fast (140-150 km/h), Fast Medium (130-138 km/h), Slower Cutter (115-125 km/h).
- **Spin Options**: Off-Break (turns into right-hander), Leg-Break (sharp spin away), Googly (wrong'un), Top-Spinner.
- **Line & Length**: Yorker (toe level), Full Length, Good Length (uncertainty zone), Short Pitch (rib cage), Bouncer (helmet level).

### 3.4 Fielding AI
- Dynamic 11-player field presets (Powerplay ring vs Defensive boundary protection).
- Predictive trajectory tracking: fielder forecasts ball roll stop point and sprints via pathfinding.
- Action triggers: Catch (ball height $30 - 250\text{ cm}$), Ground Pickup, and Throw to Stumps.

---

## 4. Visual Identity & Brand System

- **Color Palette**:
  - **Dominant**: Obsidian Charcoal (`#121417`)
  - **Secondary**: Deep Stadium Green (`#0A2A1B`)
  - **Accent**: Vibrant Stadium Lime (`#22E573`)
  - **Highlight**: Championship Gold (`#F5BA31`)
  - **Neutral**: Crisp Pure White (`#FFFFFF`)
- **Stadium Architecture**:
  - **Royal Park Stadium**: 45,000 capacity open-bowl arena, lush outfield turf, LED boundary ribbons, 4 towering light masts, dual electronic jumbotrons.
  - **Atmospheres**: High Noon Sunlight, Dramatic Golden Hour Sunset, Dazzling Floodlit Night Match.

---

## 5. Audio Landscape

- **Bat-Ball Impacts**: Recorded high-frequency willow crack for sweet spot contact, dull hollow thud for toe edge.
- **Ball-Stump Impact**: Wooden rattle and flying bail snap sound.
- **Crowd Atmosphere**: Dynamic reaction tiers:
  - Quiet murmuring during bowler run-up.
  - Sudden gasp on close appeals / edges.
  - Roaring standing ovation for sixes and wicket dismissals.
