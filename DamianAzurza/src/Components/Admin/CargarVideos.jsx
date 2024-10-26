import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

const CargarVideos = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [videos, setVideos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [artista, setArtista] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('./videos');
        setVideos(response.data);
      } catch (error) {
        console.error('Error al obtener los videos', error);
      }
    };
    fetchVideos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const videoData = {
      videoUrl,
      title,
      artista,
      description,
      date,
    };

    try {
      const response = await axios.post('/videos', videoData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Video guardado con éxito:', response.data);

      // Agregar el nuevo video al estado local
      setVideos([...videos, response.data]);
      setVideoUrl('');
      setTitle('');
      setArtista('');
      setDescription('');
      setDate('');
    } catch (error) {
      console.error('Error al guardar el video:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/videos/${id}`);
      setVideos((prevVideos) => prevVideos.filter((video) => video.id !== id));
    } catch (error) {
      console.error('Error al eliminar el video:', error);
    }
  };

  // Función para obtener el ID de YouTube de una URL
  const getYouTubeId = (url) => {
    if (!url || typeof url !== 'string') return null;
    const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  // Función para limpiar la URL de YouTube
  const cleanYouTubeUrl = (url) => {
    const regex = /^(https?:\/\/)?(www\.)?(youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? `https://www.youtube.com/watch?v=${match[4]}` : null; // Devuelve una URL limpia
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
      <div className="mt-8">
        <h3 className="text-2xl font-Montserrat text-boton text-center font-semibold mb-4">Videos Cargados</h3>
        <div className="grid grid-cols-2 gap-4">
          {videos.map((video) => {
            const videoId = getYouTubeId(video.src); // Cambia a video.src
            const cleanedUrl = cleanYouTubeUrl(video.src); // Limpia la URL

            return (
              <div key={video.id} className="relative">
                <iframe
                  width="100%"
                  height="200"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                />
                <button
                  onClick={() => handleDelete(video.id)}
                  className="absolute top-1 right-1 bg-red-500 text-white px-2 py-1 rounded-full text-xs hover:bg-red-600"
                >
                  Eliminar
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CargarVideos;

