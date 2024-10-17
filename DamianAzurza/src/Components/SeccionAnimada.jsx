import { useState, useEffect } from "react";
import image1a from '../assets/duetos.png';
import image1b from '../assets/produccion.png';
import image2a from '../assets/direccion.png';
import image2b from '../assets/solista.png';

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
    <div className="w-full h-screen bg-black flex justify-center items-center">
      <div className="grid grid-cols-3 gap-4 w-3/4 h-auto">
        <div className="col-span-2 grid grid-cols-2 gap-2">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative w-full overflow-hidden rounded-lg shadow-lg
                ${index === 0 || index === 3 ? 'h-60' : 'h-72'}`} // Alturas ajustadas
            >
              {/* Imagen 1 */}
              <img
                src={index === 0 ? image1a : index === 1 ? image2a : index === 2 ? image1a : image2a}
                alt="Image 1"
                className={`absolute w-full h-full object-contain rounded-lg transition-opacity duration-1000 
                  ${index === 0 && imageIndex1 === 0 ? 'opacity-100' : index === 1 && imageIndex2 === 0 ? 'opacity-100' : 
                    index === 2 && imageIndex3 === 0 ? 'opacity-100' : index === 3 && imageIndex4 === 0 ? 'opacity-100' : 'opacity-0'}`}
              />

              {/* Imagen 2 */}
              <img
                src={index === 0 ? image1b : index === 1 ? image2b : index === 2 ? image1b : image2b}
                alt="Image 2"
                className={`absolute w-full h-full object-contain rounded-lg transition-opacity duration-1000 
                  ${index === 0 && imageIndex1 === 1 ? 'opacity-100' : index === 1 && imageIndex2 === 1 ? 'opacity-100' : 
                    index === 2 && imageIndex3 === 1 ? 'opacity-100' : index === 3 && imageIndex4 === 1 ? 'opacity-100' : 'opacity-0'}`}
              />

              {/* Título */}
              <span className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold z-10">
                {image.title}
              </span>
            </div>
          ))}
        </div>

        {/* Columna para el texto */}
        <div className="flex flex-col items-center justify-center text-white text-center bg-black p-4">
          <h2 className="text-3xl font-bold">Qué hago</h2>
          <p className="mt-4 text-gray-300 text-lg">
            Lorem ipsum dolor sit amet consectetur. Purus dui.
            Lorem ipsum dolor sit amet consectetur. Purus dui.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeccionAnimada;









