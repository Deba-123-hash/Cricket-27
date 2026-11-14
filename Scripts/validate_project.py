"""
CRICKET27 Project & C++ Architecture Integrity Validator
Verifies project file structure, Unreal Engine descriptor, C++ headers,
configuration files, and executes the scoring engine test suite.
"""

import os
import sys
import json
import subprocess

PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

REQUIRED_FILES = [
    "Cricket27.uproject",
    "Source/Cricket27.Target.cs",
    "Source/Cricket27Editor.Target.cs",
    "Source/Cricket27/Cricket27.Build.cs",
    "Source/Cricket27/Cricket27.h",
    "Source/Cricket27/Cricket27.cpp",
    "Source/Cricket27/Public/CricketTypes.h",
    "Source/Cricket27/Public/CricketBall.h",
    "Source/Cricket27/Private/CricketBall.cpp",
    "Source/Cricket27/Public/CricketBat.h",
    "Source/Cricket27/Private/CricketBat.cpp",
    "Source/Cricket27/Public/CricketWicket.h",
    "Source/Cricket27/Private/CricketWicket.cpp",
    "Source/Cricket27/Public/Cricket27Character.h",
    "Source/Cricket27/Private/Cricket27Character.cpp",
    "Source/Cricket27/Public/CricketFieldingAI.h",
    "Source/Cricket27/Private/CricketFieldingAI.cpp",
    "Source/Cricket27/Public/CricketRulesManager.h",
    "Source/Cricket27/Private/CricketRulesManager.cpp",
    "Source/Cricket27/Public/CricketMatchManager.h",
    "Source/Cricket27/Private/CricketMatchManager.cpp",
    "Source/Cricket27/Public/CricketCameraManager.h",
    "Source/Cricket27/Private/CricketCameraManager.cpp",
    "Source/Cricket27/Public/Cricket27PlayerController.h",
    "Source/Cricket27/Private/Cricket27PlayerController.cpp",
    "Source/Cricket27/Public/Cricket27GameMode.h",
    "Source/Cricket27/Private/Cricket27GameMode.cpp",
    "Source/Cricket27/Public/Cricket27GameState.h",
    "Source/Cricket27/Private/Cricket27GameState.cpp",
    "Source/Cricket27/Public/Cricket27GameInstance.h",
    "Source/Cricket27/Private/Cricket27GameInstance.cpp",
    "Config/DefaultEngine.ini",
    "Config/DefaultGame.ini",
    "Config/DefaultInput.ini",
    "README.md",
    "Docs/GAME_DESIGN_DOCUMENT.md",
    "Docs/TECHNICAL_ARCHITECTURE.md",
    "Docs/DEVELOPMENT_PROGRESS.md",
    "Docs/ASSET_INVENTORY.md",
    "Docs/TESTING_CHECKLIST.md"
]

def check_file_integrity():
    print("=" * 65)
    print("CRICKET27 - PROJECT INTEGRITY AUDIT")
    print("=" * 65)

    missing = []
    for rel_path in REQUIRED_FILES:
        full_path = os.path.join(PROJECT_ROOT, rel_path)
        if not os.path.exists(full_path):
            missing.append(rel_path)
            print(f" [FAIL] Missing file: {rel_path}")
        else:
            size_kb = os.path.getsize(full_path) / 1024.0
            print(f" [OK]   {rel_path:<48} ({size_kb:5.1f} KB)")

    if missing:
        print(f"\nAudit FAILED: {len(missing)} files missing.")
        return False

    print("\nAll required core files and C++ architecture classes exist!")
    return True

def validate_uproject():
    uproject_path = os.path.join(PROJECT_ROOT, "Cricket27.uproject")
    try:
        with open(uproject_path, "r", encoding="utf-8") as f:
            data = json.load(f)
        assert data.get("FileVersion") == 3, "Invalid FileVersion"
        assert len(data.get("Modules", [])) > 0, "No Modules specified"
        assert data["Modules"][0]["Name"] == "Cricket27", "Module name mismatch"
        print(" [OK]   Cricket27.uproject JSON format valid.")
        return True
    except Exception as e:
        print(f" [FAIL] uproject validation error: {e}")
        return False

def run_scoring_test_suite():
    test_script = os.path.join(PROJECT_ROOT, "Tests", "TestCricketScoring.py")
    print("\nExecuting Scoring Engine Automated Tests...")
    res = subprocess.run([sys.executable, test_script], capture_output=True, text=True)
    print(res.stdout)
    if res.returncode != 0:
        print(f"Tests FAILED:\n{res.stderr}")
        return False
    return True

if __name__ == "__main__":
    ok1 = check_file_integrity()
    ok2 = validate_uproject()
    ok3 = run_scoring_test_suite()

    if ok1 and ok2 and ok3:
        print("\n" + "=" * 65)
        print("CRICKET27 SYSTEM VERIFICATION: 100% HEALTHY & READY")
        print("=" * 65)
        sys.exit(0)
    else:
        print("\nCRICKET27 SYSTEM VERIFICATION: ISSUES FOUND")
        sys.exit(1)
