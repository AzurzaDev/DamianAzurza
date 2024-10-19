import React from 'react';
import { useNavigate } from 'react-router-dom'; // Asumiendo que estás usando React Router para la navegación
import uno from '../assets/dami.jpeg'; // Reemplaza con la ruta correcta de tus imágenes
import dos from '../assets/onlylovers.jpeg';
import tres from '../assets/guitarraVioleta.png';

const FotosComponent = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/fotos'); // Cambia '/nueva-ruta' por el componente al que deseas redirigir
  };

  return (
    <div className="grid grid-cols-2 grid-rows-2  h-screen">
      {/* Primera imagen grande con el título */}
      <div className="relative col-span-1 row-span-2">
        <img
          src={uno}
          alt="Foto 1"
          className="w-full h-full object-cover"
        />
        {/* Título sobre la imagen */}
        <div className="absolute top-0 left-0 w-full h-full flex items-start justify-start p-4">
          <h1 className="text-white text-4xl font-bold">Fotos</h1>
        </div>
      </div>

      {/* Segunda imagen */}
      <div className="relative">
        <img
          src={dos}
          alt="Foto 2"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Tercera imagen con el botón */}
      <div className="relative">
        <img
          src={tres}
          alt="Foto 3"
          className="w-full h-full object-cover"
        />
        {/* Botón sobre la tercera imagen */}
        <div className="absolute bottom-4 right-4">
          <button
            onClick={handleButtonClick}
            className="border-2  text-white font-semibold font-Montserrat py-2 px-4 text-2xl rounded-full"
          >
            Ver más fotos
          </button>
        </div>
      </div>
    </div>
  );
};

export default FotosComponent;
