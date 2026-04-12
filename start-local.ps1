# Servidor local do IRIA / Symfony Landing
# Deixe esta janela aberta enquanto testa no browser.

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot
$landing = Join-Path $PSScriptRoot "Landing"

function Test-DockerEngine {
    try { docker info 2>$null | Out-Null; return $true } catch { return $false }
}

if (Get-Command php -ErrorAction SilentlyContinue) {
    Set-Location $landing
    if (-not (Test-Path "vendor\autoload.php")) {
        if (-not (Get-Command composer -ErrorAction SilentlyContinue)) {
            Write-Host "ERRO: Falta Composer para instalar dependencias. https://getcomposer.org" -ForegroundColor Red
            exit 1
        }
        composer install --no-interaction
    }
    Write-Host ""
    Write-Host "  >>> http://127.0.0.1:8000/" -ForegroundColor Cyan
    Write-Host "  (PHP) Feche com Ctrl+C" -ForegroundColor DarkGray
    Write-Host ""
    php -S 127.0.0.1:8000 -t public
    exit 0
}

if (Get-Command docker -ErrorAction SilentlyContinue) {
    docker info 2>$null | Out-Null
    if ($LASTEXITCODE -ne 0) {
        Write-Host "ERRO: Docker Desktop nao esta a correr." -ForegroundColor Red
        Write-Host "  Abra o Docker Desktop, espere ficar pronto e volte a executar este script." -ForegroundColor Yellow
        Write-Host "  Ou instale PHP 8.2+ e Composer e execute de novo (usa porta 8000)." -ForegroundColor Yellow
        exit 1
    }
    Write-Host ""
    Write-Host "  >>> http://127.0.0.1:8080/" -ForegroundColor Cyan
    Write-Host "  (Docker) Feche com Ctrl+C" -ForegroundColor DarkGray
    Write-Host ""
    docker compose up --build
    exit $LASTEXITCODE
}

Write-Host "Instale PHP 8.2+ e Composer, ou Docker Desktop." -ForegroundColor Red
exit 1
