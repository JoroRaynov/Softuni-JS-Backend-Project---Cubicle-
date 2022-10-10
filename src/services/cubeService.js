const Cube = require('../models/cubeModel');
const accessoryService = require('../services/accessoryService')


exports.getAll = async (search = '', fromInput, toInput) => {
    const from = Number(fromInput) || 0;
    const to = Number(toInput) || 6;


    const cubes = await Cube.find({ name: { $regex: new RegExp(search, 'i') } })
        .where('difficultyLevel').gte(from).lte(to)
        .lean();
    return cubes;
}

exports.create = (cube) => Cube.create(cube);


exports.getOneCube = async (id) => {
    return await Cube.findById(id).lean();
}

exports.attachAccessory = async (cubeId, accessoryId) => {
    const cube = await Cube.findById(cubeId);
    const accessory = await accessoryService.getOneAccessory(accessoryId);
   
    cube.accessories.push(accessory);
    accessory.cubes.push(cube);

    await cube.save();
    await accessory.save();
}

exports.getOneDetails = (cubeId) => Cube.findById(cubeId).populate('accessories');