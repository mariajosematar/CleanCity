const Waste = require('../models/Waste');

const createWaste = async ({ type, collectionDay }) => {
  try {
    const newWaste = await Waste.create({ type, collectionDay });
    return newWaste;
  } catch (error) {
    console.error('Error in createWaste service:', error);
    throw error;
  }
};

const getAllWastes = async () => {
  try {
    return await Waste.findAll();
  } catch (error) {
    console.error('Error in getAllWastes service:', error);
    throw error;
  }
};

module.exports = {
  createWaste,
  getAllWastes
};
