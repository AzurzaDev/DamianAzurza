import { useState, useEffect, useRef } from "react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import { FaPlayCircle } from "react-icons/fa";
import axios from 'axios'; 

const EscuchaMiMusica = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  let touchStartX = useRef(0);

  // Temporizador para avanzar automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [images.length]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('/carousel'); 
        setImages(response.data);
      } catch (error) {
        console.error('Error al obtener las imágenes:', error);
      }
    };

    fetchImages();
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleSwipeLeft = () => {
    goToNext();
  };

  const handleSwipeRight = () => {
    goToPrevious();
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX.current - touchEndX > 50) {
      handleSwipeLeft();
    } else if (touchStartX.current - touchEndX < -50) {
      handleSwipeRight();
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("touchstart", handleTouchStart);
      carousel.addEventListener("touchend", handleTouchEnd);
    }
    return () => {
      if (carousel) {
        carousel.removeEventListener("touchstart", handleTouchStart);
        carousel.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, []);

  return (
    <div id="inicio" ref={carouselRef} className="relative w-full h-screen overflow-hidden flex justify-center items-center">
    {images.length > 0 && (
      <>
        <div className="w-full h-full relative">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`Slide ${index}`}
              className={`fade ${index === currentIndex ? 'active' : ''} w-full h-full object-cover absolute top-0 left-0`}
            />
          ))}
        </div>
  
        {/* Botón para anterior */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 p-2 text-3xl sm:text-4xl text-white bg-gray-700 rounded-full hover:bg-gray-800 focus:outline-none focus:ring"
        >
          <BsFillArrowLeftCircleFill />
        </button>
  
        {/* Botón para siguiente */}
        <button
          onClick={goToNext}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 p-2 text-3xl sm:text-4xl text-white bg-gray-700 rounded-full hover:bg-gray-800 focus:outline-none focus:ring"
        >
          <BsFillArrowRightCircleFill />
        </button>
  
        {/* Título y botón para la ruta en el centro derecho */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-8 mt-16">
          <a
            href={images[currentIndex].ruta}
            className="flex items-center bg-fondoServicios text-white px-10 py-2 font-Montserrat rounded-lg text-2xl hover:bg-gray-600"
            target={images[currentIndex].ruta && images[currentIndex].ruta.startsWith('http') ? "_blank" : "_self"}
            rel="noopener noreferrer"
          >
            {images[currentIndex].title} <FaPlayCircle className="ml-2 text-lg" />
          </a>
        </div>
  
        {/* Indicadores de imágenes */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`block w-2 h-2 sm:w-3 sm:h-3 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-400"}`}
            ></span>
          ))}
        </div>
      </>
    )}
  </div>
  
  );
};

export default EscuchaMiMusica;
