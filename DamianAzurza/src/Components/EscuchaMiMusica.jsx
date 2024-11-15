import { useState, useEffect, useRef } from "react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import { FaPlayCircle } from "react-icons/fa";
import axios from 'axios'; 
import image1 from '../assets/azurzaMovile1.jpeg';
import image2 from '../assets/azurzaMovile2.png';
import image3 from '../assets/azurzaMovile3.png'

const EscuchaMiMusica = () => {
  const [images, setImages] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  let touchStartX = useRef(0);

  // Detecta el tamaño de la pantalla
  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Ajusta este valor según el ancho deseado para pantallas pequeñas
    };
    window.addEventListener("resize", updateScreenSize);
    updateScreenSize(); // Verifica el tamaño al cargar la página
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

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

  // Temporizador para avanzar automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX.current - touchEndX > 50) {
      goToNext();
    } else if (touchStartX.current - touchEndX < -50) {
      goToPrevious();
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

  // Imágenes de reemplazo para pantallas pequeñas
  const defaultMobileImages = [
    image1, image2, image3
    // "https://i.pinimg.com/originals/c5/8f/1c/c58f1c948fa579f20eddca3590ed30fa.jpg",
    // "https://marketplace.canva.com/EAFLyOqaN8o/1/0/900w/canva-fondo-de-pantalla-para-celular-musica-minimalista-gzIedzqJDdg.jpg",
    // "http://todoimagenesde.com/wp-content/uploads/2017/04/FondoDePantalla3.jpg",
    // "https://informacionimagenes.net/wp-content/uploads/2017/02/Fondos-de-pantalla-HD-9.jpg",
    // "https://www.okchicas.com/wp-content/uploads/2019/03/Fondos-de-pantalla-para-celular-8.jpg"
  ];

  return (
    <div id="inicio" ref={carouselRef} className="relative w-full h-screen overflow-hidden flex justify-center items-center">
      {images.length > 0 && (
        <>
          <div className="w-full h-full relative">
            {images.map((image, index) => (
              <img
                key={index}
                src={isMobile ? defaultMobileImages[index % defaultMobileImages.length] : image.src} // Reemplaza la imagen solo en móviles
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
          <div
  className={`absolute ${
    isMobile
      ? "bottom-8 left-1/2 transform -translate-x-1/2 w-11/12"
      : "right-0 top-1/2 transform -translate-y-1/2 mr-8 mt-16"
  }`}
>
  <a
    href={images[currentIndex].ruta}
    className={`flex items-center justify-center bg-fondoServicios text-white px-6 py-2 font-Montserrat rounded-lg ${
      isMobile ? "text-base h-12" : "text-2xl"
    } hover:bg-gray-600`}
    target={
      images[currentIndex].ruta && images[currentIndex].ruta.startsWith("http")
        ? "_blank"
        : "_self"
    }
    rel="noopener noreferrer"
  >
    <span className={`${isMobile ? "truncate" : ""}`}>
      {images[currentIndex].title}
    </span>
    <FaPlayCircle className={`ml-2 ${isMobile ? "text-lg" : "text-xl"}`} />
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
