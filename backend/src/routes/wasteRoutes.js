const express = require('express');
const router = express.Router();
const { fetchWasteData, createWaste } = require('../controllers/wasteController');

// Ruta para obtener los datos de residuos
router.get('/', fetchWasteData);

// Ruta para crear un nuevo dato de residuos
router.post('/', createWaste);

module.exports = router;