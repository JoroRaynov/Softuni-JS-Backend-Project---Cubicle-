const routes = require('express').Router();
const cubeController = require('../services/cubeService')
routes.get('/', async (req, res) => {
    let { search, from, to} = req.query;

    let cubes = await cubeController.getAll(search, from, to);
    
        res.render('index', {cubes});
});

routes.get('/about', (req, res) => {
    res.render('about');
});



module.exports = routes;