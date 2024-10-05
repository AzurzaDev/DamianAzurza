import { IoMdMusicalNote } from "react-icons/io";
import { AiFillPlayCircle } from "react-icons/ai";
import { PiUserSoundFill } from "react-icons/pi";
import { FaPauseCircle } from "react-icons/fa";

import paraProyectos from '../assets/paraProyectos.png'

const Projects = () => {
  return (
    <div className="relative w-full h-[200px] md:h-[400px] lg:h-[1200px]">
      
      <img
        src={paraProyectos}
        alt="Imagen Fija"
        className="w-full h-full object-cover"
      />

     
      <div className="absolute bottom-4 gap-4 left-0 right-0 w-full flex flex-wrap justify-center px-2 md:gap-8 md:bottom-10 lg:gap-12">
        {/* Icono 1 */}
        <a href="/pagina1" className="flex flex-col items-center justify-center w-24 h-24 bg-white rounded-lg shadow-lg opacity-80 md:w-40 md:h-36 lg:w-48 lg:h-40">
          <IoMdMusicalNote className="text-4xl text-gray-600 md:text-6xl lg:text-9xl" />
          <p className="mt-1 text-gray-800 text-sm md:text-base lg:text-lg">Dirección Musical</p>
        </a>

        {/* Icono 2 */}
        <a href="/pagina2" className="flex flex-col items-center justify-center w-24 h-24 bg-white rounded-lg shadow-lg opacity-80 md:w-40 md:h-36 lg:w-48 lg:h-40">
          <AiFillPlayCircle className="text-4xl text-gray-600 md:text-6xl lg:text-9xl" />
          <p className="mt-1 text-gray-800 text-sm md:text-base lg:text-lg">Productor Musical</p>
        </a>

        {/* Icono 3 */}
        <a href="/pagina3" className="flex flex-col items-center justify-center w-24 h-24 bg-white rounded-lg shadow-lg opacity-80 md:w-40 md:h-36 lg:w-48 lg:h-40">
          <PiUserSoundFill className="text-4xl text-gray-600 md:text-6xl lg:text-9xl" />
          <p className="mt-1 text-gray-800 text-sm md:text-base lg:text-lg">Solista</p>
        </a>

        {/* Icono 4 */}
        <a href="/pagina4" className="flex flex-col items-center justify-center w-24 h-24 bg-white rounded-lg shadow-lg opacity-80 md:w-40 md:h-36 lg:w-48 lg:h-40">
          <FaPauseCircle className="text-4xl text-gray-600 md:text-6xl lg:text-9xl" />
          <p className="mt-1 text-gray-800 text-sm md:text-base lg:text-lg">Duetos</p>
        </a>
      </div>
    </div>
  );
};

export default Projects;


