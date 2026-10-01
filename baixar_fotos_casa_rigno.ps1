
$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Drawing

$dest = Join-Path (Get-Location) "src\assets\rigno"
$temp = Join-Path $env:TEMP "rigno_site_assets"
New-Item -ItemType Directory -Force -Path $dest | Out-Null
New-Item -ItemType Directory -Force -Path $temp | Out-Null

function Download-File {
    param([string]$Url, [string]$Path)
    Write-Host "Baixando: $Url"
    Invoke-WebRequest -Uri $Url -OutFile $Path -UseBasicParsing -Headers @{
        "User-Agent" = "Mozilla/5.0"
        "Referer" = "https://restaurantguru.com.br/"
    }
}

function Crop-Image {
    param(
        [string]$Source,
        [string]$Output,
        [double]$X,
        [double]$Y,
        [double]$W,
        [double]$H
    )

    $img = [System.Drawing.Image]::FromFile($Source)
    try {
        # coordenadas proporcionais (0-1)
        $rx = [int]($img.Width * $X)
        $ry = [int]($img.Height * $Y)
        $rw = [int]($img.Width * $W)
        $rh = [int]($img.Height * $H)

        if ($rx + $rw -gt $img.Width)  { $rw = $img.Width - $rx }
        if ($ry + $rh -gt $img.Height) { $rh = $img.Height - $ry }

        $bmp = New-Object System.Drawing.Bitmap $rw, $rh
        $g = [System.Drawing.Graphics]::FromImage($bmp)

        try {
            $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
            $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
            $g.DrawImage(
                $img,
                (New-Object System.Drawing.Rectangle 0, 0, $rw, $rh),
                (New-Object System.Drawing.Rectangle $rx, $ry, $rw, $rh),
                [System.Drawing.GraphicsUnit]::Pixel
            )
            $bmp.Save($Output, [System.Drawing.Imaging.ImageFormat]::Jpeg)
        }
        finally {
            $g.Dispose()
            $bmp.Dispose()
        }
    }
    finally {
        $img.Dispose()
    }
}

# Fontes públicas da Casa Rigno (fotos reais publicadas/espelhadas em listagens locais)
$src1 = Join-Path $temp "food.jpg"
$src2 = Join-Path $temp "meals.jpg"
$src3 = Join-Path $temp "dishes.jpg"
$src4 = Join-Path $temp "cheese.jpg"
$src5 = Join-Path $temp "google-interior.jpg"

Download-File "https://img.restaurantguru.com/c3e5-Restaurant-Casa-Rigno-food.jpg" $src1
Download-File "https://img.restaurantguru.com/ce02-Restaurant-Casa-Rigno-meals.jpg" $src2
Download-File "https://img.restaurantguru.com/cc57-Restaurant-Casa-Rigno-dishes.jpg" $src3
Download-File "https://img.restaurantguru.com/cb7d-Restaurant-Casa-Rigno-cheese-plate.jpg" $src4

# Foto do Google/Maps espelhada em listagem da Casa Rigno
try {
    Download-File "https://lh3.googleusercontent.com/p/AF1QipPE6C7GVHnHD7DKDsLCJITCNfm0nfVwO-dDSIXe=w1600-h1200-k-no" $src5
}
catch {
    Write-Warning "A foto direta do Google não pôde ser baixada. Vou continuar com as demais."
}

# 01 - prato / café da manhã
Crop-Image $src1 (Join-Path $dest "01-cafe-da-manha-presunto-omelete.jpg") 0.00 0.00 0.50 0.50

# 02 - iced latte
Crop-Image $src1 (Join-Path $dest "02-iced-latte-casa-rigno.jpg") 0.50 0.00 0.50 0.50

# 03 - brunch ao ar livre
Crop-Image $src1 (Join-Path $dest "03-brunch-mesa-casa-rigno.jpg") 0.00 0.50 0.50 0.50

# 04 - avocado toast
Crop-Image $src2 (Join-Path $dest "04-avocado-toast.jpg") 0.00 0.50 0.50 0.50

# 05 - mesa de brunch completa
Crop-Image $src2 (Join-Path $dest "05-mesa-brunch-completa.jpg") 0.50 0.50 0.50 0.50

# 06 - pães artesanais (corta a parte inferior com ilustração)
Crop-Image $src3 (Join-Path $dest "06-paes-artesanais.jpg") 0.00 0.00 0.50 0.78

# 07 - café + waffle + sanduíches
Crop-Image $src3 (Join-Path $dest "07-cafe-waffle-brunch.jpg") 0.50 0.00 0.50 1.00

# 08 - interior / produtos artesanais
Crop-Image $src4 (Join-Path $dest "08-interior-produtos-artesanais.jpg") 0.00 0.00 0.66 0.50

# 09 - café da manhã com presunto e sucos
Crop-Image $src4 (Join-Path $dest "09-cafe-da-manha-sucos.jpg") 0.66 0.00 0.34 0.50

# 10 - ambiente atual do Google, se disponível; fallback para outra foto real
if (Test-Path $src5) {
    Copy-Item $src5 (Join-Path $dest "10-ambiente-casa-rigno-google.jpg") -Force
} else {
    Crop-Image $src4 (Join-Path $dest "10-cafe-e-pastelaria.jpg") 0.00 0.50 0.34 0.50
}

Write-Host ""
Write-Host "Concluído." -ForegroundColor Green
Write-Host "As imagens estão em:"
Write-Host $dest -ForegroundColor Cyan
Write-Host ""
Get-ChildItem $dest | Select-Object Name, Length
