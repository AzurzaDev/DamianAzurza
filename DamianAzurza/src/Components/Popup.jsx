import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const formatDate = (dateString) => {
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('es-ES', options).format(date);
};

const Popup = ({ show, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-white bg-opacity-90">
            <div className="bg-white shadow-lg p-4 md:p-16 relative w-11/12 md:w-3/4 lg:w-1/2 flex flex-col md:flex-row">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-600">
                    X
                </button>
                {/* Mitad izquierda con imagen y redes sociales */}
                <div className="w-full md:w-1/2 p-4 flex flex-col items-center">
                    <img src={show.images[0]} alt={show.title} className="mb-4 rounded-2xl w-full" />
                    {/* Redes sociales debajo de la imagen */}
                    <div className="flex justify-center mt-4 space-x-4">
                        <a href="https://www.facebook.com/damianazurzamusician" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-boton h-6 w-6" />
                        </a>
                        <a href="https://www.instagram.com/damian_azurza" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-boton h-6 w-6" />
                        </a>
                        <a href="https://www.youtube.com/user/damianazurza" target="_blank" rel="noopener noreferrer">
                            <FaYoutube className="text-boton h-6 w-6" />
                        </a>
                    </div>
                </div>
                {/* Mitad derecha con detalles y botón */}
                <div className="w-full md:w-1/2 p-4">
                    <h2 className="text-2xl text-boton font-Montserrat font-bold">{show.title}</h2>
                    <h4 className="text-lg text-boton mb-6 font-Montserrat font-semibold uppercase">{formatDate(show.date)}</h4>
                    <p className="text-gray-700 font-Montserrat mt-2">{show.description}</p>
                    <p className="text-gray-600 font-Montserrat">{show.city}</p>
                    {/* Botón de reserva */}
                    <div className="flex justify-end text-center mt-4">
                        <a href={show.src} className="px-4 py-2 font-Montserrat bg-boton text-white rounded hover:bg-gray-600 w-full">
                            Reservar
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;
