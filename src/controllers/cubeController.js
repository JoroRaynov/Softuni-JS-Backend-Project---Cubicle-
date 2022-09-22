const router = require('express').Router();

const cubeService = require('../services/cubeService')

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {
    
    const cube = req.body;
    try {
        await cubeService.save(cube);
     

    } catch (err) {
        res.status(400).send(err.message)
    }
    res.redirect('/');
});

router.get('/details/:id', (req, res) => {
    // console.log(req.params);
   const cube = cubeService.getOne(req.params.id);
   console.log(cube);
    res.render('details', {cube})

})

module.exports = router;