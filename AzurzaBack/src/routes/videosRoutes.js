const express = require('express');
const router = express.Router();
const multer = require('multer');
const {createVideos, getAllVideos, deleteVideos} = require('../controllers/videosControllers');

const upload = multer(); 
// Rutas para los videos de Instagram
router.post('/', createVideos);
router.get('/', getAllVideos);
router.delete('/:id', deleteVideos);

module.exports = router;