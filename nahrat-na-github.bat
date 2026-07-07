@echo off
chcp 65001 >nul
cd /d "%~dp0"

rem Najdi git: nejdriv obvykla cesta, jinak zkus PATH
set GIT="C:\Program Files\Git\cmd\git.exe"
if not exist %GIT% set GIT=git

echo ============================================
echo   Nahrani zmen webu na GitHub
echo ============================================
echo.
echo Zmenene soubory:
%GIT% status --short
echo.

set /p msg=Kratky popis zmeny (nebo dejte Enter):
if "%msg%"=="" set msg=Uprava webu %DATE%

echo.
%GIT% add -A
%GIT% commit -m "%msg%"
%GIT% push

echo.
echo --------------------------------------------
echo Hotovo. Okno muzete zavrit.
pause
