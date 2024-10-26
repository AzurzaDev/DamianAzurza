import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState('');

  useEffect(() => {
    // Obtener videos desde el backend usando Axios
    axios.get('/videos') // Cambia esto por la ruta real de tu API
      .then((response) => {
        setVideos(response.data);
        setFilteredVideos(response.data);
      })
      .catch((error) => console.error('Error al obtener los videos:', error));
  }, []);

  useEffect(() => {
    if (selectedArtist) {
      setFilteredVideos(videos.filter((video) => video.artista === selectedArtist));
    } else {
      setFilteredVideos(videos);
    }
  }, [selectedArtist, videos]);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-4">
        <h2 className="text-xl font-semibold mb-4">Artistas</h2>
        <ul>
          <li onClick={() => setSelectedArtist('')} className="cursor-pointer mb-2 hover:text-blue-500">
            Todos
          </li>
          {[...new Set(videos.map((video) => video.artista))].map((artist) => (
            <li
              key={artist}
              onClick={() => setSelectedArtist(artist)}
              className={`cursor-pointer mb-2 hover:text-blue-500 ${
                selectedArtist === artist ? 'font-bold' : ''
              }`}
            >
              {artist}
            </li>
          ))}
        </ul>
      </div>

      {/* Video Gallery */}
      <div className="w-3/4 p-4">
        <h1 className="text-3xl font-bold mb-4">Producción Musical / Dirección Musical</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredVideos.map((video) => {
            // Extraer el ID del video de la URL
            const videoUrl = video.src; // URL completa del video
            const videoId = videoUrl.split('v=')[1]?.split('&')[0]; // Obtener el ID del video

            return (
              <div key={video.id} className="p-2 shadow-lg bg-white rounded-lg transition-transform transform hover:scale-105">
                <a href={video.src} target="_blank" rel="noopener noreferrer">
                  <div className="relative overflow-hidden rounded-lg">
                    {videoId && (
                      <iframe
                        width="100%"
                        height="200"
                        src={`https://www.youtube.com/embed/${videoId}`} // Incrustar el video
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg shadow-md transition-transform transform hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-black opacity-20"></div> {/* Efecto oscuro */}
                  </div>
                  <h3 className="text-lg font-semibold mt-2">{video.title}</h3>
                  <p className="text-sm text-gray-500">{video.date}</p>
                  <p className="text-sm">{video.artista}</p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;




