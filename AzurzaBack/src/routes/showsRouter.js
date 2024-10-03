const express = require('express');
const router = express.Router();
const { createShow, getAllShows, getShowById, updateShow, deleteShow } = require('../controllers/showsController');


router.post('/', createShow);

// Ruta para obtener todos los shows
router.get('/', getAllShows);

// Ruta para obtener un show por ID
router.get('/:id', getShowById);

// Ruta para actualizar un show por ID
router.put('/:id', updateShow);

// Ruta para eliminar un show por ID (soft delete)
router.delete('/:id', deleteShow);

module.exports = router;
