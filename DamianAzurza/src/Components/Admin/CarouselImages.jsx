import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../Navbar';
import { openCloudinaryWidget } from '../../cloudinaryConfig'; 

const CarouselImages = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ruta, setruta] = useState('');
  const [carouselImages, setCarouselImages] = useState([]);

  // Obtener las imágenes cargadas del servidor
  useEffect(() => {
    const fetchCarouselImages = async () => {
      try {
        const response = await axios.get('/carousel');
        setCarouselImages(response.data);
      } catch (error) {
        console.error('Error al obtener las imágenes del carrusel:', error);
      }
    };

    fetchCarouselImages();
  }, []);

  const handleImageUpload = () => {
    openCloudinaryWidget((uploadedImage) => {
      // `uploadedImage` es la URL de la imagen subida
      const formData = new FormData();
      formData.append('file', uploadedImage); // Asegúrate de que esta variable contenga la imagen
      formData.append('upload_preset', 'Desarrollo'); // Tu upload_preset

      axios.post('https://api.cloudinary.com/v1_1/dixhywv86/image/upload', formData)
        .then(response => {
          const carouselData = {
            title,
            description,
            ruta,
            imageUrl: response.data.secure_url,
          };

          // Guardar los datos del carrusel
          return axios.post('/carousel', carouselData);
        })
        .then(() => {
          // Limpiar los campos
          setTitle('');
          setDescription('');
          setruta('');

          // Refrescar las imágenes después de subir una nueva
          return axios.get('/carousel');
        })
        .then((updatedImages) => {
          setCarouselImages(updatedImages.data);
        })
        .catch(error => {
          console.error('Error al subir la imagen', error);
        });
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/carousel/${id}`);
      // Eliminar la imagen del estado local
      setCarouselImages((prevImages) => prevImages.filter((image) => image.id !== id));
    } catch (error) {
      console.error('Error al eliminar la imagen:', error);
    }
  };

  return (
    <div className="container mx-auto p-4 mt-10">
      <div className='fixed top-0 left-0 z-50 w-full'>
        <NavBar />
      </div>
      <h1 className="bg-ColorMorado text-2xl font-bold font-nunito p-2 text-gray-200 mb-8 mt-28">Cargar Imagenes para Carrusel Principal</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleImageUpload(); }}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Título</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="ruta" className="block text-sm font-medium text-gray-700">Ruta</label>
          <select
            id="ruta"
            value={ruta}
            onChange={(e) => setruta(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          >
            <option value="">Seleccione una Ruta</option>
            <option value="contacto">Contacto</option>
            <option value="imagenes">Fotos</option>
            <option value="shows">Shows</option>
          </select>
        </div>
        <button 
          type="button" 
          onClick={handleImageUpload} 
          className="bg-ColorAzul hover:bg-blue-300 text-gray-600 font-bold font-nunito py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Subir Imagen
        </button>
      </form>

      {/* Mostrar imágenes del carrusel */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Imágenes Cargadas</h3>
        <div className="grid grid-cols-2 gap-4">
          {carouselImages.map((image) => (
            <div key={image.id} className="relative">
              <img 
                src={image.src} 
                alt={image.title} 
                className="w-full h-32 object-cover rounded-md" 
              />
              <button
                onClick={() => handleDelete(image.id)}
                className="absolute top-1 right-1 bg-red-500 text-white px-2 py-1 rounded-full text-xs hover:bg-red-600"
              >
                Eliminar
              </button>
              <p className="mt-2 text-sm text-center">{image.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselImages;
