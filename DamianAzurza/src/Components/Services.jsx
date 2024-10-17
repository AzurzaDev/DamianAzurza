import { useState } from "react";
import { IoMdMusicalNote } from "react-icons/io";
import { AiFillPlayCircle } from "react-icons/ai";
import { PiUserSoundFill } from "react-icons/pi";
import { FaPauseCircle } from "react-icons/fa";
import debajoDeProyectos from "../assets/debajoDeProyectos.png";

const Services = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(index === activeCard ? null : index); // Alterna la selección de la tarjeta
  };

  const cards = [
    {
      title: "Dirección Musical",
      description: "Componente de ejemplo que describe la dirección musical de manera breve.",
      icon: <IoMdMusicalNote className="text-6xl text-gray-600 mb-4" />,
      activeDescription: "Descripción extendida de la dirección musical.",
      color: "bg-blue-600",
    },
    {
      title: "Producción Musical",
      description: "Componente de ejemplo que describe la producción musical de manera breve.",
      icon: <AiFillPlayCircle className="text-6xl text-gray-600 mb-4" />,
      activeDescription: "Descripción extendida de la producción musical.",
      color: "bg-green-600",
    },
    {
      title: "Solista",
      description: "Componente de ejemplo que describe el servicio de solista de manera breve.",
      icon: <PiUserSoundFill className="text-6xl text-gray-600 mb-4" />,
      activeDescription: "Descripción extendida del servicio de solista.",
      color: "bg-red-600",
    },
    {
      title: "Duetos",
      description: "Componente de ejemplo que describe el servicio de duetos de manera breve.",
      icon: <FaPauseCircle className="text-6xl text-gray-600 mb-4" />,
      activeDescription: "Descripción extendida del servicio de duetos.",
      color: "bg-purple-600",
    },
  ];

  return (
    <div className="bg-black py-16 -mt-16 relative">
      <img
        src={debajoDeProyectos}
        alt="Imagen Fija"
        className="w-full h-full object-cover absolute top-0 left-0 opacity-20 z-0"
      />
      <h2 className="text-3xl font-semibold text-center mb-8 text-white z-10 relative">Servicios</h2>
      <p className="text-center text-gray-500 mb-12 z-10 relative">
        Figma lorem component variant main layer. Create scrolling team bold prototype background.
      </p>

      <div className="flex justify-center gap-8 z-10 relative">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            className={`flex flex-col items-center text-center p-4 rounded-lg shadow-lg w-60 transition-all duration-500 
              ${activeCard === index ? `${card.color} text-white w-96 h-60 z-20` : "bg-white text-gray-800"} 
              ${activeCard !== null && activeCard !== index ? "opacity-0 absolute transform translate-x-20" : ""}`}
            style={{
              transform: activeCard === index ? "scale(1.2)" : "none",
              transition: "all 0.5s ease-in-out",
              position: activeCard !== null && activeCard !== index ? "absolute" : "relative",
              left: activeCard !== null && activeCard !== index ? `${(index - activeCard) * 120}px` : "0",
            }}
          >
            {/* El icono solo aparece si la tarjeta no está activa */}
            {activeCard !== index && card.icon}
            
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p className="text-sm mt-2">
              {activeCard === index ? card.activeDescription : card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;



