@echo off
set TYPESCRIT_ROOT=..\..\Aki\Source\Client\TypeScript
set UE_TYPE_ROOT=%TYPESCRIT_ROOT%\Typing\ue

echo %TYPESCRIT_ROOT%
echo %SRC_ROOT%
echo %UE_TYPE_ROOT%

@REM RemoveAll
del %UE_TYPE_ROOT%\*.* /F /Q

@REM Get latest typing
cd Typing
git p4 sync
git p4 rebase
cd ..

@REM Generate
node merge_ue_type.js Typing/ue %UE_TYPE_ROOT%\index.d.ts
