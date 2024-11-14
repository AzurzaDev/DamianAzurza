import paraBio from '../assets/imgBio.png';
import { FaDownload } from 'react-icons/fa'; // Importar el icono de descarga
import cvPDF from '../assets/CV.pdf'; // Importa tu archivo PDF

const Bio = () => {
  return (
    <div className='bg-fondoClaro p-6'>
      <div id='bio' className="relative flex flex-col md:flex-row items-center justify-between  md:m-4">
        {/* Imagen a la izquierda */}
        <div className="w-full md:w-full flex justify-center items-center mb-4 md:mb-0">
          <img
            src={paraBio}
            alt="Bio"
            className="w-4/5 h-auto  object-cover "
          />
        </div>

        {/* Contenedor de texto con ancho fijo */}
        <div className="w-full md:w-full text-center md:text-left max-w-[600px] mx-auto p-4">
          <h2 className="text-3xl md:text-5xl font-bold font-Montserrat mb-4 text-boton text-left">
            Ésta es mi Historia
          </h2>
          <p className="text-fondoServicios font-Montserrat text-lg mb-4 text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate
            neque non libero feugiat, sed posuere sem consequat. Proin efficitur
            dolor id lacus laoreet, eget lacinia ligula lacinia.
          </p>
          <p className="text-fondoServicios font-Montserrat text-lg mb-8 text-left">
            Mauris a sapien at libero gravida consequat. Nullam ornare diam et
            justo viverra, ut feugiat nunc venenatis.
          </p>
        </div>
        
        {/* Botón de descarga */}
        <a
          href={cvPDF} // Referencia al archivo PDF
          download="Mi-CV.pdf" // Nombre del archivo cuando se descargue
          className="absolute sm:p-8 bottom-4 right-4 bg-boton text-white px-4 py-2 rounded-lg flex items-center shadow-lg hover:bg-gray-600 transition-colors duration-300"
        >
          <FaDownload className="mr-2" /> Descargar CV
        </a>
      </div>

      {/* Sección superior con 4 rectángulos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-fondoMas p-8 gap-8">
        <div className="bg-fondoClarito content-center p-8 text-center w-full h-64 hover:bg-fondoServicios text-gray-200 group transition-colors duration-700">
          <p className="text-3xl md:text-4xl font-Montserrat font-semibold text-fondoServicios group-hover:text-gray-200 transition-colors duration-700">+ DE 20 AÑOS</p>
          <p className="text-lg md:text-xl font-Montserrat text-fondoServicios group-hover:text-gray-200 mt-4 transition-colors duration-700">EN LA MÚSICA</p>
        </div>
        <div className="bg-fondoClarito content-center p-8 text-center w-full h-64 hover:bg-fondoServicios group transition-colors duration-700">
          <p className="text-3xl md:text-4xl font-Montserrat font-semibold text-fondoServicios group-hover:text-gray-200 transition-colors duration-700">+ DE 1000 SHOWS</p>
          <p className="text-lg md:text-xl font-Montserrat text-fondoServicios group-hover:text-gray-200 mt-4 transition-colors duration-700">EN VIVO</p>
        </div>
        <div className="bg-fondoClarito content-center p-8 text-center w-full h-64 hover:bg-fondoServicios group transition-colors duration-700">
          <p className="text-3xl md:text-4xl font-Montserrat font-semibold text-fondoServicios group-hover:text-gray-200 transition-colors duration-700">+ DE 300 </p>
          <p className="text-lg md:text-xl font-Montserrat text-fondoServicios group-hover:text-gray-200 mt-4 transition-colors duration-700">COLABORACIONES<br></br> ARTÍSTICAS</p>
        </div>
        <div className="bg-fondoClarito content-center p-8 text-center w-full h-64 hover:bg-fondoServicios group transition-colors duration-700">
          <p className="text-3xl md:text-4xl font-Montserrat font-semibold text-fondoServicios group-hover:text-gray-200 transition-colors duration-700">95% DE MI TIEMPO DE</p>
          <p className="text-lg md:text-xl font-Montserrat text-fondoServicios group-hover:text-gray-200 mt-4 transition-colors duration-700">INSPIRACIÓN <br></br> CONSTANTE</p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
