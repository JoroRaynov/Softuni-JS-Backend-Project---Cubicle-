
const Cube = require('../models/cubeModel');
const { where } = require('../models/cubeModel');


exports.getAll = async (search = '', fromInput, toInput) =>{
   const from = Number(fromInput) || 0;
   const to = Number(toInput) || 6; 


    const cubes = await Cube.find({name : {$regex: new RegExp(search, 'i')}})
    .where('difficultyLevel').gte(from).lte(to)
    .lean();
    return cubes;
}

exports.create = async (cube) => {
    await Cube.create(cube)
};


exports.getOne = async (id) => {
       return await Cube.findById(id).lean();
    }