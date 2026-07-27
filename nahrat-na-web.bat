@echo off
chcp 65001 >nul
cd /d "%~dp0"

rem ============================================================
rem  Nahrani webu na ostry server (FORPSI FTP) pres WinSCP.
rem  Nahrava POSLEDNI COMMITNUTOU verzi (to, co je na GitHubu).
rem  Pred prvnim pouzitim je potreba:
rem    1) nainstalovat WinSCP (winscp.net),
rem    2) v WinSCP vytvorit a ulozit pripojeni se jmenem "forpsi-web"
rem       (heslo se uklada jen ve WinSCP, v tomto skriptu neni).
rem ============================================================

rem --- Nastaveni (upravte podle skutecnosti u FORPSI) ---
set PRIPOJENI=forpsi-web
set VZDALENA_SLOZKA=/WWW

rem --- Najdi git ---
set GIT="C:\Program Files\Git\cmd\git.exe"
if not exist %GIT% set GIT=git

rem --- Najdi WinSCP ---
set WINSCP="C:\Program Files (x86)\WinSCP\winscp.com"
if not exist %WINSCP% set WINSCP="C:\Program Files\WinSCP\winscp.com"
if not exist %WINSCP% goto chybawinscp

echo ============================================
echo   Nahrani webu na hrackyroztoky.cz
echo ============================================
echo.

rem --- 1) Kontrola: vsechno musi byt commitnute ---
%GIT% status --porcelain > "%TEMP%\gitstav.txt"
set VELIKOST=1
for %%A in ("%TEMP%\gitstav.txt") do set VELIKOST=%%~zA
del "%TEMP%\gitstav.txt" >nul 2>&1
if not "%VELIKOST%"=="0" goto neulozene

rem --- 2) Potvrzeni ---
echo Na server se nahraje posledni ulozena verze webu.
echo Soubory, ktere v nove verzi nejsou, se ze serveru SMAZOU.
echo.
set /p ANO=Pokracovat? (A = ano, cokoli jineho = ne):
if /i not "%ANO%"=="A" goto konecbez

rem --- 3) Sestaveni docasne slozky s obsahem webu ---
echo.
echo [1/2] Pripravuji soubory webu...
set STAGE=%TEMP%\web-nasazeni
if exist "%STAGE%" rmdir /s /q "%STAGE%"
mkdir "%STAGE%"
%GIT% archive --format=zip -o "%TEMP%\web-nasazeni.zip" HEAD
if errorlevel 1 goto chybagit
tar -xf "%TEMP%\web-nasazeni.zip" -C "%STAGE%"
if errorlevel 1 goto chybagit
del "%TEMP%\web-nasazeni.zip" >nul 2>&1

rem Pracovni soubory, ktere na verejny web nepatri:
del "%STAGE%\editor.html" >nul 2>&1
del "%STAGE%\nahrat-na-github.bat" >nul 2>&1
del "%STAGE%\nahrat-na-web.bat" >nul 2>&1
del "%STAGE%\CLAUDE.md" >nul 2>&1
del "%STAGE%\README.md" >nul 2>&1
del "%STAGE%\.gitignore" >nul 2>&1

rem --- 4) Synchronizace pres WinSCP ---
echo [2/2] Nahravam na server (WinSCP)...
(
  echo option batch abort
  echo option confirm off
  echo open %PRIPOJENI%
  echo lcd "%STAGE%"
  echo cd %VZDALENA_SLOZKA%
  echo synchronize remote -mirror -delete
  echo exit
) > "%TEMP%\winscp-nahrani.txt"

%WINSCP% /script="%TEMP%\winscp-nahrani.txt" /log="%TEMP%\winscp-log.txt"
if errorlevel 1 goto chybaftp

rmdir /s /q "%STAGE%" >nul 2>&1
echo.
echo --------------------------------------------
echo Hotovo! Web je nahrany. Zkontrolujte ho v prohlizeci:
echo https://www.hrackyroztoky.cz/
pause
exit /b 0

:neulozene
echo POZOR: Mate neulozene zmeny. Na web by se nahrala starsi verze.
echo Nejdrive spustte nahrat-na-github.bat a pak tento skript znovu.
pause
exit /b 1

:chybawinscp
echo POZOR: Nenasel jsem program WinSCP.
echo Nainstalujte ho zdarma z adresy https://winscp.net a zkuste to znovu.
pause
exit /b 1

:chybagit
echo POZOR: Nepodarilo se pripravit soubory webu (git/tar).
echo Napiste o tom Claudovi, pomuze to vyresit.
pause
exit /b 1

:chybaftp
echo.
echo --------------------------------------------
echo POZOR: Nahrani na server se nepovedlo.
echo Nejcastejsi priciny:
echo  - v WinSCP jeste neni ulozene pripojeni se jmenem "%PRIPOJENI%",
echo  - spatna vzdalena slozka (ted: %VZDALENA_SLOZKA%),
echo  - vypadek pripojeni k internetu.
echo Podrobnosti jsou v souboru: %TEMP%\winscp-log.txt
echo Kdyztak o tom napiste Claudovi.
pause
exit /b 1

:konecbez
echo.
echo Nahrani zruseno, nic se nezmenilo.
pause
exit /b 0
