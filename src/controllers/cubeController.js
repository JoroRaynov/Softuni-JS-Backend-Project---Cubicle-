const router = require('express').Router();
const { isAuthenticated } = require('../middlewares/authMiddleware');
const cubeService = require('../services/cubeService')

router.get('/create', isAuthenticated, (req, res) => {
    res.render('create');
});

router.post('/create', isAuthenticated, async (req, res) => {

    const cube = req.body;
    cube.owner = req.user.id;
    try {
        const createdCube = await cubeService.create(cube, req.user.id);

    } catch (err) {
        res.status(400).send(err.message)
    }
    res.redirect('/');
});

router.get('/details/:id', async (req, res) => {

    const cube = await cubeService.getOneDetails(req.params.id).lean();

    res.render('details', { cube })

});

module.exports = router;