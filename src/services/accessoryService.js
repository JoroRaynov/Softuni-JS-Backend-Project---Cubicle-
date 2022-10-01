const Accessory = require('../models/accessoriesModel');
const { Types } = require('mongoose');

exports.getAllAccessory = async () => {
    return await Accessory.find().lean();
}

exports.getOneAccessory = async (id) => {
    return await Accessory.findById(id);
}

exports.accessory = async (cube) => {
    const allAccessories = await Accessory.find().lean();
    const acc = await Accessory.find({ cubes: { $in: [cube._id]}}).lean();
    const toRender = allAccessories.filter(a => acc.every(x=> x._id.toString() != a._id.toString()));
    return toRender;

}