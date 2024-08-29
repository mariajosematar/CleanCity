const wasteService = require('../services/wasteService');

const fetchWasteData = async (req, res) => {
  try {
    const wastes = await wasteService.getAllWastes();
    res.status(200).json(wastes);
  } catch (error) {
    console.error('Error fetching waste data:', error);
    res.status(500).json({ error: 'An error occurred while fetching waste data.' });
  }
};

const createWaste = async (req, res) => {
  try {
    const { type, collectionDay } = req.body;
    console.log('Request body:', req.body); // Agregar esto para depuración
    const newWaste = await wasteService.createWaste({ type, collectionDay });
    console.log('New waste entry:', newWaste); // Agregar esto para depuración
    res.status(201).json(newWaste);
  } catch (error) {
    console.error('Error creating waste entry:', error);
    res.status(500).json({ error: 'An error occurred while creating waste entry.' });
  }
};


module.exports = {
  fetchWasteData,
  createWaste
};