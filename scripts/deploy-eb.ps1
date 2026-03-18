param(
  [string]$ApplicationName = "mysticalg-portfolio",
  [string]$EnvironmentName = "mysticalg-portfolio-live",
  [string]$Region = "eu-west-2"
)

$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$outputDir = Join-Path $root "output"
$zipPath = Join-Path $outputDir "portfolio-deploy-posix.zip"
$aws = Join-Path $env:ProgramFiles "Amazon\AWSCLIV2\aws.exe"

if (-not (Test-Path $outputDir)) {
  New-Item -ItemType Directory -Path $outputDir | Out-Null
}

$include = @(
  "package.json",
  "Procfile",
  "server.js",
  "README.md",
  ".ebignore",
  ".gitignore",
  ".ebextensions",
  ".platform",
  "public",
  "scripts"
)

Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

if (Test-Path $zipPath) {
  Remove-Item $zipPath -Force
}

$zip = [System.IO.Compression.ZipFile]::Open($zipPath, [System.IO.Compression.ZipArchiveMode]::Create)

try {
  foreach ($entry in $include) {
    $fullPath = Join-Path $root $entry

    if (Test-Path $fullPath -PathType Container) {
      Get-ChildItem $fullPath -Recurse -File | ForEach-Object {
        $relative = $_.FullName.Substring($root.Length + 1).Replace("\", "/")
        [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, $_.FullName, $relative, [System.IO.Compression.CompressionLevel]::Optimal) | Out-Null
      }
    } elseif (Test-Path $fullPath -PathType Leaf) {
      $relative = $entry.Replace("\", "/")
      [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, $fullPath, $relative, [System.IO.Compression.CompressionLevel]::Optimal) | Out-Null
    }
  }
}
finally {
  $zip.Dispose()
}

$version = "deploy-$(Get-Date -Format 'yyyyMMdd-HHmmss')"
$storage = (& $aws elasticbeanstalk create-storage-location --region $Region | ConvertFrom-Json).S3Bucket

& $aws s3 cp $zipPath "s3://$storage/$ApplicationName/$version.zip" | Out-Null

& $aws elasticbeanstalk create-application-version `
  --region $Region `
  --application-name $ApplicationName `
  --version-label $version `
  --source-bundle "S3Bucket=$storage,S3Key=$ApplicationName/$version.zip" `
  --process | Out-Null

do {
  Start-Sleep -Seconds 5
  $status = (& $aws elasticbeanstalk describe-application-versions `
    --region $Region `
    --application-name $ApplicationName `
    --version-labels $version | ConvertFrom-Json).ApplicationVersions[0].Status
} while ($status -eq "PROCESSING")

if ($status -ne "PROCESSED") {
  throw "Application version processing failed with status: $status"
}

& $aws elasticbeanstalk update-environment `
  --region $Region `
  --environment-name $EnvironmentName `
  --version-label $version | Out-Null

Write-Output "Deployed version $version to $EnvironmentName in $Region"
