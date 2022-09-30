const express = require('express');
const routes = require('./routes')
const expressConfig = require('./config/expressConfig')
const databaseConfig = require('./config/databaseConfig');


async function start() {

    await databaseConfig();
    const app = express();
    expressConfig(app);

    app.use(routes)
    app.all('*', (req, res) => {
        res.render('404');
    })
    app.listen(3000, () => console.log('App is listening on port 3000...'));
}

start();