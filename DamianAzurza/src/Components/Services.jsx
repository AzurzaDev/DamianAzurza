import { useState } from "react";
import { IoMdMusicalNote } from "react-icons/io";
import { AiFillPlayCircle } from "react-icons/ai";
import { PiUserSoundFill } from "react-icons/pi";
import { FaPauseCircle } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import { PiMicrophoneStageFill } from "react-icons/pi";
import { BiHeadphone } from "react-icons/bi";
import debajoDeProyectos from "../assets/debajoDeProyectos.png";

const Services = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveCard(index);
  };

  const handleMouseLeave = () => {
    setActiveCard(null);
  };

  const cards = [
    {
      title: "Dirección Musical",
      description: "Componente de ejemplo que describe la dirección musical de manera breve.",
      icon: <BiHeadphone className="text-9xl text-iconos mb-4" />,
      activeDescription: "Descripción extendida de la dirección musical.",
      color: "bg-fondoServicios",
    },
    {
      title: "Producción Musical",
      description: "Componente de ejemplo que describe la producción musical de manera breve.",
      icon: <IoStatsChartSharp className="text-9xl text-iconos mb-4" />,
      activeDescription: "Descripción extendida de la producción musical.",
      color: "bg-fondoServicios",
    },
    {
      title: "Solista",
      description: "Componente de ejemplo que describe el servicio de solista de manera breve.",
      icon: <FaMicrophone className="text-9xl text-iconos mb-4" />,
      activeDescription: "Descripción extendida del servicio de solista.",
      color: "bg-fondoServicios",
    },
    {
      title: "Duetos",
      description: "Componente de ejemplo que describe el servicio de duetos de manera breve.",
      icon: <PiMicrophoneStageFill className="text-9xl text-iconos mb-4" />,
      activeDescription: "Descripción extendida del servicio de duetos.",
      color: "bg-fondoServicios",
    },
  ];

  return (
    <div className="">
    <div className=" py-16 h-56 object-contain relative">
      <img
        src={debajoDeProyectos}
        alt="Imagen Fija"
        className="w-full h-full object-cover absolute top-0 left-0 opacity-20 z-0"
      />
      </div>
      <div className="mt-28">
      <h2 className="text-4xl font-bold font-Montserrat text-center mb-8 text-fondoServicios z-10 relative">Servicios</h2>
      <p className="text-center text-fondoServicios font-Montserrat font-semibold mb-12 z-10 relative">
        Figma lorem component variant main layer. Create scrolling team bold prototype background.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-8 z-10 relative">
        {cards.map((card, index) => (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className={`relative flex items-center justify-start p-4 shadow-lg transition-all duration-500 ease-out
              ${activeCard === index ? `${card.color} text-white` : "bg-fondoIconos text-gray-800"} 
              ${activeCard !== index && activeCard !== null ? "transform scale-95" : ""}`}
            style={{
              width: activeCard === index ? "400px" : "200px", // Expande la tarjeta a 400px en hover
              height: "200px", // Mantiene altura fija
              overflow: "hidden",
              transition: "width 0.5s ease, transform 0.3s ease", // Suaviza la transformación
            }}
          >
            {/* Icono y título */}
            <div
              className={`absolute top-4 left-0 right-0 h-full flex flex-col items-center justify-center transition-opacity duration-500
                ${activeCard === index ? "opacity-0" : "opacity-100"}`} // Hace que el ícono desaparezca
            >
              <h3 className="text-sm font-semibold mb-4 font-Montserrat uppercase text-iconos">{card.title}</h3>
              {card.icon}
            </div>

            {/* Texto que aparece cuando la tarjeta se expande */}
            <div
              className={`absolute left-0 top-0 h-full pl-[100px] flex flex-col justify-center transition-opacity duration-500 my-4
                ${activeCard === index ? "opacity-100" : "opacity-0"}`} // Hace que el texto aparezca
              style={{
                width: "300px", // Ancho para el texto cuando la tarjeta está expandida
              }}
            >
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="text-sm mt-2">
                {activeCard === index ? card.activeDescription : ""}
              </p>
              {card.icon}
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Services;
