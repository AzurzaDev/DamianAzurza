import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaFacebookSquare, FaYoutube } from 'react-icons/fa';
import { PiInstagramLogoFill } from "react-icons/pi";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/LogoNavbar.png';

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [artists, setArtists] = useState([]); // Lista de artistas según la categoría

  // Obtener el parámetro de categoría desde la URL
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const urlCategory = searchParams.get('category') || '';

  useEffect(() => {
    // Obtener videos desde el backend
    axios.get('/videos')
      .then((response) => {
        setVideos(response.data);

        // Filtrar videos y artistas al cargar la página
        filterVideosAndArtists(response.data, urlCategory);
      })
      .catch((error) => console.error('Error al obtener los videos:', error));
  }, [urlCategory]);

  const filterVideosAndArtists = (videosData, category) => {
    // Filtrar videos según la categoría de la URL
    let filtered = videosData;
    if (category && category !== 'Todos') {
      filtered = videosData.filter((video) => video.category === category);
    }
    setFilteredVideos(filtered);

    // Obtener una lista única de artistas que coinciden con la categoría actual
    const filteredArtists = [...new Set(filtered.map((video) => video.artista))];
    setArtists(filteredArtists); // Actualizar solo con artistas de la categoría
  };

  useEffect(() => {
    // Filtrar los videos cuando se selecciona un artista
    let filtered = videos;
    if (selectedArtist) {
      filtered = filtered.filter((video) => video.artista === selectedArtist);
    }
    if (urlCategory && urlCategory !== 'Todos') {
      filtered = filtered.filter((video) => video.category === urlCategory);
    }
    setFilteredVideos(filtered);
  }, [selectedArtist, urlCategory, videos]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getYouTubeId = (url) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  // Título basado en selección de categoría
  const pageTitle = urlCategory || "Producción Musical / Dirección Musical";

  // Selección de categoría desde el menú
  const handleCategorySelection = (category) => {
    setSelectedArtist('');
    if (category === 'Todos') {
      navigate('/videos'); // Limpiar la URL
    } else {
      navigate(`/videos?category=${category}`);
    }
  };

  return (
    <div  className="flex h-screen">
      {/* Sidebar */}
      {isMenuOpen && (
        <div className="w-1/4 bg-gray-200 p-4 flex flex-col">
          <button onClick={toggleMenu} className="self-end mb-4 font-Montserrat text-boton">X</button>
          <img src={logo} alt="Logo"  className="h-12 w-12 object-cover mb-4 block md:hidden"  />
          <Link to="/" className="text-2xl font-semibold font-Montserrat text-boton mb-4">Inicio</Link>
          
          <ul className="mb-4 space-y-2">
            <li
              onClick={() => handleCategorySelection('Todos')}
              className="cursor-pointer font-Montserrat hover:text-blue-500"
            >
              Todos
            </li>
            {/* Filtrado de artistas según la categoría en la URL */}
            {artists.map((artist) => (
              <li
                key={artist}
                onClick={() => { setSelectedArtist(artist); }}
                className={`cursor-pointer font-Montserrat hover:text-blue-500 ${selectedArtist === artist ? 'font-bold' : ''}`}
              >
                {artist}
              </li>
            ))}
          </ul>
          <div className="flex space-x-2">
            <a href="https://www.instagram.com/damian_azurza?igsh=MWtlazR0bGN6M3Zzaw==" className="text-gray-600 hover:text-gray-800">
              <PiInstagramLogoFill size={24} />
            </a>
            <a href="https://www.facebook.com/damianazurzamusician" className="text-gray-600 hover:text-gray-800">
              <FaFacebookSquare size={24} />
            </a>
            <a href="https://youtube.com/@damianazurza?si=vZdWXMG2EQJOFG2d" className="text-gray-600 hover:text-gray-800">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={`w-full ${isMenuOpen ? 'w-3/4' : 'w-full'} p-6 bg-gray-100`}>
        {!isMenuOpen && <button onClick={toggleMenu} className="mb-4">☰</button>}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl sm:text-2xl md:text-5xl font-Montserrat text-boton font-bold">{pageTitle}</h1>
          <img src={logo} alt="Logo" className="h-16 w-auto hidden md:block" />
        </div>

        {/* Display message if no videos are available */}
        {filteredVideos.length === 0 ? (
          <p className="text-center text-boton font-Montserrat text-xl">Aún no hay videos cargados</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => {
              const videoId = getYouTubeId(video.src);

              return (
                <div key={video.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative overflow-hidden rounded-lg mb-2">
                    {videoId ? (
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
                    ) : (
                      <p>Video no disponible</p>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold">{video.title}</h3>
                  <p className="text-sm text-gray-500">{video.date}</p>
                  <p className="text-sm">{video.artista}</p>
                  <p className="text-sm text-gray-500">{video.description}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoGallery;

