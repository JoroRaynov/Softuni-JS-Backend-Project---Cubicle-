const Accessory = require('../models/accessoriesModel');


exports.getAllAccessory = async() => {
    return await Accessory.find().lean();
}

exports.getOneAccessory = async (id) => {
    return await Accessory.findById(id);
}