# CRICKET27 — TECHNICAL ARCHITECTURE DOCUMENT (TAD)
**Version:** 0.1.0-alpha  
**Engine:** Unreal Engine 5.4 / 5.5 (C++ & Blueprints)  
**Primary Target Platforms:** Windows PC, Android, iOS  

---

## 1. Engine & Module Architecture

CRICKET27 is structured as a native C++ Unreal Engine 5 project with exposed Blueprint hooks for presentation and visual assembly.

```
                    ┌─────────────────────────┐
                    │    Cricket27.uproject   │
                    └────────────┬────────────┘
                                 │
                    ┌────────────▼────────────┐
                    │   Cricket27 C++ Module  │
                    └────────────┬────────────┘
         ┌───────────────────────┼───────────────────────┐
         ▼                       ▼                       ▼
┌──────────────────┐   ┌──────────────────┐   ┌──────────────────┐
│ Engine Framework │   │  Enhanced Input  │   │     AIModule     │
│   (PhysicsCore)  │   │     & UMG UI     │   │(Nav & Pathfinding)│
└──────────────────┘   └──────────────────┘   └──────────────────┘
```

### Module Dependencies (`Cricket27.Build.cs`)
- `Core`, `CoreUObject`, `Engine`: Foundation engine classes and UObject lifecycle.
- `InputCore`, `EnhancedInput`: Modern contextual input action and mapping contexts.
- `UMG`, `Slate`, `SlateCore`: Dynamic HUD, scorecards, broadcast overlays, and menus.
- `AIModule`, `GameplayTasks`: Fielder behavior, pursuit pathfinding, and decision state machines.
- `PhysicsCore`: Collision shapes, material physical restitution, and impulse responses.

---

## 2. Core Class Hierarchy & Responsibilities

| Class Name | Base Class | Primary Responsibility |
|---|---|---|
| `ACricket27GameMode` | `AGameModeBase` | Match initialization, actor spawning (wickets, ball, cameras), rule binding. |
| `ACricket27GameState` | `AGameStateBase` | Replicated match telemetry, score synchronization, commentary broadcast across network. |
| `ACricket27PlayerController`| `APlayerController`| Input dispatching (Desktop WASD/Mouse & Mobile Touch Swipes), HUD toggle. |
| `ACricket27GameInstance` | `UGameInstance` | Cross-level persistence: user profiles, career stats, graphics & audio settings. |
| `ACricketBall` | `AActor` | 160g physics ball, Magnus aerodynamic swing, pitch bounce, boundary check. |
| `ACricketBat` | `AActor` | Bat mesh, sweet-spot and edge collision boxes, swing momentum impulse transfer. |
| `ACricketWicket` | `AActor` | 3 Stumps & 2 Bails, physical bail dislodgement, bowled/stumped detection. |
| `ACricket27Character` | `ACharacter` | Skeletal mesh, animation montage player, player skill ratings, bat/ball sockets. |
| `ACricketFieldingAI` | `AActor` | 11-player fielder placement slots, ball interception pursuit, catch & throw triggers. |
| `ACricketRulesManager` | `AActor` | Authoritative scoring engine: dots, runs, boundaries, extras, wickets, over tracking, target chasing. |
| `ACricketMatchManager` | `AActor` | Full match flow state machine: Toss -> Deliveries -> Innings transition -> Match conclusion. |
| `ACricketCameraManager` | `AActor` | Smooth camera director: Broadcast side view, Batting Pro, Bowling approach, Stump cam, Ball tracker. |

---

## 3. Physics & Ball Flight Simulation

The ball simulation combines Unreal's rigid body / projectile dynamics with customized aerodynamic forces calculated per tick:

### Drag Force Equation
$$\vec{F}_{\text{drag}} = -\frac{1}{2} C_d \rho A |\vec{v}| \vec{v}$$

### Magnus Swing & Drift Equation
$$\vec{F}_{\text{magnus}} = C_m (\vec{\omega} \times \vec{v})$$

- $\vec{\omega}$: Seam spin axis orientation and angular velocity.
- $\vec{v}$: Instantaneous ball velocity vector.
- $C_m$: Magnus coefficient modulated by bowler skill and seam uprightness.

---

## 4. Input Architecture (Desktop & Mobile)

```
                       ┌─────────────────────────┐
                       │  Input Context Manager  │
                       └────────────┬────────────┘
                                    │
            ┌───────────────────────┴───────────────────────┐
            ▼                                               ▼
┌───────────────────────────────┐               ┌───────────────────────────────┐
│     Windows PC (Keyboard/Mouse)│               │   Mobile (Touch / Virtual Pad) │
├───────────────────────────────┤               ├───────────────────────────────┤
│ • WASD / Arrows : Aim / Foot  │               │ • Left Joystick : Footwork    │
│ • Space / Left Click : Swing  │               │ • Swipe Velocity : Shot Power │
│ • Shift : Defensive Modifier  │               │ • Swipe Angle : Shot Direction│
│ • R : Run Between Wickets     │               │ • On-Screen Buttons : Run/Def │
└───────────────────────────────┘               └───────────────────────────────┘
```

---

## 5. Network Replication & Multiplayer Model

- **Authoritative Server**: The dedicated server or match host executes `ACricketRulesManager` and `ACricketBall` trajectory.
- **Replicated Properties**:
  - `ReplicatedMatchPhase`: Synchronizes pregame, run-up, delivery, in-air, and over transitions.
  - `ReplicatedTotalRuns`, `ReplicatedTotalWickets`, `ReplicatedTotalOvers`: Synchronizes scoreboard state across clients.
  - `ReplicatedCommentary`: Real-time commentary string updates.
- **Client Prediction**: Client-side batting swing triggers local responsive animation and sends timestamped input event to server for collision arbitration.

---

## 6. Rendering & Platform Scalability

| Parameter | Windows Desktop (Epic Preset) | Mobile (Android / iOS Scaled) |
|---|---|---|
| **Global Illumination** | Lumen Dynamic GI (`r.DynamicGlobalIlluminationMethod=1`) | Mobile Precomputed / Directional Light + Stationary Skylight |
| **Geometry** | Nanite Virtualized Geometry (`r.Nanite.ProjectEnabled=True`) | LOD meshes (LOD 0: ~15k tris, LOD 3: ~2k tris) |
| **Shadows** | Virtual Shadow Maps (VSM) | Cascaded Shadow Maps (CSM - 2 Cascades) |
| **Target Frame Rate** | 60 - 120 FPS | Stable 60 FPS (Android Vulkan / iOS Metal) |
| **Draw Call Budget** | $< 2500$ calls / frame | $< 400$ calls / frame |
