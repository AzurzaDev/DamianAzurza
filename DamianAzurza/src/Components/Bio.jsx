import paraBio from '../assets/paraBio.jpg';
import { FaDownload } from 'react-icons/fa'; // Importar el icono de descarga
import cvPDF from '../assets/CV.pdf'; // Importa tu archivo PDF

const Bio = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between bg-fondoClaro p-8">
      {/* Imagen a la izquierda */}
      <div className="w-full md:w-1/2 flex justify-center items-center mb-4 md:mb-0">
        <img
          src={paraBio}
          alt="Bio"
          className="w-4/5 h-auto rounded-lg object-cover shadow-lg"
        />
      </div>

      {/* Texto a la derecha */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-5xl font-bold font-Montserrat mb-4 text-center text-boton">
          Esta es mi Historia
        </h2>
        <p className="text-gray-600 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate
          neque non libero feugiat, sed posuere sem consequat. Proin efficitur
          dolor id lacus laoreet, eget lacinia ligula lacinia.
        </p>
        <p className="text-gray-600 text-lg mt-4">
          Mauris a sapien at libero gravida consequat. Nullam ornare diam et
          justo viverra, ut feugiat nunc venenatis.
        </p>
      </div>

      {/* Botón de descarga */}
      <a
        href={cvPDF} // Referencia al archivo PDF
        download="Mi-CV.pdf" // Nombre del archivo cuando se descargue
        className="absolute bottom-4 right-4 bg-boton text-white px-4 py-2 rounded-lg flex items-center shadow-lg hover:bg-gray-600 transition-colors duration-300"
      >
        <FaDownload className="mr-2" /> Descargar CV
      </a>
    </div>
  );
};

export default Bio;

  
  