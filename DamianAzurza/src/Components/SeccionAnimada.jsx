import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image1a from '../assets/solista1.jpeg';
import image1b from '../assets/solista2.jpeg';
import image2a from '../assets/duetos.jpeg';
import image2b from '../assets/direccionmusical1.jpeg';

const SeccionAnimada = () => {
  const [imageIndex1, setImageIndex1] = useState(0);
  const [imageIndex2, setImageIndex2] = useState(0);
  const [imageIndex3, setImageIndex3] = useState(0);
  const [imageIndex4, setImageIndex4] = useState(0);

  const images = [
    { src1: image1a, src2: image1b, title: "Solista", delay: 2000 },
    { src1: image2a, src2: image2b, title: "Duetos", delay: 3000 },
    { src1: image1a, src2: image1b, title: "Producción Musical", delay: 4000 },
    { src1: image2a, src2: image2b, title: "Dirección Musical", delay: 5000 },
  ];

  useEffect(() => {
    const interval1 = setInterval(() => {
      setImageIndex1((prevIndex) => (prevIndex + 1) % 2);
    }, images[0].delay);
    return () => clearInterval(interval1);
  }, []);

  useEffect(() => {
    const interval2 = setInterval(() => {
      setImageIndex2((prevIndex) => (prevIndex + 1) % 2);
    }, images[1].delay);
    return () => clearInterval(interval2);
  }, []);

  useEffect(() => {
    const interval3 = setInterval(() => {
      setImageIndex3((prevIndex) => (prevIndex + 1) % 2);
    }, images[2].delay);
    return () => clearInterval(interval3);
  }, []);

  useEffect(() => {
    const interval4 = setInterval(() => {
      setImageIndex4((prevIndex) => (prevIndex + 1) % 2);
    }, images[3].delay);
    return () => clearInterval(interval4);
  }, []);

  return (
    <div
      id="proyectos"
      className="w-full min-h-full bg-black flex flex-col md:flex-row justify-center items-center relative py-6 lg:py-10 xl:py-12"
    >
      {/* Contenedor en CSS Grid para alinear las imágenes */}
      <div className="grid grid-cols-2 gap-6 w-full md:w-2/3 xl:w-1/2 px-4 h-full">
        {/* Primera columna */}
        <div className="space-y-6">
          {/* Imagen 1 */}
          <div className="relative h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-3xl px-6 shadow-lg">
          <a href="#videos" className="block">
            <img
              src={imageIndex1 === 0 ? images[0].src1 : images[0].src2}
              alt={images[0].title}
              className="absolute w-full h-full object-cover transition-opacity duration-1000 rounded-3xl"
            />
            <span className="absolute inset-0 flex items-center justify-center text-white text-lg md:text-2xl lg:text-3xl font-semibold font-Montserrat z-1 bg-opacity-50 drop-shadow-lg">
              {images[0].title}
            </span>
            </a>
          </div>

          {/* Imagen 3 */}
          <div className="relative h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-3xl px-6 shadow-lg">
            <Link to={`/videos?category=${images[2].title}`}>
              <img
                src={imageIndex3 === 0 ? images[2].src1 : images[2].src2}
                alt={images[2].title.replace(" ", "\n")}
                className="absolute w-full h-full object-cover transition-opacity duration-1000 rounded-3xl"
              />
              <span className="absolute inset-0 flex items-center justify-center text-white text-lg md:text-2xl lg:text-4xl font-semibold font-Montserrat z-1 bg-opacity-50 drop-shadow-lg whitespace-pre-wrap leading-snug text-center">
                {images[2].title.replace(" ", "\n")}
              </span>
            </Link>
          </div>
        </div>

        {/* Segunda columna (con desplazamiento) */}
        <div className="space-y-6 mt-12 md:mt-20">
          {/* Imagen 2 */}
          <div className="relative h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-3xl px-6 shadow-lg">
          <a href="#videos" className="block">
            <img
              src={imageIndex2 === 0 ? images[1].src1 : images[1].src2}
              alt={images[1].title}
              className="absolute w-full h-full object-cover transition-opacity duration-1000 rounded-3xl"
            />
            <span className="absolute inset-0 flex items-center justify-center text-white text-lg md:text-2xl lg:text-3xl font-semibold font-Montserrat z-1 bg-opacity-50 drop-shadow-lg">
              {images[1].title}
            </span>
            </a>
          </div>

          {/* Imagen 4 */}
          <div className="relative h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-3xl px-6 shadow-lg">
            <Link to={`/videos?category=${images[3].title}`}>
              <img
                src={imageIndex4 === 0 ? images[3].src1 : images[3].src2}
                alt={images[3].title.replace(" ", "\n")}
                className="absolute w-full h-full object-cover transition-opacity duration-1000 rounded-3xl"
              />
              <span className="absolute inset-0 flex items-center justify-center text-white text-lg md:text-2xl lg:text-4xl font-semibold font-Montserrat z-1 bg-opacity-50 drop-shadow-lg whitespace-pre-wrap leading-snug text-center">
                {images[3].title.replace(" ", "\n")}
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Sección de texto */}
      <div className="flex flex-col items-start justify-center text-white mt-8 md:mt-0 md:ml-16 w-full md:w-1/3 lg:max-w-md xl:max-w-lg">
        <h2 className="text-3xl font-bold font-Montserrat text-start justify-start px-10 lg:px-16 xl:px-20">
          Qué hago
        </h2>
        <p className="mt-4 text-gray-300 text-lg md:text-2xl font-Montserrat leading-relaxed max-w-xl px-8 lg:px-10 xl:px-12 text-start">
          Desde hace 28 años, vivo y respiro música. A lo largo de este tiempo, he tenido el privilegio de trabajar con más de 300 artistas, tocar en los escenarios más íntimos, como así también en los teatros y escenarios más imponentes. He realizado giras y compartido momentos con reconocidos artistas, llevando mi música por Argentina, Uruguay y España. He creado jingles radiales, dirigido y producido musicales como así también a otros artistas.<br></br>
         </p>
          <p className="mt-4 text-gray-300 text-lg md:text-2xl font-Montserrat leading-relaxed max-w-xl px-8 lg:px-10 xl:px-12 text-start">
          Ya sea en banda, en dúo o en solitario, mi meta es siempre dar lo mejor y seguir así superándome. Cada encuentro con otro soñador de la música es el comienzo de un nuevo capítulo de aventuras por escribir. La música recorre cada fibra de mi ser, sin ella, simplemente no sería yo.
        </p>
        <p className="font-architects text-2xl font-normal leading-[41.4px] text-right self-end mt-4 px-8 lg:px-10 xl:px-12 decoration-none decoration-from-font ">
          Damián Azurza
        </p>
      </div>

    </div>

  );
};

export default SeccionAnimada;


