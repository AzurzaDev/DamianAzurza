import { useState, useEffect, useRef } from "react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import axios from 'axios'; // Asegúrate de que axios está instalado

const EscuchaMiMusica = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  let touchStartX = useRef(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:3001/carousel'); // Cambia esto según tu endpoint
        setImages(response.data); // Almacena las imágenes en el estado
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
    <div ref={carouselRef} className="relative w-full h-screen overflow-hidden flex justify-center items-center">
      {images.length > 0 && (
        <>
          <div className="w-full h-full">
            <img
              src={images[currentIndex].src} // Usa el campo 'src'
              alt={`Slide ${currentIndex}`}
              className="w-full h-full object-cover"
            />
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

          {/* Título y botón para la ruta */}
          <div className="absolute bottom-4 right-4 flex items-center">
           
            <a
              href={`/${images[currentIndex].ruta}`} // Redirige a la ruta
              className="bg-fondoServicios text-white px-4 py-2 rounded uppercase hover:bg-gray-600"
              target="_blank" // Abre en una nueva pestaña
              rel="noopener noreferrer"
            >
            {images[currentIndex].title}
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
