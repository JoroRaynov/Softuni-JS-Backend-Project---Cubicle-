const { model, Schema, Types } = require('mongoose');

const accessoriesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
        validate:{
            validator: function(){
                return this.imageUrl.startsWith('http');
            },
            message: 'Image url should be a link'
        } 
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


const Accessory = model('Accessory', accessoriesSchema);

module.exports = Accessory;
