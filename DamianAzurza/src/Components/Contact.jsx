import React from 'react';
import { FiSend } from 'react-icons/fi'; // Ícono para el botón
import paraContacto from '../assets/paraContacto.png';

const Contact = () => {
  return (
    <div 
      className="relative flex flex-col md:flex-row items-center justify-between bg-white p-8 md: m-8"
      style={{ backgroundImage: `url(${paraContacto})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
    >
      {/* Capa semitransparente para que el texto y el formulario sean más legibles */}
      <div className="absolute inset-0 bg-white/70"></div>

      {/* Izquierda - Texto */}
      <div className="relative w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 p-8">
        <h2 className="text-3xl font-bold mb-2 text-fondoServicios font-Montserrat">Contacto</h2>
        <p className="text-fondoServicios font-Montserrat mb-4">
          Para contrataciones de música en vivo, producción o dirección musical.
        </p>
        <p className="text-fondoServicios font-Montserrat mb-4">
          DAMIÁN AZURZA
        </p>
        <p className="text-fondoServicios font-Montserrat mb-2">
          damianazurza@gmail.com
        </p>
        <p className="text-fondoServicios font-Montserrat mb-8">
          3415898335
        </p>

        {/* Input de suscripción */}
        <div className="flex items-center md: flex-row space-x-2 justify-center md:justify-start">
          <input
            type="email"
            placeholder="Suscribirte y te cuento mis novedades"
            className="w-64 px-4 py-2 border bg-fondoMas font-Montserrat border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <button className="px-4 py-2 bg-fondoServicios font-Montserrat text-white rounded-lg shadow-lg hover:bg-gray-900 flex items-center">
            Enviar <FiSend className="ml-2" /> {/* Ícono de enviar */}
          </button>
        </div>
      </div>

      {/* Derecha - Formulario */}
      <div className="relative w-full md:w-1/2 p-8">
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full px-4 py-2 border bg-fondoMas font-Montserrat border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border bg-fondoMas font-Montserrat border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <textarea
            placeholder="Mensaje"
            rows="4"
            className="w-full px-4 py-2 border bg-fondoMas font-Montserrat border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          ></textarea>
          <button className="w-full px-4 py-2 bg-fondoServicios font-Montserrat text-white rounded-lg shadow-lg hover:bg-gray-900 flex items-center justify-center">
            Enviar <FiSend className="ml-2" /> {/* Ícono de enviar */}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
