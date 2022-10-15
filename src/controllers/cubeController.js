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
        await cubeService.create(cube, req.user.id);

    } catch (err) {
        res.status(400).send(err.message)
    }
    res.redirect('/');
});

router.get('/details/:id', async (req, res) => {

    const cube = await cubeService.getOneDetails(req.params.id).lean();
        const isOwner = cube?.owner == req.user?.id;
        console.log(cube);
        console.log(req.user?.id);
        res.render('details', { cube, isOwner })

});

router.get('/:id/edit', isAuthenticated, async (req, res) => {
    const cube = await cubeService.getOneCube(req.params.id);

    res.render('edit', { cube });
});

router.post('/:id/edit', isAuthenticated, async (req, res) => {
   
    const modifiedCube = await cubeService.edit(req.params.id, req.body);
    console.log(modifiedCube);
    res.redirect(`/cube/details/${req.params.id}`);
});

router.get('/:id/delete', isAuthenticated, async (req, res) => {
    const cube = await cubeService.getOneCube(req.params.id);
    res.render('delete', { cube });
});


router.post('/:id/delete', isAuthenticated, async (req, res) => {
    const cube = await cubeService.getOneCube(req.params.id);
    const isOwner = cube.owner == req.user.id;

    if(isOwner){
        await cubeService.delete(req.params.id);
    } else {
        res.render('/');
    }

   res.redirect('/')
});

module.exports = router;