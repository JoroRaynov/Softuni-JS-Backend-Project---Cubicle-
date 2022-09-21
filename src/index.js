const express = require('express');
const hbs = require('express-handlebars');
const routes = require('./routes')

const app = express();

// app.engine('hbs', engine());
app.engine('hbs', hbs.engine({
    extname: 'hbs'
}));

app.use(express.urlencoded({extended: false}));
app.use('/static', express.static('static'));

app.set('view engine', 'hbs');
app.set('views', './src/views');


app.use(routes)

app.listen(3000, () => console.log('App is listening on port 3000...'));