# ==============================================================================
# dsh-clawhub-multiskill Install Script (Windows PowerShell)
# GitHub: https://github.com/gsmqmwq1/dsh-clawhub-multiskill
# Author: gsmqmwq1
# ==============================================================================

$ErrorActionPreference = "Stop"

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host ">> Installing DeepSeek Harness Plugin: dsh-clawhub-multiskill" -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Cyan

# 1. Check DeepSeek Harness profile
$dshRoot = "$HOME\.dsh"
$desktopDir = "$dshRoot\profiles\desktop"
$pluginsDir = "$dshRoot\plugins"
$targetPluginDir = "$pluginsDir\dsh-clawhub-multiskill"
$pkgJsonPath = "$desktopDir\package.json"
$nodeModulesDir = "$desktopDir\node_modules"
$junctionPath = "$nodeModulesDir\dsh-clawhub-multiskill"

if (-not (Test-Path $desktopDir)) {
    Write-Host "[Error] Cannot find DeepSeek Harness desktop dir: $desktopDir" -ForegroundColor Red
    Write-Host "Please make sure DeepSeek Harness has been installed and run at least once." -ForegroundColor Yellow
    exit 1
}

# 2. Ensure plugins dir exists
if (-not (Test-Path $pluginsDir)) {
    New-Item -ItemType Directory -Path $pluginsDir -Force | Out-Null
}

# 3. Clone or pull repo
if (-not (Test-Path $targetPluginDir)) {
    Write-Host "[1/3] Cloning repository from GitHub..." -ForegroundColor Yellow
    git clone https://github.com/gsmqmwq1/dsh-clawhub-multiskill.git $targetPluginDir
} else {
    Write-Host "[1/3] Plugin directory exists, pulling latest updates..." -ForegroundColor Yellow
    Push-Location $targetPluginDir
    git pull origin main
    Pop-Location
}

# 4. Create Junction link
if (-not (Test-Path $nodeModulesDir)) {
    New-Item -ItemType Directory -Path $nodeModulesDir -Force | Out-Null
}

if (-not (Test-Path $junctionPath)) {
    Write-Host "[2/3] Creating module junction link..." -ForegroundColor Yellow
    New-Item -ItemType Junction -Path $junctionPath -Target $targetPluginDir -Force | Out-Null
} else {
    Write-Host "[2/3] Module junction already linked." -ForegroundColor Green
}

# 5. Register in desktop/package.json
if (Test-Path $pkgJsonPath) {
    Write-Host "[3/3] Registering plugin in DeepSeek Harness package.json..." -ForegroundColor Yellow
    $jsonContent = Get-Content $pkgJsonPath -Raw -Encoding UTF8 | ConvertFrom-Json

    if (-not $jsonContent.dependencies) {
        $jsonContent | Add-Member -MemberType NoteProperty -Name "dependencies" -Value (New-Object PSObject)
    }
    if (-not $jsonContent.dependencies."dsh-clawhub-multiskill") {
        $jsonContent.dependencies | Add-Member -MemberType NoteProperty -Name "dsh-clawhub-multiskill" -Value "1.0.0" -Force
    }

    if (-not $jsonContent.dsh) {
        $jsonContent | Add-Member -MemberType NoteProperty -Name "dsh" -Value (New-Object PSObject)
    }
    if (-not $jsonContent.dsh.profile) {
        $jsonContent.dsh | Add-Member -MemberType NoteProperty -Name "profile" -Value (New-Object PSObject)
    }
    if (-not $jsonContent.dsh.profile.bundles) {
        $jsonContent.dsh.profile | Add-Member -MemberType NoteProperty -Name "bundles" -Value @() -Force
    }

    $bundleList = [System.Collections.ArrayList]@($jsonContent.dsh.profile.bundles)
    if (-not $bundleList.Contains("dsh-clawhub-multiskill")) {
        $bundleList.Add("dsh-clawhub-multiskill") | Out-Null
        $jsonContent.dsh.profile.bundles = $bundleList
    }

    $newJson = $jsonContent | ConvertTo-Json -Depth 10
    [System.IO.File]::WriteAllText($pkgJsonPath, $newJson, [System.Text.Encoding]::UTF8)
    Write-Host ">> Registration completed successfully!" -ForegroundColor Green
}

Write-Host "==========================================================" -ForegroundColor Green
Write-Host "SUCCESS: Installation completed!" -ForegroundColor Cyan
Write-Host "Restart DeepSeek Harness or press Ctrl + R to enjoy!" -ForegroundColor White
Write-Host "  - Left sidebar: Skill Market entry" -ForegroundColor White
Write-Host "  - Composer bottom-right: Multi-Skill popover launcher" -ForegroundColor White
Write-Host "==========================================================" -ForegroundColor Green
