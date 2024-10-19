import React from 'react';
import { FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi'; // Íconos de redes sociales

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
          <a href="#" className="text-fondoServicios hover:text-gray-800">
            <FiFacebook size={24} />
          </a>
          <a href="#" className="text-fondoServicios hover:text-gray-800">
            <FiInstagram size={24} />
          </a>
          <a href="#" className="text-fondoServicios hover:text-gray-800">
            <FiYoutube size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
