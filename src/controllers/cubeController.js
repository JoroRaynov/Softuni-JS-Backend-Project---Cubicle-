const router = require('express').Router();

const cubeService = require('../services/cubeService')

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {

    const cube = req.body;

    try {
        await cubeService.create(cube);

    } catch (err) {
        res.status(400).send(err.message)
    }
    res.redirect('/');
});

router.get('/details/:id', async (req, res) => {

    // const cube = await cubeService.getOneCube(req.params.id);
    // const accessories = await cube
    const cube = await cubeService.getOneDetails(req.params.id).lean();
    console.log(cube);
    // const accessories = details.accessories;
    // console.log(accessories);  
    res.render('details', { cube})
    

});

module.exports = router;