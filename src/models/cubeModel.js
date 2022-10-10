const { model, Schema, Types } = require('mongoose');

const cubeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 120
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: function () {
                return this.imageUrl.startsWith('http');
            },
            message: 'Image url should be a link'
        }
    },
    difficultyLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 6
    },
    accessories: [
        {
            type: Types.ObjectId,
            ref: 'Accessory'
        }
    ],
    owner: {
        type: Types.ObjectId
    }
});


const Cube = model('Cube', cubeSchema);

module.exports = Cube;