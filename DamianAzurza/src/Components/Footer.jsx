import React from 'react';
import { FaFacebookSquare, FaYoutube } from 'react-icons/fa';
import { PiInstagramLogoFill } from "react-icons/pi"; 

const Footer = () => {
  return (
    <footer className="bg-fondoMas py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-fondoServicios font-Montserrat ">
        <p className="text-center text-fondoServicios font-Montserrat md:text-left mb-4 md:mb-0">
          Todos los derechos reservados Damián Azurza
        </p>
        <p className="text-center text-fondoServicios font-Montserrat md:text-right mb-4 md:mb-0">
          Seguime en las redes
        </p>
        <div className="flex space-x-4">
        <a href="https://www.instagram.com/damian_azurza?igsh=MWtlazR0bGN6M3Zzaw=="  target="_blank" className="text-gray-600 hover:text-gray-800">
              <PiInstagramLogoFill size={24} />
            </a>
            <a href="https://www.facebook.com/damianazurzamusician" target="_blank" className="text-gray-600 hover:text-gray-800">
              <FaFacebookSquare size={24} />
            </a>
            <a href="https://youtube.com/@damianazurza?si=vZdWXMG2EQJOFG2d" target="_blank" className="text-gray-600 hover:text-gray-800">
              <FaYoutube size={24} />
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
