const express = require('express');
const router = express.Router();
const { createShow, getAllShows, getShowById, updateShow, deleteShow } = require('../controllers/showsController');


router.post('/', createShow);

// Ruta para obtener todos los shows
router.get('/', getAllShows);

// Ruta para obtener un show por ID
router.get('/:idShow', getShowById);

// Ruta para actualizar un show por ID
router.put('/:idShow', updateShow);

// Ruta para eliminar un show por ID (soft delete)
router.delete('/:idShow', deleteShow);

module.exports = router;
//probando