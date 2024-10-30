import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaFacebookSquare, FaYoutube } from 'react-icons/fa';
import { PiInstagramLogoFill } from "react-icons/pi";
import { Link } from 'react-router-dom';
import logo from '../assets/logoNavbar.png';

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  useEffect(() => {
    // Fetch videos from backend
    axios.get('/videos') 
      .then((response) => {
        setVideos(response.data);
        setFilteredVideos(response.data);
      })
      .catch((error) => console.error('Error al obtener los videos:', error));
  }, []);

  useEffect(() => {
    // Filter videos based on selected artist and category
    let filtered = videos;
    if (selectedArtist) {
      filtered = filtered.filter((video) => video.artista === selectedArtist);
    }
    if (selectedCategory) {
      filtered = filtered.filter((video) => video.category === selectedCategory);
    }
    setFilteredVideos(filtered);
  }, [selectedArtist, selectedCategory, videos]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getYouTubeId = (url) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  // Set the title based on category selection
  const pageTitle = selectedCategory || selectedArtist || "Producción Musical / Dirección Musical";

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      {isMenuOpen && (
        <div className="w-1/4 bg-gray-200 p-4 flex flex-col">
          <button onClick={toggleMenu} className="self-end mb-4 font-Montserrat text-boton">X</button>
          <Link to="/" className="text-2xl font-semibold font-Montserrat text-boton mb-4">Inicio</Link>
          <img src={logo} alt="Logo" className="h-12 w-auto mb-4 block md:hidden" />
          <ul className="mb-4 space-y-2">
            <li onClick={() => { setSelectedArtist(''); setSelectedCategory(''); }} className="cursor-pointer font-Montserrat hover:text-blue-500">Todos</li>

            {/* Artists Filter */}
            {[...new Set(videos.map((video) => video.artista))].map((artist) => (
              <li
                key={artist}
                onClick={() => { setSelectedArtist(artist); setSelectedCategory(''); }}
                className={`cursor-pointer font-Montserrat hover:text-blue-500 ${selectedArtist === artist ? 'font-bold' : ''}`}
              >
                {artist}
              </li>
            ))}

            {/* Category Filter */}
            <li
              onClick={() => { setSelectedCategory('Producción Musical'); setSelectedArtist(''); }}
              className={`cursor-pointer font-Montserrat hover:text-blue-500 ${selectedCategory === 'Producción Musical' ? 'font-bold' : ''}`}
            >
              Producción Musical
            </li>
            <li
              onClick={() => { setSelectedCategory('Dirección Musical'); setSelectedArtist(''); }}
              className={`cursor-pointer font-Montserrat hover:text-blue-500 ${selectedCategory === 'Dirección Musical' ? 'font-bold' : ''}`}
            >
              Dirección Musical
            </li>
          </ul>
          <div className="flex space-x-2">
            <a href="https://www.instagram.com/damian_azurza?igsh=MWtlazR0bGN6M3Zzaw==" className="text-gray-600 hover:text-gray-800">
              <PiInstagramLogoFill size={24} />
            </a>
            <a href="https://www.youtube.com/redirect?event=channel_header&redir_token=QUFFLUhqblVVcnZjQW9HcnRsZ1pfZ1dsUnc2NTdwUlhLQXxBQ3Jtc0trbVdHQmQ0c2JPdzBGdkt4bi13UFZhOFNBbDNPUHgtVUhtVDlSa0RnbTlKUi1tYW52WXVwMmVtYTVUWXZzTFQzbFFFdGE4M1BHX3ZuV2l5QVZJV1BfejBMeWc0anAyam9xZ3VWOFJHN0pWTVMzNDBiSQ&q=https%3A%2F%2Fwww.facebook.com%2Fdamianazurzamusician" className="text-gray-600 hover:text-gray-800">
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
          <img src={logo} alt="Logo" className="h-16 w-auto hidden md:block" />{/* Ajusta el tamaño del logo */}
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
