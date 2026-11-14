<#
.SYNOPSIS
    Generates Visual Studio project files for CRICKET27 using UnrealBuildTool.
.DESCRIPTION
    Searches common Unreal Engine install paths, locates UnrealBuildTool or
    UnrealVersionSelector, and generates Cricket27.sln.
#>

$ProjectDir = Split-Path -Parent $PSScriptRoot
$UProjectPath = Join-Path $ProjectDir "Cricket27.uproject"

Write-Host "============================================================" -ForegroundColor Cyan
Write-Host "CRICKET27 - UNREAL ENGINE PROJECT GENERATOR" -ForegroundColor Cyan
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host "Project File: $UProjectPath"

# Search for UE5 installs
$EngineCandidates = @(
    "C:\Program Files\Epic Games\UE_5.5",
    "C:\Program Files\Epic Games\UE_5.4",
    "C:\Program Files\Epic Games\UE_5.3",
    "D:\Program Files\Epic Games\UE_5.5",
    "D:\Program Files\Epic Games\UE_5.4",
    "D:\Epic Games\UE_5.5",
    "D:\Epic Games\UE_5.4"
)

$FoundEngine = $null
foreach ($Path in $EngineCandidates) {
    if (Test-Path $Path) {
        $FoundEngine = $Path
        break
    }
}

if ($FoundEngine) {
    Write-Host "Found Unreal Engine at: $FoundEngine" -ForegroundColor Green
    $UBT = Join-Path $FoundEngine "Engine\Binaries\DotNET\UnrealBuildTool\UnrealBuildTool.exe"
    if (Test-Path $UBT) {
        Write-Host "Running UnrealBuildTool to generate Visual Studio project files..." -ForegroundColor Yellow
        & $UBT -projectfiles -project="$UProjectPath" -game -engine
    }
} else {
    Write-Host "`n[NOTICE] Unreal Engine 5 installation not detected in default directories." -ForegroundColor Yellow
    Write-Host "Please install Unreal Engine 5.4 or 5.5 from Epic Games Launcher:" -ForegroundColor White
    Write-Host "  1. Open Epic Games Launcher -> Unreal Engine -> Library" -ForegroundColor White
    Write-Host "  2. Install Unreal Engine 5.4 or 5.5" -ForegroundColor White
    Write-Host "  3. Right-click Cricket27.uproject and choose 'Generate Visual Studio project files'" -ForegroundColor White
}
