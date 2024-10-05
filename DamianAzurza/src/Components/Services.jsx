import { IoMdMusicalNote } from "react-icons/io";
import { AiFillPlayCircle } from "react-icons/ai";
import { PiUserSoundFill } from "react-icons/pi";
import { FaPauseCircle } from "react-icons/fa";

const Services = () => {
  return (
    <div className="bg-gray-100 py-16">
      <h2 className="text-3xl font-semibold text-center mb-8">Servicios</h2>
      <p className="text-center text-gray-500 mb-12">
        Figma lorem component variant main layer. Create scrolling team bold prototype background.
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-lg w-60">
          <IoMdMusicalNote className="text-6xl text-gray-600 mb-4" />
          <h3 className="text-xl font-semibold">Dirección Musical</h3>
          <p className="text-gray-500 mt-2">
            Componente de ejemplo que describe la dirección musical de manera breve.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-lg w-60">
          <AiFillPlayCircle className="text-6xl text-gray-600 mb-4" />
          <h3 className="text-xl font-semibold">Producción Musical</h3>
          <p className="text-gray-500 mt-2">
            Componente de ejemplo que describe la producción musical de manera breve.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-lg w-60">
          <PiUserSoundFill className="text-6xl text-gray-600 mb-4" />
          <h3 className="text-xl font-semibold">Solista</h3>
          <p className="text-gray-500 mt-2">
            Componente de ejemplo que describe el servicio de solista de manera breve.
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-lg w-60">
          <FaPauseCircle className="text-6xl text-gray-600 mb-4" />
          <h3 className="text-xl font-semibold">Duetos</h3>
          <p className="text-gray-500 mt-2">
            Componente de ejemplo que describe el servicio de duetos de manera breve.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
