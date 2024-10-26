import { FiInstagram, FiYoutube, FiFacebook } from "react-icons/fi";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import navbar2 from "../assets/debajoSlider.png";

const PhotosGallery = () => {
  const [visibleImages, setVisibleImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('/fotos');
        const images = response.data.map(image => image.src);
        setAllImages(images);
        setVisibleImages(images); // Muestra todas las imágenes desde el principio
      } catch (error) {
        console.error('Error al cargar las imágenes:', error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const loadMoreImages = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100 && !loading
      ) {
        setLoading(true);
        setVisibleImages((prevImages) => {
          const nextImages = allImages.slice(prevImages.length, prevImages.length + 4); // Cargar más imágenes
          return [...prevImages, ...nextImages]; // Combinar
        });
        setLoading(false);
      }
    };

    window.addEventListener("scroll", loadMoreImages);
    return () => window.removeEventListener("scroll", loadMoreImages);
  }, [loading, allImages]);

  return (
    <div className="bg-white">
      {/* Navbar con imagen de fondo */}
      <div
        className="relative w-full h-64 bg-cover bg-center"
        style={{
          backgroundImage: `url(${navbar2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col md:flex-row items-center justify-between p-4">
          {/* Logo */}
          <Link to="/">
            <img
              src="LogoNavbar.png"
              alt="Logo"
              className="w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-0"
            />
          </Link>
          {/* Título */}
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center w-full mb-2 md:mb-0">
            Fotos
          </h1>
          
          {/* Iconos de redes sociales */}
          <div className="flex space-x-4 text-white">
            <a href="#">
              <FiInstagram size={30} />
            </a>
            <a href="#">
              <FiYoutube size={30} />
            </a>
            <a href="#">
              <FiFacebook size={30} />
            </a>
          </div>
        </div>
      </div>

      {/* Galería de imágenes */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {visibleImages.map((image, index) => (
            <div key={index} className="w-full h-auto">
              <img
                src={image} // Cada imagen es una URL
                alt={`Image ${index + 1}`}
                className="w-full h-auto object-cover rounded-md" // Mantiene proporciones
                style={{
                  height: index % 2 === 0 ? '300px' : '200px', // Alternar alturas
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotosGallery;


