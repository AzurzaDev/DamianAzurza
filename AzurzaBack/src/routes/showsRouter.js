const express = require('express');
const router = express.Router();
const { createShow, getAllShows, getShowById, updateShow, deleteShow } = require('../controllers/showsController');


router.post('/', createShow);


router.get('/', getAllShows);


router.get('/:idShow', getShowById);

// Ruta para actualizar un show por ID
router.put('/:idShow', updateShow);

// Ruta para eliminar un show por ID (soft delete)
router.delete('/:idShow', deleteShow);

module.exports = router;
//probando