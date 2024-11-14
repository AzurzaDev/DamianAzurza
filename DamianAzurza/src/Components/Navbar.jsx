import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import Logo from "../assets/LogoNavbar.png";
import { IoPersonSharp } from "react-icons/io5";
import { FaFacebookSquare, FaYoutube } from 'react-icons/fa';
import { PiInstagramLogoFill } from "react-icons/pi";
import { logout } from '../redux/Actions/actions';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const adminInfo = useSelector((state) => state.adminInfo);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = () => {
    if (adminInfo) {
      dispatch(logout()); 
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="shadow-md fixed w-full z-10 bg-white">
      <div className="container mx-auto max-w-screen-xl flex items-center justify-between p-4">
        <div className="flex items-center">
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-10 md:w-20" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#inicio" className="text-gray-800 text-xl font-semibold hover:underline">Inicio</a>
          <a href="#shows" className="text-gray-800 text-xl font-semibold hover:underline">Shows</a>
          <a href="#proyectos" className="text-gray-800 text-xl font-semibold hover:underline">Proyectos</a>
          <a href="#servicios" className="text-gray-800 text-xl font-semibold hover:underline">Servicios</a>
          <a href="#bio" className="text-gray-800 text-xl font-semibold hover:underline">Sobre mí</a>
          <a href="#contacto" className="text-gray-800 text-xl font-semibold hover:underline">Contacto</a>
          {adminInfo && (
            <Link to="/panel" className="text-gray-800 text-xl font-semibold hover:underline">Panel</Link>
          )}
        </div>

        {/* Redes Sociales y Botón Ingresar/PANEL */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/damian_azurza?igsh=MWtlazR0bGN6M3Zzaw==" className="text-gray-600 hover:text-gray-800">
              <PiInstagramLogoFill size={24} />
            </a>
            <a href="https://www.facebook.com/damianazurzamusician" className="text-gray-600 hover:text-gray-800">
              <FaFacebookSquare size={24} />
            </a>
            <a href="https://youtube.com/@damianazurza?si=vZdWXMG2EQJOFG2d" className="text-gray-600 hover:text-gray-800">
              <FaYoutube size={24} />
            </a>
          </div>

          <button onClick={handleButtonClick} className="bg-boton text-white text-xl py-2 px-4 rounded-md flex items-center space-x-2">
            <span>{adminInfo ? 'Logout' : 'Ingresar'}</span>
            <IoPersonSharp />
          </button>
        </div>

        {/* Hamburger Menu Button for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 w-full">
            <a href="#inicio" className="block px-3 py-2 rounded-md text-base font-medium text-fondoServicios font-Montserrat hover:bg-gray-100">Inicio</a>
            <a href="#shows" className="block px-3 py-2 rounded-md text-base font-medium text-fondoServicios font-Montserrat hover:bg-gray-100">Shows</a>
            <a href="#proyectos" className="block px-3 py-2 rounded-md text-base font-medium text-fondoServicios font-Montserrat hover:bg-gray-100">Proyectos</a>
            <a href="#servicios" className="block px-3 py-2 rounded-md text-base font-medium text-fondoServicios font-Montserrat hover:bg-gray-100">Servicios</a>
            <a href="#bio" className="block px-3 py-2 rounded-md text-base font-medium text-fondoServicios font-Montserrat hover:bg-gray-100">Sobre mí</a>
            <a href="#contacto" className="block px-3 py-2 rounded-md text-base font-medium text-fondoServicios font-Montserrat hover:bg-gray-100">Contacto</a>
            {adminInfo && (
              <Link to="/panel" className="block px-3 py-2 rounded-md text-base font-medium text-fondoServicios font-Montserrat hover:bg-gray-100">Panel</Link>
            )}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/damianazurzamusician" className="text-fondoServicios hover:text-gray-800">
                <FaFacebookSquare size={24} />
              </a>
              <a href="https://www.instagram.com/damian_azurza?igsh=MWtlazR0bGN6M3Zzaw==" className="text-fondoServicios hover:text-gray-800">
                <PiInstagramLogoFill size={24} />
              </a>
              <a href="https://youtube.com/@damianazurza?si=vZdWXMG2EQJOFG2d" className="text-fondoServicios hover:text-gray-800">
                <FaYoutube size={24} />
              </a>
            </div>
            <button onClick={handleButtonClick} className="bg-boton text-white text-base py-1 px-2 rounded-md flex items-center ">
              <span>{adminInfo ? 'Logout' : 'Ingresar'}</span>
              <IoPersonSharp />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
