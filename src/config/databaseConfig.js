const mongoose = require('mongoose');


const urlString = 'mongodb://localhost:27017/cubicle';

module.exports = async () => {
    try {
        mongoose.connect(urlString);
        console.log('Database connection established!');
    } catch (err) {
        console.error('A connection to the server could not be established...');
        console.error(err.message);
        process.exit(1);
    }
    
}