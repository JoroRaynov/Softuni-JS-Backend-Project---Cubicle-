const express = require('express');
const routes = require('./routes')
const expressConfig = require('./config/expressConfig')
const databaseConfig = require('./config/databaseConfig');
const cookieParser = require('cookie-parser')
const { auth } = require('./middlewares/authMiddleware');


async function start() {

    const app = express();
    await databaseConfig();

    expressConfig(app);

    app.use(cookieParser());
    app.use(auth);
    app.use(routes)

    app.listen(3000, () => console.log('App is listening on port 3000...'));
}

start();