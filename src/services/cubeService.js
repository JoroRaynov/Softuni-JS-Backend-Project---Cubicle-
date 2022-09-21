const cubes = require('../db.json');
const fs = require('fs/promises');
const path = require('path');


exports.save = (cube) => {
    const id = 'a0897' + (Math.random() * 9999 | 0);
    cubes.push({ id, ...cube});

    return fs.writeFile(path.resolve('src', 'db.json'), JSON.stringify(cubes, '', 2), { encoding: 'utf8' });
}