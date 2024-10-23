import { useState } from 'react';
import Logo from "../assets/LogoNavbar.png";
import { IoPersonSharp } from "react-icons/io5";
import { FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi'; 
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="shadow-md fixed w-full z-10 bg-white">
      <div className="container mx-auto max-w-screen-xl flex items-center justify-between p-4">
        
        {/* Logo */}
        <div className="flex items-center">
        <Link to="/"> {/* Envuelve el logo en un Link */}
            <img
              src={Logo}
              alt="Logo"
              className="w-10 md:w-20"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#inicio" className="text-gray-800 text-xl font-semibold hover:underline">
            Inicio
          </a>
          <a href="#shows" className="text-gray-800 text-xl font-semibold hover:underline">
            Shows
          </a>
          <a href="#" className="text-gray-800 text-xl font-semibold hover:underline">
            Proyectos
          </a>
          <a href="#servicios" className="text-gray-800 text-xl font-semibold hover:underline">
            Servicios
          </a>
          <a href="#bio" className="text-gray-800 text-xl font-semibold hover:underline">
            Bio
          </a>
          <a href="#contacto" className="text-gray-800 text-xl font-semibold hover:underline">
            Contacto
          </a>
        </div>

        {/* Redes Sociales y Botón Ingresar */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex space-x-4">
            <a href="https://www.youtube.com/redirect?event=channel_header&redir_token=QUFFLUhqblVVcnZjQW9HcnRsZ1pfZ1dsUnc2NTdwUlhLQXxBQ3Jtc0trbVdHQmQ0c2JPdzBGdkt4bi13UFZhOFNBbDNPUHgtVUhtVDlSa0RnbTlKUi1tYW52WXVwMmVtYTVUWXZzTFQzbFFFdGE4M1BHX3ZuV2l5QVZJV1BfejBMeWc0anAyam9xZ3VWOFJHN0pWTVMzNDBiSQ&q=https%3A%2F%2Fwww.facebook.com%2Fdamianazurzamusician" >
              <FiFacebook size={24} />
            </a>
            <a href="https://www.instagram.com/damian_azurza?igsh=MWtlazR0bGN6M3Zzaw==" className="text-gray-600 hover:text-gray-800">
              <FiInstagram size={24} />
            </a>
            <a href="https://youtube.com/@damianazurza?si=vZdWXMG2EQJOFG2d" className="text-gray-600 hover:text-gray-800">
              <FiYoutube size={24} />
            </a>
          </div>

          {/* Ingresar Button */}
          <button onClick={() => navigate("/login")} className="bg-boton text-white text-xl py-2 px-4 rounded-md flex items-center space-x-2">
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
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-fondoServicios font-Montserrat hover:bg-gray-100">
              Inicio
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-fondoServicios font-Montserrat hover:bg-gray-100">
              Shows
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-fondoServicios font-Montserrat hover:bg-gray-100">
              Proyectos
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-fondoServicios font-Montserrat hover:bg-gray-100">
              Servicios
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-fondoServicios font-Montserrat hover:bg-gray-100">
              Sobre mí
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-fondoServicios font-Montserrat hover:bg-gray-100">
              Contacto
            </a>
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
        </div>
      )}
    </div>
  );
};

export default Navbar;
