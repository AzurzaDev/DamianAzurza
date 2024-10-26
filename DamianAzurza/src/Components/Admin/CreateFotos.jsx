import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../Navbar';
import { openCloudinaryWidget } from '../../cloudinaryConfig'; 
import { Link, useNavigate} from 'react-router-dom';

const CreateFotos = () => {
  const [title, setTitle] = useState('');
  const [fotos, setFotos] = useState([]);
  const navigate = useNavigate();

  
  useEffect(() => {
    const fetchFotos = async () => {
      try {
        const response = await axios.get('/fotos');
        setFotos(response.data);
      } catch (error) {
        console.error('Error al obtener las fotos:', error);
      }
    };

    fetchFotos();
  }, []);



  const handleImageUpload = () => {
    openCloudinaryWidget((uploadedImage) => {
      // `uploadedImage` es la URL de la imagen subida
      const formData = new FormData();
      formData.append('file', uploadedImage); // Asegúrate de que esta variable contenga la imagen
      formData.append('upload_preset', 'Desarrollo'); // Tu upload_preset

      axios.post('https://api.cloudinary.com/v1_1/dixhywv86/image/upload', formData)
        .then(response => {
          const fotosData = {
            title,
            imageUrl: response.data.secure_url,
          };

          
          return axios.post('/fotos', fotosData);
        })
        .then(() => {
          
          setTitle('');
          

         
          return axios.get('/fotos');
        })
        .then((updatedImages) => {
          setFotos(updatedImages.data);
        })
        .catch(error => {
          console.error('Error al subir la imagen', error);
        });
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/fotos/${id}`);
      // Eliminar la imagen del estado local
      setFotos((prevImages) => prevImages.filter((image) => image.id !== id));
    } catch (error) {
      console.error('Error al eliminar la imagen:', error);
    }
  };
 
  


  return (
    <div className="container mx-auto p-4 mt-10">
      <div className='fixed top-0 left-0 z-50 w-full'>
        <NavBar />
      </div>
      <h1 className="bg-fondoServicios text-2xl font-bold font-Montserrat p-2 text-gray-200 mb-8 mt-28">Cargar Fotos</h1>
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
       
        
        <button 
          type="button" 
          onClick={handleImageUpload} 
          className=" w-1/2 bg-fondoServicios text-white font-Montserrat hover:bg-gray-300  font-bold  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Subir Imagen
        </button>
        <Link to="/panel" className="w-1/2 mt-4 block text-center bg-gray-300 text-gray-700 py-2 rounded font-Montserrat hover:bg-fondoServicios transition">
          Volver al Panel
        </Link>
      </form>

      {/* Mostrar imágenes del carrusel */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Imágenes Cargadas</h3>
        <div className="grid grid-cols-2 gap-4">
          {fotos.map((image) => (
            <div key={image.id} className="relative">
              <img 
                src={image.src} 
                
                className="w-full h-32 object-cover rounded-md" 
              />
              <button
                onClick={() => handleDelete(image.id)}
                className="absolute top-1 right-1 bg-red-500 text-white px-2 py-1 rounded-full text-xs hover:bg-red-600"
              >
                Eliminar
              </button>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateFotos;
