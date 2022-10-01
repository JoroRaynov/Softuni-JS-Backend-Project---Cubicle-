const router = require('express').Router();
const cubeService = require('../services/cubeService');
const Accessory = require('../models/accessoriesModel');
const accessoryService = require('../services/accessoryService')

router.get('/create', (req, res) => {
        res.render('createAccessory');
})


router.get('/attach/:id', async (req, res) => {
        const allAccessories = await accessoryService.getAllAccessory();
        const cube = await cubeService.getOneCube(req.params.id);

        res.render('attachAccessory', {
                cube,
                allAccessories
        });
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