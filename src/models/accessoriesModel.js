const { model, Schema, Types } = require('mongoose');

const accessoriesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 120
    },
    cubes: [
        {
            type: Types.ObjectId,
            ref: 'Cube'
        }
    ]
});


const Accessory = model('Accessory');

module.exports = Accessory;
