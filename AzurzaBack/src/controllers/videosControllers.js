
const {Videos} = require('../data');

const createVideos = async (req, res) => {
    const { title, description, videoUrl, artista, date } = req.body;
  
    // Verificar si la URL de la videon se ha recibido
    if (!videoUrl) {
      return res.status(400).json({ message: 'No se ha recibido ninguna videon.' });
    }
  
    try {
      // Guardar la URL de Cloudinary en la base de datos
      const newVideo = await Videos.create({
        src: videoUrl,
        title,
        description,
        artista,
        date,
      });
  
      res.status(201).json(newVideo);
    } catch (error) {
      console.error('Error al guardar la videon en la base de datos:', error);
      res.status(500).json({ message: 'Error al guardar la videon', error });
    }
  };
// Obtener todas las imágenes del carrusel
const getAllVideos = async (req, res) => {
  try {
    const videos = await Videos.findAll();
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las imágenes', error });
  }
};

// Eliminar una videon del carrusel por ID
const deleteVideos = async (req, res) => {
  const { id } = req.params;

  try {
    const video = await Videos.findByPk(id);
    if (!video) {
      return res.status(404).json({ message: 'videon no encontrada' });
    }

    await video.destroy();
    res.status(200).json({ message: 'videon eliminada con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la videon', error });
  }
};

module.exports = {
  createVideos,
  getAllVideos,
  deleteVideos,
};