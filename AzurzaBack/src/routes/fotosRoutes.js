const express = require('express');
const router = express.Router();
const multer = require('multer');
const {createFotos, getAllFotos, deleteFotos} = require('../controllers/fotosController');

const upload = multer(); 
// Rutas para los videos de Instagram
router.post('/', createFotos);
router.get('/', getAllFotos);
router.delete('/:id', deleteFotos);

module.exports = router;