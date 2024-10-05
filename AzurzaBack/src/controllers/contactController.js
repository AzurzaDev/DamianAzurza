const { Contacto } = require('../data'); // Asegúrate de que la ruta sea correcta

// Controlador para crear un nuevo contacto
exports.createContact = async (req, res) => {
  const { name, email, phone, isSuscripto } = req.body;

  try {
    
    const existingContact = await Contacto.findOne({ where: { email } });
    if (existingContact) {
      return res.status(400).json({ message: 'El correo electrónico ya está registrado' });
    }

    
    const newContact = await Contacto.create({ name, email, phone, isSuscripto });
    res.status(201).json({ message: 'Contacto registrado con éxito', contact: newContact });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar el contacto', error: error.message });
  }
};

// Controlador para obtener todos los contactos (opcional)
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contacto.findAll();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener contactos', error: error.message });
  }
};

