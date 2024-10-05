import { IoMdMusicalNote } from "react-icons/io";
import { AiFillPlayCircle } from "react-icons/ai";
import { PiUserSoundFill } from "react-icons/pi";
import { FaPauseCircle } from "react-icons/fa";

import paraProyectos from '../assets/paraProyectos.png';

const Projects = () => {
  return (
    <div className="relative w-full h-[200px] md:h-[400px] lg:h-[800px]">
   

      {/* Imagen de fondo */}
      <div className="relative w-full h-[200px] md:h-[400px] lg:h-[800px]">
        <img
          src={paraProyectos}
          alt="Imagen Fija"
          className="w-full h-full object-cover"
        />

        {/* Contenedor de los enlaces */}
        <div className="absolute bottom-4 left-0 right-0 w-full flex justify-center">
          <div className="grid grid-cols-2 gap-8 px-4 w-full max-w-xs md:max-w-lg lg:max-w-4xl lg:grid-cols-4">
            {/* Icono 1 */}
            <a href="/pagina1" className="flex flex-col items-center justify-center w-full bg-white rounded-lg shadow-lg opacity-80 p-2 md:p-4">
              <IoMdMusicalNote className="text-3xl text-gray-600 md:text-5xl lg:text-6xl" />
              <p className="mt-1 text-gray-800 text-xs md:text-sm lg:text-base">Dirección Musical</p>
            </a>

            {/* Icono 2 */}
            <a href="/pagina2" className="flex flex-col items-center justify-center w-full bg-white rounded-lg shadow-lg opacity-80 p-2 md:p-4">
              <AiFillPlayCircle className="text-3xl text-gray-600 md:text-5xl lg:text-6xl" />
              <p className="mt-1 text-gray-800 text-xs md:text-sm lg:text-base">Productor Musical</p>
            </a>

            {/* Icono 3 */}
            <a href="/pagina3" className="flex flex-col items-center justify-center w-full bg-white rounded-lg shadow-lg opacity-80 p-2 md:p-4">
              <PiUserSoundFill className="text-3xl text-gray-600 md:text-5xl lg:text-6xl" />
              <p className="mt-1 text-gray-800 text-xs md:text-sm lg:text-base">Solista</p>
            </a>

            {/* Icono 4 */}
            <a href="/pagina4" className="flex flex-col items-center justify-center w-full bg-white rounded-lg shadow-lg opacity-80 p-2 md:p-4">
              <FaPauseCircle className="text-3xl text-gray-600 md:text-5xl lg:text-6xl" />
              <p className="mt-1 text-gray-800 text-xs md:text-sm lg:text-base">Duetos</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;




