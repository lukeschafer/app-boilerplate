[CmdletBinding()]
param (
    [Parameter(Mandatory=$false, Position=0)]
    [string]$AppName,

    [Parameter(Mandatory=$false)]
    [switch]$Public = $false
)

# 1. Validate argument
if ([string]::IsNullOrWhiteSpace($AppName)) {
    Write-Host "[ERROR] App name is required." -ForegroundColor Red
    Write-Host "Usage: .\create-app.ps1 <new-app-name> [-Public]" -ForegroundColor Yellow
    Write-Host "Example: .\create-app.ps1 lumina-docs" -ForegroundColor Cyan
    exit 1
}

# Clean slug formatting
$Slug = $AppName.ToLower() -replace '[^a-z0-9]+', '-' -replace '^-|-$', ''
$RepoOwner = "lukeschafer"
$BoilerplateRepo = "https://github.com/$RepoOwner/app-boilerplate.git"
$NewRepoUrl = "https://github.com/$RepoOwner/$Slug.git"

Write-Host "====================================================" -ForegroundColor Cyan
Write-Host "  MicroSaaS New App Provisioner ($Slug)" -ForegroundColor Cyan
Write-Host "====================================================" -ForegroundColor Cyan

# 2. Create GitHub repository using GitHub CLI ('gh')
if (Get-Command gh -ErrorAction SilentlyContinue) {
    Write-Host "[INFO] Creating GitHub repository '$RepoOwner/$Slug'..." -ForegroundColor Green
    $VisibilityFlag = if ($Public) { "--public" } else { "--private" }
    gh repo create "$RepoOwner/$Slug" $VisibilityFlag --description "MicroSaaS application built from app-boilerplate"
} else {
    Write-Host "[WARN] GitHub CLI ('gh') is not installed or not in PATH." -ForegroundColor Yellow
    Write-Host "[INFO] Create 'https://github.com/$RepoOwner/$Slug' on GitHub if it doesn't exist yet." -ForegroundColor Yellow
}

# 3. Clone boilerplate repository
Write-Host "[INFO] Cloning boilerplate from $BoilerplateRepo into './$Slug'..." -ForegroundColor Green
git clone $BoilerplateRepo $Slug
if (-not (Test-Path $Slug)) {
    Write-Host "[ERROR] Git clone failed." -ForegroundColor Red
    exit 1
}

# 4. Set working directory and configure remotes
Set-Location $Slug

Write-Host "[INFO] Setting git remotes..." -ForegroundColor Green
git remote set-url origin $NewRepoUrl
git remote add upstream $BoilerplateRepo

# 5. Push code to new origin
Write-Host "[INFO] Pushing main branch to new origin repository..." -ForegroundColor Green
git push -u origin main

Write-Host "====================================================" -ForegroundColor Green
Write-Host "[SUCCESS] Repository '$RepoOwner/$Slug' provisioned successfully!" -ForegroundColor Green
Write-Host "  - Remote 'origin'   -> $NewRepoUrl" -ForegroundColor Cyan
Write-Host "  - Remote 'upstream' -> $BoilerplateRepo" -ForegroundColor Cyan
Write-Host "====================================================" -ForegroundColor Green

# 6. Install dependencies & launch interactive setup wizard
Write-Host "[INFO] Installing npm dependencies..." -ForegroundColor Green
npm install

Write-Host "[INFO] Launching application configuration wizard..." -ForegroundColor Green
npm run setup
