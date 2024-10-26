import { useState } from 'react';
import axios from 'axios';  // Importa axios
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

const CargarVideos = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [artista, setArtista] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Estructura de datos del video que quieres enviar al backend
    const videoData = {
      videoUrl,  // La URL de YouTube ingresada por el usuario
      title,
      artista,
      description,
      date,
    };

    try {
      // Enviar los datos usando axios
      const response = await axios.post('/videos', videoData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Video guardado con éxito:', response.data);

      // Limpiar los campos después de enviar el formulario
      setVideoUrl('');
      setTitle('');
      setArtista('');
      setDescription('');
      setDate('');
    } catch (error) {
      console.error('Error al guardar el video:', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-2">
      <Navbar /> 
      <div className="max-w-md mx-auto bg-white mt-36 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4 text-center">Agregar Video</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input 
              type="text" 
              placeholder="URL de YouTube" 
              value={videoUrl} 
              onChange={(e) => setVideoUrl(e.target.value)} 
              required 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <input 
              type="text" 
              placeholder="Título" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              required 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <input 
              type="text" 
              placeholder="Descripción" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              required 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <input 
              type="text" 
              placeholder="Artista" 
              value={artista} 
              onChange={(e) => setArtista(e.target.value)} 
              required 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <input 
              type="date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
              required 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
          >
            Crear video
          </button>
        </form>
        <Link to="/panel" className="w-full mt-4 block text-center bg-gray-300 text-gray-700 py-2 rounded hover:bg-gray-400 transition">
          Volver al Panel
        </Link>
      </div>
    </div>
  );
};

export default CargarVideos;

