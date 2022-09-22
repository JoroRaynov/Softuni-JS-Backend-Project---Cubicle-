const router = require('express').Router();

const cubeService = require('../services/cubeService')

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {
    
    const cube = req.body;

    if(cube.name.length < 2 || cube.description.length < 7 || cube.imageUrl.length == '') {
        res.status(400).send('Invalid Request')
    }
    try {
        await cubeService.save(cube);
     

    } catch (err) {
        res.status(400).send(err.message)
    }
    res.redirect('/');
});

router.get('/details/:id', (req, res) => {

   const cube = cubeService.getOne(req.params.id);
    res.render('details', {cube})

});

module.exports = router;