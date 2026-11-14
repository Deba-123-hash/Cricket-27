# CRICKET27

> **YOUR GAME. YOUR TEAM. YOUR LEGACY.**

CRICKET27 is an original, next-generation 3D cricket simulation game built from the ground up inside **Unreal Engine 5** using C++ and Blueprints. It is engineered to deliver a responsive, broadcast-quality cricket experience across Windows PC, Android, and iOS.

---

## 🎮 Project Highlights

- **Game Engine**: Unreal Engine 5 (UE 5.4+ / 5.5+)
- **Architecture**: Core gameplay logic, ball physics, and rules engine in **C++**; visuals, animations, UI, and dynamic cameras in **Blueprints & UMG**.
- **Physics**: Authentic cricket ball simulation (0.16kg, seam orientation, pitch bounce restitution, Magnus effect for swing and spin).
- **Match Gameplay**: Playable 3-over rapid prototype format with full cricket rules (dots, singles, boundaries, bowled, caught, LBW, run-outs, wides, no-balls, and free hits).
- **Control Schemes**: Full desktop keyboard & mouse controls alongside an adaptive mobile touch & swipe interface.
- **Platforms**: Windows Desktop (DX12 / Lumen / Nanite), Android (Vulkan / ASTC), and iOS (Metal).
- **Multiplayer Ready**: Authoritative server architecture with replicated GameState and match synchronization.

---

## 📁 Repository Structure

```
Cricket27/
├── Cricket27.uproject             # Unreal Engine 5 project descriptor
├── Config/                        # Engine, Game, and Input configuration
│   ├── DefaultEngine.ini
│   ├── DefaultGame.ini
│   └── DefaultInput.ini
├── Source/                        # C++ source code
│   ├── Cricket27.Target.cs
│   ├── Cricket27Editor.Target.cs
│   └── Cricket27/
│       ├── Cricket27.Build.cs
│       ├── Cricket27.h / .cpp
│       ├── Public/                # C++ class headers
│       │   ├── CricketTypes.h
│       │   ├── CricketBall.h
│       │   ├── CricketBat.h
│       │   ├── CricketWicket.h
│       │   ├── Cricket27Character.h
│       │   ├── CricketFieldingAI.h
│       │   ├── CricketRulesManager.h
│       │   ├── CricketMatchManager.h
│       │   ├── CricketCameraManager.h
│       │   ├── Cricket27PlayerController.h
│       │   ├── Cricket27GameMode.h
│       │   ├── Cricket27GameState.h
│       │   └── Cricket27GameInstance.h
│       ├── Private/               # C++ class implementations
│       └── Tests/                 # UE Automation Tests
├── Content/                       # Unreal Engine binary uassets & maps
│   └── Cricket27/
│       ├── Blueprints/
│       ├── Maps/
│       ├── UI/
│       ├── Audio/
│       ├── Characters/
│       └── Stadium/
├── Assets/                        # Raw source DCC assets (tracked by Git LFS)
│   ├── Characters/
│   ├── Stadiums/
│   ├── Cricket/
│   ├── Animations/
│   ├── Materials/
│   ├── Textures/
│   ├── Audio/
│   ├── UI/
│   └── VFX/
├── Tests/                         # Automated tests & verification suites
│   └── TestCricketScoring.py
├── Scripts/                       # Validation & build scripts
│   ├── validate_project.py
│   └── generate_project_files.ps1
└── Docs/                          # Production documentation
    ├── GAME_DESIGN_DOCUMENT.md
    ├── TECHNICAL_ARCHITECTURE.md
    ├── DEVELOPMENT_PROGRESS.md
    ├── ASSET_INVENTORY.md
    └── TESTING_CHECKLIST.md
```

---

## 🚀 Getting Started

### Prerequisites

1. **Unreal Engine 5.4 or 5.5**:
   - Download and install from the **Epic Games Launcher** (`https://store.epicgames.com/`).
2. **Visual Studio Build Tools 2022 / 2026**:
   - Workloads: *Desktop development with C++*, *MSVC v143+ toolset*, *Windows 10/11 SDK*, *Unreal Engine IDE Support*.
3. **Git & Git LFS**:
   - Ensure `git lfs install` has been run.

### Generating Project Solution & Building

1. Right-click `Cricket27.uproject` and select **"Generate Visual Studio project files"**.
   - Or run `powershell Scripts/generate_project_files.ps1`.
2. Open `Cricket27.sln` in Visual Studio or VS Code.
3. Select **Development Editor | Win64** and compile.
4. Open `Cricket27.uproject` inside Unreal Editor.

### Running Automated Scoring Tests

```bash
python Tests/TestCricketScoring.py
```

---

## 🏏 Gameplay Controls

### Desktop Controls

| Action | Key / Input |
|---|---|
| **Footwork / Aim Direction** | W / A / S / D or Arrow Keys |
| **Bat Swing (Timing)** | Spacebar / Left Mouse Click |
| **Defensive Block** | Shift + Spacebar |
| **Lofted Shot (Aggressive)** | Spacebar + Direction |
| **Bowling Pitch Marker** | Mouse Cursor / Movement Keys |
| **Delivery Release** | Spacebar / Left Click on Release Window |
| **Run Between Wickets** | R |
| **Pause Menu** | Escape |

### Mobile Controls

- **Direction Joystick**: Left thumb joystick to position batsman feet or aim bowler delivery.
- **Timing & Power Swipe**: Right thumb dynamic swipe (Swipe direction controls placement, swipe length controls elevation and power).
- **One-Touch Actions**: On-screen buttons for *Defensive*, *Lofted*, *Running Between Wickets*.

---

## 📄 License & Attribution

CRICKET27 is an original gaming property developed by the CRICKET27 game development team. All code, art directions, characters, and stadiums are original.
