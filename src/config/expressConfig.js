const express = require('express');
const hbs = require('express-handlebars');


module.exports = (app) => {
    app.engine('hbs', hbs.engine({
        extname: 'hbs'
    }));
    
    app.use(express.urlencoded({ extended: false }));
    app.use('/static', express.static('static'));
    
    app.set('view engine', 'hbs');
    app.set('views', './src/views');
}
