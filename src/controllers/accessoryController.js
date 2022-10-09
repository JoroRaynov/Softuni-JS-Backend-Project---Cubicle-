const router = require('express').Router();
const cubeService = require('../services/cubeService');
const Accessory = require('../models/accessoriesModel');
const accessoryService = require('../services/accessoryService')

router.get('/create', (req, res) => {
        res.render('createAccessory');
})


router.get('/attach/:id', async (req, res) => {
        const cube = await cubeService.getOneDetails(req.params.id).lean();

        const accessory = await accessoryService.accessory(cube);
        res.render('attachAccessory', {
                cube,
                accessory
        });
        console.log(accessory);
});

router.post('/create', async (req, res) => {
        await Accessory.create(req.body);
        res.redirect('/')
});

router.post('/attach/:id', async (req, res) => {
        const cubeId = req.params.id;
        const accessoryId = req.body.accessory;
        await cubeService.attachAccessory(cubeId, accessoryId)
        res.redirect(`/cube/details/${cubeId}`);
});



module.exports = router; 