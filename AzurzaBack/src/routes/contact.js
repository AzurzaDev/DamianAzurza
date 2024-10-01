const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Ruta para crear un nuevo contacto
router.post('/', contactController.createContact);

// Ruta para obtener todos los contactos (opcional)
router.get('/', contactController.getAllContacts);

module.exports = router;
