import React from 'react';
import { useNavigate } from 'react-router-dom'; // Asumiendo que estás usando React Router para la navegación
import uno from '../assets/dami.jpeg'; // Reemplaza con la ruta correcta de tus imágenes
import dos from '../assets/onlylovers.jpeg';
import tres from '../assets/guitarraVioleta.png';


const FotosComponent = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/fotos');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  grid-rows-3  h-screen bg-black">
      {/* Primera imagen grande con el título */}
      <div className="relative col-span-1 md:col-span-2 row-span-2">
        <img
          src={uno}
          alt="Foto 1"
          className="w-full h-screen object-cover"
        />
        {/* Título sobre la imagen */}
        <div className="absolute top-0 left-0 w-full h-full flex items-start justify-start p-4">
          <h1 className="text-white text-4xl font-bold">Fotos</h1>
        </div>
      </div>

      {/* Segunda imagen */}
      <div className="relative col-span-1 row-span-1 md:row-span-2">
        <img
          src={dos}
          alt="Foto 2"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Tercera imagen con el botón */}
      <div className="relative col-span-1 md:col-span-3 row-span-1">
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
