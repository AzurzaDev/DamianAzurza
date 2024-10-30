import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'; 
import uno from "../assets/1.jpeg";
import dos from "../assets/2.png";
import tres from "../assets/3.jpg";

const VideosComponent = () => {
  const videoCards = [
    {
      title: 'Videos',
      image: uno,
      facebook: '#',
      instagram: '#',
      youtube: '#'
    },
    {
      title: 'Video 2',
      image: dos,
      facebook: '#',
      instagram: '#',
      youtube: '#'
    },
    {
      title: 'Video 3',
      image: tres,
      facebook: '#',
      instagram: '#',
      youtube: '#'
    },
  ];

  return (
    <div className="w-full mx-auto">
      {/* Sección superior con 4 rectángulos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-fondoMas p-8 gap-4">
        <div className="bg-fondoClarito content-center p-4 text-center w-full h-72 hover:bg-fondoServicios text-gray-200 group transition-colors duration-700">
          <p className="text-3xl md:text-5xl font-Montserrat font-semibold text-fondoServicios group-hover:text-gray-200 transition-colors duration-700">+ DE 20 AÑOS</p>
          <p className="text-lg md:text-xl font-Montserrat text-fondoServicios group-hover:text-gray-200 mt-4 transition-colors duration-700">EN LA MÚSICA</p>
        </div>
        <div className="bg-fondoClarito content-center p-4 text-center w-full h-72 hover:bg-fondoServicios group transition-colors duration-700">
          <p className="text-3xl md:text-5xl font-Montserrat font-semibold text-fondoServicios group-hover:text-gray-200 transition-colors duration-700">+ DE 150 SHOWS</p>
          <p className="text-lg md:text-xl font-Montserrat text-fondoServicios group-hover:text-gray-200 mt-4 transition-colors duration-700">EN VIVO</p>
        </div>
        <div className="bg-fondoClarito content-center p-4 text-center w-full h-72 hover:bg-fondoServicios group transition-colors duration-700">
          <p className="text-3xl md:text-5xl font-Montserrat font-semibold text-fondoServicios group-hover:text-gray-200 transition-colors duration-700">+ DE 20 AÑOS</p>
          <p className="text-lg md:text-xl font-Montserrat text-fondoServicios group-hover:text-gray-200 mt-4 transition-colors duration-700">EN LA MÚSICA</p>
        </div>
        <div className="bg-fondoClarito content-center p-4 text-center w-full h-72 hover:bg-fondoServicios group transition-colors duration-700">
          <p className="text-3xl md:text-5xl font-Montserrat font-semibold text-fondoServicios group-hover:text-gray-200 transition-colors duration-700">+ DE 20 AÑOS</p>
          <p className="text-lg md:text-xl font-Montserrat text-fondoServicios group-hover:text-gray-200 mt-4 transition-colors duration-700">EN LA MÚSICA</p>
        </div>
      </div>

      {/* Galería de videos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-black">
  {/* Imagen 1 - Ocupa el lado izquierdo (col-span-1 row-span-2) */}
  <div className="relative col-span-1 row-span-2 p-6 overflow-hidden group">
    <div className="transform transition duration-500 ease-in-out group-hover:scale-90 w-full h-full">
      <img
        src={videoCards[0].image}
        alt={videoCards[0].title}
        className="rounded-3xl shadow-lg w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-4">
        <h3 className="text-fondoClaro text-4xl md:text-6xl text-right mr-4 md:mr-16 mt-4 md:mt-16 font-Montserrat font-bold">
          {videoCards[0].title}
        </h3>
        <div className="flex justify-center space-x-2 md:space-x-4 mb-4 md:mt-0">
          <a href={videoCards[0].facebook} target="_blank" rel="noreferrer" className="text-white border-2 rounded-full p-2 md:p-4">
            <FaFacebookF size={24} />
          </a>
          <a href={videoCards[0].instagram} target="_blank" rel="noreferrer" className="text-white border-2 rounded-full p-2 md:p-4">
            <FaInstagram size={24} />
          </a>
          <a href={videoCards[0].youtube} target="_blank" rel="noreferrer" className="text-white border-2 rounded-full p-2 md:p-4">
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </div>
  </div>
 {/* Imagen 2 */}
 <div className="relative p-6 overflow-hidden group">
    <div className="transform transition duration-500 ease-in-out group-hover:scale-90 w-full h-full">
      <img
        src={videoCards[1].image}
        alt={videoCards[1].title}
        className="rounded-3xl shadow-lg w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-4">
        <h3 className="text-fondoClaro text-2xl md:text-4xl text-right mr-4 md:mr-16 mt-4 md:mt-8 font-Montserrat font-bold">
         
        </h3>
        <div className="flex justify-center space-x-2 md:space-x-4 mb-4">
          <a href={videoCards[1].facebook} target="_blank" rel="noreferrer" className="text-white border-2 rounded-full p-2 md:p-4">
            <FaFacebookF size={24} />
          </a>
          <a href={videoCards[1].instagram} target="_blank" rel="noreferrer" className="text-white border-2 rounded-full p-2 md:p-4">
            <FaInstagram size={24} />
          </a>
          <a href={videoCards[1].youtube} target="_blank" rel="noreferrer" className="text-white border-2 rounded-full p-2 md:p-4">
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Imagen 3 */}
  <div className="relative p-6 overflow-hidden group">
    <div className="transform transition duration-500 ease-in-out group-hover:scale-90 w-full h-full">
      <img
        src={videoCards[2].image}
        alt={videoCards[2].title}
        className="rounded-3xl shadow-lg w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-4">
        <h3 className="text-fondoClaro text-2xl md:text-4xl text-right mr-4 md:mr-16 mt-4 md:mt-8 font-Montserrat font-bold">
         
        </h3>
        <div className="flex justify-center space-x-2 md:space-x-4 mb-4">
          <a href={videoCards[2].facebook} target="_blank" rel="noreferrer" className="text-white border-2 rounded-full p-2 md:p-4">
            <FaFacebookF size={24} />
          </a>
          <a href={videoCards[2].instagram} target="_blank" rel="noreferrer" className="text-white border-2 rounded-full p-2 md:p-4">
            <FaInstagram size={24} />
          </a>
          <a href={videoCards[2].youtube} target="_blank" rel="noreferrer" className="text-white border-2 rounded-full p-2 md:p-4">
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
      
    </div>
  );
};

export default VideosComponent;

