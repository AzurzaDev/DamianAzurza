import { useState, useEffect, useRef } from "react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";

const images = [
  "src/assets/escuchaMiMusica.png", // Ruta de las imágenes
  "src/assets/escuchamimusica2.png",
  "src/assets/escuchamimusica3.png",

];

const EscuchaMiMusica = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  let touchStartX = useRef(0); // Guardar posición inicial de touch

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Función para manejar el swipe hacia la izquierda (siguiente)
  const handleSwipeLeft = () => {
    goToNext();
  };

  // Función para manejar el swipe hacia la derecha (anterior)
  const handleSwipeRight = () => {
    goToPrevious();
  };

  // Manejo del evento de touch (inicio y fin del toque)
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX; // Guardar la posición inicial del touch
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX; // Posición final del touch
    if (touchStartX.current - touchEndX > 50) {
      // Swipe izquierda (más de 50px)
      handleSwipeLeft();
    } else if (touchStartX.current - touchEndX < -50) {
      // Swipe derecha (más de 50px)
      handleSwipeRight();
    }
  };

  // Agregar los eventos de touch a la referencia del carousel
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
    <div ref={carouselRef} className="relative w-full h-[230px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden flex justify-center items-center">
      <div className="w-full h-full">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Botón para anterior (se oculta en pantallas pequeñas) */}
      <button
        onClick={goToPrevious}
        className="hidden sm:block absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 p-2 text-3xl sm:text-4xl text-white bg-gray-700 rounded-full hover:bg-gray-800 focus:outline-none focus:ring"
      >
        <BsFillArrowLeftCircleFill />
      </button>

      {/* Botón para siguiente (se oculta en pantallas pequeñas) */}
      <button
        onClick={goToNext}
        className="hidden sm:block absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 p-2 text-3xl sm:text-4xl text-white bg-gray-700 rounded-full hover:bg-gray-800 focus:outline-none focus:ring"
      >
        <BsFillArrowRightCircleFill />
      </button>

      {/* Indicadores de imágenes */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`block w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default EscuchaMiMusica;





