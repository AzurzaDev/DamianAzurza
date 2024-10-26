import { Link } from 'react-router-dom';
import Navbar from '../Navbar';


const PanelPage = () => {
  return (

    <div className="mb-64 pt-20 p-8"> {/* Agregado pt-20 para el margen superior */}
      <div className='fixed top-0 left-0 z-50 w-full'>
            <Navbar />
          </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 font-nunito lg:grid-cols-3 gap-6 mt-14">
        <Link
          to="/panel/contact"
          className="bg-white font-nunito border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105 p-6 flex items-center justify-center"
        >
          <div className="text-center">
            <h2 className="text-xl font-semibold font-nunito  text-blue-500 mb-2">Listar Contactos</h2>
            <p className="text-gray-600 font-nunito ">Administra y visualiza los detalles de los Contactos</p>
          </div>
        </Link>
        <Link
          to="/panel/shows"
          className="bg-white border font-nunito  border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105 p-6 flex items-center justify-center"
        >
          <div className="text-center">
            <h2 className="text-xl font-semibold font-nunito  text-blue-500 mb-2">Gestionar Shows</h2>
            <p className="text-gray-600 font-nunito ">Cambiar imagenes Editar Lugares y Fechas</p>
          </div>
        </Link>
        <Link
          to="/panel/Images"
          className="bg-white border font-nunito  border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105 p-6 flex items-center justify-center"
        >
          <div className="text-center">
            <h2 className="text-xl font-semibold font-nunito  text-blue-500 mb-2">Gestionar Imagenes Principales</h2>
            <p className="text-gray-600 font-nunito ">Cargar y Eliminar Imagenes Principales.</p>
          </div>
        </Link>
        <Link
          to="/panel/Fotos"
          className="bg-white border font-nunito  border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105 p-6 flex items-center justify-center"
        >
          <div className="text-center">
            <h2 className="text-xl font-semibold font-nunito  text-blue-500 mb-2">Gestionar Fotos Bio</h2>
            <p className="text-gray-600 font-nunito ">Cargar y Eliminar Fotos Biografía.</p>
          </div>
        </Link>
        <Link
          to="/panel/Videos"
          className="bg-white border font-nunito  border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105 p-6 flex items-center justify-center"
        >
          <div className="text-center">
            <h2 className="text-xl font-semibold font-nunito  text-blue-500 mb-2">Gestionar Videos YouTube</h2>
            <p className="text-gray-600 font-nunito ">Cargar Videos por Artistas.</p>
          </div>
        </Link>
       
   
        
      </div>

    </div>
  );
};

export default PanelPage;