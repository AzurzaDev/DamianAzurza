import { useState } from 'react';
import Logo from "../assets/LogoNavbar.png";
import { IoPersonSharp } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="shadow-md fixed w-full z-10 bg-white">
      <div className="container mx-auto max-w-screen-xl flex items-center justify-between p-4">
        
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className="w-10 md:w-20"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-800 text-xl font-semibold hover:underline">
            Inicio
          </a>
          <a href="#" className="text-gray-800 text-xl font-semibold hover:underline">
            Shows
          </a>
          <a href="#" className="text-gray-800 text-xl font-semibold hover:underline">
            Proyectos
          </a>
          <a href="#" className="text-gray-800 text-xl font-semibold hover:underline">
            Servicios
          </a>
          <a href="#" className="text-gray-800 text-xl font-semibold hover:underline">
            Bio
          </a>
          <a href="#" className="text-gray-800 text-xl font-semibold hover:underline">
            Contacto
          </a>
        </div>

        {/* Ingresar Button */}
        <div className="hidden md:block">
          <button className="bg-boton text-white text-xl py-2 px-4 rounded-md flex items-center space-x-2">
            <span>Ingresar</span>
            <IoPersonSharp />
          </button>
        </div>

        {/* Hamburger Menu Button for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden w-full"> {/* Aseguramos que el menú móvil ocupe todo el ancho */}
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 w-full"> {/* Ocupa 100% del ancho */}
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100">
              Inicio
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100">
              Shows
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100">
              Proyectos
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100">
              Servicios
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100">
              Bio
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100">
              Contacto
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

