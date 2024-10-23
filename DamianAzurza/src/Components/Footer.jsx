import React from 'react';
import { FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi'; 

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
          <a href="https://www.youtube.com/redirect?event=channel_header&redir_token=QUFFLUhqblVVcnZjQW9HcnRsZ1pfZ1dsUnc2NTdwUlhLQXxBQ3Jtc0trbVdHQmQ0c2JPdzBGdkt4bi13UFZhOFNBbDNPUHgtVUhtVDlSa0RnbTlKUi1tYW52WXVwMmVtYTVUWXZzTFQzbFFFdGE4M1BHX3ZuV2l5QVZJV1BfejBMeWc0anAyam9xZ3VWOFJHN0pWTVMzNDBiSQ&q=https%3A%2F%2Fwww.facebook.com%2Fdamianazurzamusician" className="text-fondoServicios hover:text-gray-800">
            <FiFacebook size={24} />
          </a>
          <a href="https://www.instagram.com/damian_azurza?igsh=MWtlazR0bGN6M3Zzaw==" className="text-fondoServicios hover:text-gray-800">
            <FiInstagram size={24} />
          </a>
          <a href="https://youtube.com/@damianazurza?si=vZdWXMG2EQJOFG2d" className="text-fondoServicios hover:text-gray-800">
            <FiYoutube size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
