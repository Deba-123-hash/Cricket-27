# CRICKET27 — ASSET INVENTORY & PRODUCTION TRACKER

This document catalogs all assets required for CRICKET27, distinguishing between active prototype assets, production-ready assets, and planned additions.

---

## 1. 3D Meshes & Geometry

| Asset Name | Target Path | Status | Type | Notes |
|---|---|---|---|---|
| **Cricket Ball** | `Assets/Cricket/SM_CricketBall.fbx` | Prototype | Static Mesh | Radius: 3.6cm, Seam ridge normal map |
| **Cricket Bat** | `Assets/Cricket/SM_CricketBat.fbx` | Prototype | Static Mesh | Willow blade, cane handle with rubber grip |
| **Wicket Stumps & Bails** | `Assets/Cricket/SM_Wickets.fbx` | Prototype | Static Mesh | 3 Stumps (71cm) + 2 Bails (11cm) |
| **Cricket Pitch Strip** | `Assets/Stadiums/SM_Pitch_Turf.fbx` | Prototype | Static Mesh | 20.12m x 3.05m with popping & bowling creases |
| **Stadium Outer Arena** | `Assets/Stadiums/SM_Stadium_Bowl.fbx` | In Progress | Static Mesh | 45,000 seat tier bowl with concourses |
| **Stadium Light Towers** | `Assets/Stadiums/SM_FloodlightTower.fbx`| In Progress | Static Mesh | 4 Quad-mast floodlight towers |
| **LED Boundary Ribbons** | `Assets/Stadiums/SM_BoundaryRope.fbx` | Prototype | Static Mesh | 68m radius circular rope and foam cushions |
| **Dual Jumbotrons** | `Assets/Stadiums/SM_Scoreboard_Jumbotron.fbx`| In Progress | Static Mesh | Displays real-time UMG render target |
| **Player Base Mesh** | `Assets/Characters/SK_CricketPlayer_Male.fbx`| In Progress | Skeletal Mesh | UE5 Mannequin compatible skeleton (53 bones) |

---

## 2. Animation Catalog

| Animation Name | Slot / Type | Status | Source / Specification |
|---|---|---|---|
| **Anim_Idle_Stance** | Batting Idle | Planned | Relaxed stance, bat tapping crease rhythmically |
| **Anim_Forward_Defensive** | Batting Shot | Planned | Front foot stride, head over ball, angled blade |
| **Anim_Straight_Drive** | Batting Shot | Planned | High elbow, full face presentation down ground |
| **Anim_Cover_Drive** | Batting Shot | Planned | Leaning into pitch, wrist roll through extra cover |
| **Anim_Pull_Shot** | Batting Shot | Planned | Back foot pivot, horizontal bat pull behind square |
| **Anim_Hook_Shot** | Batting Shot | Planned | Swiveling pull against head-high delivery |
| **Anim_Sweep_Shot** | Batting Shot | Planned | Dropped rear knee, broom sweep to backward square |
| **Anim_Lofted_Six** | Batting Shot | Planned | Full extension lofted swing over long on |
| **Anim_Bowler_RunUp_Pace** | Bowling | Planned | 15-meter rhythmic sprint into leap |
| **Anim_Bowler_Release_Pace** | Bowling | Planned | High arm vertical release, follow-through stride |
| **Anim_Bowler_Spin_Delivery**| Bowling | Planned | Short 4-step approach, wrist snap release |
| **Anim_Fielder_Sprint** | Locomotion | Planned | Forward athletic sprint (6.5 m/s) |
| **Anim_Fielder_Slide_Pickup**| Fielding | Planned | Lateral knee slide, scoop ball, quick release |
| **Anim_Fielder_Catch_Chest** | Fielding | Planned | Two-handed cupped catch at chest height |
| **Anim_Fielder_Catch_Overhead**| Fielding | Planned | Leaping overhead catch on the boundary |
| **Anim_Celebration_Roar** | Celebration | Planned | Fist pump, bowler high-five sprint |

---

## 3. Materials & Shaders

| Material Name | Shader Model | Target Platform | Description |
|---|---|---|---|
| `M_Pitch_Turf_Master` | Subsurface / Default Lit | Desktop & Mobile | Dry compacted clay with patchy green grass blend |
| `M_Outfield_Grass_Fuzzy`| Default Lit (LOD Dither) | Desktop (Nanite) | Mowed lawn pattern stripes with specular sheen |
| `M_PlayerUniform_Master`| Cloth / Default Lit | Desktop & Mobile | Subsurface fabric weave with customizable team tints |
| `M_CricketLeather_Red` | Default Lit | Desktop & Mobile | Polished red lacquered leather with white stitched seam |
| `M_EnglishWillow_Bat` | Default Lit | Desktop & Mobile | Wood grain texture with fiberglass protective face |
| `M_Boundary_LED_Scroll` | Unlit (Emissive) | Desktop & Mobile | Animated sponsor ribbons and vibrant team branding |

---

## 4. Audio Effects (SFX & Ambience)

| Audio Cue | Format | Channels | Description |
|---|---|---|---|
| `SFX_Bat_Willow_Crack_01` | WAV (48kHz/24bit) | Mono 3D | Crisp sweet-spot willow strike with sharp transient |
| `SFX_Bat_Willow_Edge_01` | WAV (48kHz/24bit) | Mono 3D | Hollow glancing snick to slips |
| `SFX_Stumps_Shatter_01` | WAV (48kHz/24bit) | Mono 3D | Heavy timber crack with ringing bails dislodging |
| `SFX_Ball_Turf_Thud_01` | WAV (48kHz/24bit) | Mono 3D | Compacted soil impact thud on bounce |
| `AMB_Stadium_Day_Murmur` | WAV (48kHz/24bit) | Stereo Loop | Gentle 45,000 crowd hum with distant stadium echo |
| `AMB_Crowd_Roar_Boundary`| WAV (48kHz/24bit) | Stereo One-Shot| Explosive roar and horn honks on a four or six |
| `AMB_Crowd_Gasp_Appeal` | WAV (48kHz/24bit) | Stereo One-Shot| Sudden stadium-wide collective gasp on close lbw appeal |

---

## 5. UI & UMG Broadcast Overlays

| UI Widget | Type | Resolution Target | Components |
|---|---|---|---|
| `WBP_MainMenu` | Screen Canvas | 1920x1080 / 4K Scalable | Play, Team Selection, Settings, Career, Quit |
| `WBP_TossScreen` | Modal Overlay | 1920x1080 | Heads/Tails coin flip 3D mesh, Bat/Bowl choice |
| `WBP_BroadcastHUD_Score` | In-Game Overlay | Responsive Safe-Zone | Team badge, Total score, Overs, Striker/Bowler stats |
| `WBP_TimingFeedbackBar` | Floating Widget | Dynamic | Timing arc with Early, Perfect, Late indicators |
| `WBP_TouchControls_Mobile`| Screen Overlay | Touch Layout | Virtual stick, Swipe capture pad, Shot action buttons |
| `WBP_MatchSummary_Scorecard`| Screen Canvas | 1920x1080 | Full breakdown of Batting, Bowling, Extras, Run rates |
