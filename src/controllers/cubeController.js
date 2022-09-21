const router = require('express').Router();
// const cubes = require('../db.json');
// const fs = require('fs/promises');
// const path = require('path');
const cubeService = require('../services/cubeService')

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {
    // const id = 'a0897' + (Math.random() * 9999 | 0);
    // cubes.push({ id, ...req.body });
    const cube = req.body;
    // await fs.writeFile(path.resolve('src', 'db.json'), JSON.stringify(cubes, '', 2), { encoding: 'utf8' });
    try {
        await cubeService.save(cube);
     

    } catch (err) {
        res.status(400).send(err.message)
    }
    res.redirect('/');
});

module.exports = router;