ignore_files=(
    '../Core/*'
    '../Game/*'
    'react-umg\.ts'
)

regx=$(IFS=\| ; echo "${ignore_files[*]}")

madge -c --warning --extensions ts,tsx -x "$regx" ../Src/UniverseEditor