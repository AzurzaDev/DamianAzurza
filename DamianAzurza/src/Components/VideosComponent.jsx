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
    <div className="w-full mx-auto ">
      {/* Sección superior con 4 rectángulos */}
      <div className="grid grid-cols-4   bg-fondoMas p-8 ">
        <div className="bg-fondoClarito content-center p-4 text-center  w-96 h-72">
          <p className="text-5xl font-Montserrat font-semibold text-fondoServicios">+ DE 20 AÑOS</p>
          <p className="text-xl font-Montserrat text-fondoServicios mt-4">EN LA MÚSICA</p>
        </div>
        <div className="bg-fondoClarito content-center p-4 text-center w-96 h-72 ">
          <p className="text-5xl font-Montserrat font-semibold text-fondoServicios">+ DE 150 SHOWS</p>
          <p className="text-xl font-Montserrat text-fondoServicios mt-4">EN VIVO</p>
        </div>
        <div className="bg-fondoClarito content-center p-4 text-center w-96 h-72">
          <p className="text-5xl font-Montserrat font-semibold text-fondoServicios">+ DE 20 AÑOS</p>
          <p className="text-xl font-Montserrat text-fondoServicios mt-4">EN LA MÚSICA</p>
        </div>
        <div className="bg-fondoClarito content-center p-4 text-center w-96 h-72">
          <p className="text-5xl font-Montserrat font-semibold text-fondoServicios">+ DE 20 AÑOS</p>
          <p className="text-xl font-Montserrat text-fondoServicios mt-4">EN LA MÚSICA</p>
        </div>
      </div>

      {/* Galería de videos */}
      <div className="grid grid-cols-2 ">
        {/* Imagen 1 - Ocupa el lado izquierdo (col-span-1 row-span-2) */}
        <div className="relative col-span-1 row-span-2">
          <img
            src={videoCards[0].image}
            alt={videoCards[0].title}
            className="rounded-3xl shadow-lg w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-4">
          <h3 className="text-fondoClaro text-6xl text-right mr-16 mt-16 font-Montserrat font-bold">{videoCards[0].title}</h3>
            <div className="flex justify-center space-x-4">
              <a href={videoCards[0].facebook} target="_blank" rel="noreferrer" className="text-white border-2 rounded-full p-4">
                <FaFacebookF size={48} />
              </a>
              <a href={videoCards[0].instagram} target="_blank" rel="noreferrer" className="text-white border-2 rounded-full p-4">
                <FaInstagram size={48} />
              </a>
              <a href={videoCards[0].youtube} target="_blank" rel="noreferrer" className="text-white border-2 rounded-full p-4">
                <FaYoutube size={48} />
              </a>
            </div>
          </div>
        </div>

        {/* Imagen 2 */}
        <div className="relative">
          <img
            src={videoCards[1].image}
            alt={videoCards[1].title}
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-4">
         
            <div className="flex justify-center space-x-4">
              <a href={videoCards[1].facebook} target="_blank" rel="noreferrer" className="text-white border-2 rounded-full p-4">
                <FaFacebookF size={48} />
              </a>
              <a href={videoCards[1].instagram} target="_blank" rel="noreferrer" className="text-white border-2 rounded-full p-4">
                <FaInstagram size={48} />
              </a>
              <a href={videoCards[1].youtube} target="_blank" rel="noreferrer" className="text-white border-2 rounded-full p-4">
                <FaYoutube size={48} />
              </a>
            </div>
          </div>
        </div>

        {/* Imagen 3 */}
        <div className="relative">
          <img
            src={videoCards[2].image}
            alt={videoCards[2].title}
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-4">
           
            <div className="flex justify-center space-x-4">
              <a href={videoCards[2].facebook} target="_blank" rel="noreferrer" className="text-white border-2 rounded-full p-4">
                <FaFacebookF size={48} />
              </a>
              <a href={videoCards[2].instagram} target="_blank" rel="noreferrer" className="text-white border-2 rounded-full p-4">
                <FaInstagram size={48} />
              </a>
              <a href={videoCards[2].youtube} target="_blank" rel="noreferrer" className="text-white border-2 rounded-full p-4">
                <FaYoutube size={48} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosComponent;
