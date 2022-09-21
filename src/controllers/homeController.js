const routes = require('express').Router();
const cubes = require('../db.json');

routes.get('/', (req, res) => {
    res.render('index', {cubes});
});

routes.get('/about', (req, res) => {
    res.render('about');
});

module.exports = routes;