@echo off

cd %~dp0

node ../../Content/Aki/JavaScript/UniverseEditor/EditorCommon/NodeJsEntries/UEDependenceCheckEntry.js ../Src/UniverseEditor
node ./send_editor_command.js "{\"Type\": \"RestartEditor\"}"
