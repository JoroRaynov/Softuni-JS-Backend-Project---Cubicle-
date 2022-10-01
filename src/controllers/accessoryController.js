const router = require('express').Router();
const cubeService = require('../services/cubeService');
const Accessory = require('../models/accessoriesModel');

router.get('/create', (req, res)=> {
        res.render('createAccessory');
})


router.get('/attach/:id', async (req, res)=> {
        const cube = await cubeService.getOne(req.params.id);
        console.log(cube);
        res.render('attachAccessory', {cube});
})

router.post('/create', async (req, res)=> {
await Accessory.create(req.body)
        res.redirect('/')
})


module.exports = router; 