import fs from 'fs';
import path from 'path';

function parseFile(file) {
    const fileContent = fs.readFileSync(file).toString();
    return fileContent;
}

/**
 * @param {string} dir
 * @returns {string[]}
 */
function getAllFiles(dir) {
    const indexPath = path.join(dir, 'index.d.ts');
    const indexContext = fs.readFileSync(indexPath).toString();
    const lines = indexContext.split('\r\n');
    const result = [];
    lines.forEach((line, id) => {
        const start = line.indexOf('"');
        const end = line.indexOf('"', start + 1);
        if (end - start > 0) {
            result.push(line.slice(start + 1, end));
        }
    });
    return result;
}

/**
 * @param {string} dir 
 * @param {string} dst 
 */
function mergeUeType(dir, dst) {
    const files = getAllFiles(dir);
    let results = [];
    files.forEach(filename => {
        const filepath = path.join(dir, filename);
        if (fs.existsSync(filepath)) {
            results.push(parseFile(filepath));
        }
    })
    fs.writeFileSync(dst, results.join('\r\n'));
    console.log(`${dst} generate succeed!`);
}

function main() {
    const argv = process.argv;
    if (argv.length < 4) {
        console.log('Invalid command args');
        console.log('Usage: node merge_ue_type.js [ue dir] [export file]');
        console.log('eg. node merge_ue_type.js typing/ue out/index.d.ts');
        return;
    }

    const dir = argv[2];
    const exportFile = argv[3];
    mergeUeType(dir, exportFile);
}

main();
