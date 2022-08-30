cd ..
tsc-watch --onSuccess "node ../Content/Aki/JavaScript/UniverseEditor/EditorCommon/NodeJsEntries/UEDependenceCheckEntry.js ./Src/UniverseEditor && node ./Tool/send_editor_command.js RestartEditor"

pause