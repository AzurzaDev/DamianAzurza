const {Show} = require('../data')
const { notifySubscribedContacts } = require('../emailService');

const createShow = async (req, res) => {
    try {
      console.log('Request Body:', req.body); 
      const { title, direccion, city, description, date, images } = req.body;
      
      const newShow = await Show.create({
        title,
        direccion,
        city,
        description,
        date,
        images,
      });
      
      console.log('Nuevo Show Creado:', newShow); 
      await notifySubscribedContacts();
      
      res.status(201).json(newShow);
    } catch (error) {
      console.error('Error en createShow:', error); 
      res.status(500).json({ error: 'Error al crear el show.' });
    }
  };
      
      // Obtener todos los shows
      const getAllShows = async (req, res) => {
        try {
          const shows = await Show.findAll();
          res.status(200).json(shows);
        } catch (error) {
          res.status(500).json({ error: 'Error al obtener los shows.' });
        }
      };
      
      // Obtener un show por ID
      const getShowById = async (req, res) => {
        try {
          const { idShow } = req.params;
          const show = await Show.findByPk(idShow);
          if (!show) {
            return res.status(404).json({ error: 'Show no encontrado.' });
          }
          res.status(200).json(show);
        } catch (error) {
          res.status(500).json({ error: 'Error al obtener el show.' });
        }
      };
      
      // Actualizar un show por ID
      const updateShow = async (req, res) => {
        try {
          const { idShow } = req.params;
          const { title, direccion, city, description, date, images } = req.body;
      
          const show = await Show.findByPk(idShow);
          if (!show) {
            return res.status(404).json({ error: 'Show no encontrado.' });
          }
      
          await show.update({
            title,
            direccion,
            city,
            description,
            date,
            images,
          });
      
          res.status(200).json(show);
        } catch (error) {
          res.status(500).json({ error: 'Error al actualizar el show.' });
        }
      };
      
      // Eliminar un show por ID (Soft Delete)
      const deleteShow = async (req, res) => {
        try {
          const { idShow } = req.params;
          const show = await Show.findByPk(idShow);
          if (!show) {
            return res.status(404).json({ error: 'Show no encontrado.' });
          }
      
          await show.destroy(); // Soft delete gracias a `paranoid: true`
          res.status(200).json({ message: 'Show eliminado correctamente.' });
        } catch (error) {
          res.status(500).json({ error: 'Error al eliminar el show.' });
        }
      };
      
      module.exports = {
        createShow,
        getAllShows,
        getShowById,
        updateShow,
        deleteShow,
      };