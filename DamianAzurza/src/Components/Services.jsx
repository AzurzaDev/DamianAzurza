import { useState, useEffect } from "react";
import { FaMicrophone, FaHome } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import { PiMicrophoneStageFill } from "react-icons/pi";
import { BiHeadphone } from "react-icons/bi";
import debajoDeProyectos from "../assets/debajoDeProyectos.png";

const Services = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768); // Cambiar el valor según el breakpoint deseado

  const handleMouseEnter = (index) => {
    if (!isSmallScreen) {
      setActiveCard(index);
    }
  };

  const handleMouseLeave = () => {
    if (!isSmallScreen) {
      setActiveCard(null);
    }
  };

  const cards = [
    {
      title: "Dirección Musical",
      description: "Gestiono el entorno y las herramientas necesarias para hacer sonar tu propuesta artística, ya sea para una presentación en vivo o para la grabación de un material.",
      icon: <BiHeadphone className="text-9xl text-iconos mb-4" />,
      activeDescription: "Gestiono el entorno y las herramientas necesarias para hacer sonar tu propuesta artística, ya sea para una presentación en vivo o para la grabación de un material.",
      color: "bg-fondoServicios",
    },
    {
      title: "Producción Musical",
      description: "Tu proyecto artístico, solista o de banda puede hacerse realidad. Acercamos tu idea y juntos la potenciamos.",
      icon: <IoStatsChartSharp className="text-9xl text-iconos mb-4" />,
      activeDescription: "Tu proyecto artístico, solista o de banda puede hacerse realidad. ¡Contactame! escuchamos tu idea y juntos la potenciamos.",
      color: "bg-fondoServicios",
    },
    {
      title: "Solista",
      description: "Conocé mis diversos shows de covers y temas propios al mejor estilo hombre orquesta.",
      icon: <FaMicrophone className="text-9xl text-iconos mb-4" />,
      activeDescription: "Al mejor estilo Hombre Orquesta interpreto diversos shows de Rock & Pop Nacional e Internacional cantando en vivo, tocando la guitarra, pandereta en pie izquierdo y realizando beatbox para así sumergirte en un increíble viaje sonoro .",
      color: "bg-fondoServicios",
    },
    {
      title: "Duetos",
      description: "Junto a talentosos artistas realizo shows de Rock & Pop Nacional e Internacional.",
      icon: <PiMicrophoneStageFill className="text-9xl text-iconos mb-4" />,
      activeDescription:  "Junto a talentosos artistas realizo shows de Rock & Pop Nacional e Internacional.",
      color: "bg-fondoServicios",
    },
  ];

  useEffect(() => {
    const updateMedia = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  useEffect(() => {
    let interval;
    if (isSmallScreen) {
      let index = 0;
      interval = setInterval(() => {
        setActiveCard(index);
        index = (index + 1) % cards.length; // Ciclo entre las tarjetas
      }, 2000); // Cambiar cada 3 segundos
    }

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, [isSmallScreen]);

  return (
    <div id="servicios" className="overflow-x-hidden ">
      <div className="py-2 h-auto  object-contain relative">
        <img
          src={debajoDeProyectos}
          alt="Imagen Fija"
          className="w-full h-auto object-cover absolute top-0  left-0 opacity-40 z-0"
        />
      </div>
      <div className="mt-48 md:mt-56 sm:mt-2">
        <h2 className="text-3xl ms:text-6xl font-bold font-Montserrat text-center mb-12 text-fondoServicios z-1 relative">Servicios</h2>
        <p className="text-center text-lg md:text-2xl text-fondoServicios font-Montserrat  mb-12 z-1 relative">
        Compromiso, pasión y profesionalismo vas a encontrar en cualquiera de mis servicios.
        </p> 

        <div className="flex flex-col md:flex-row justify-center gap-8 z-1 relative">
          {cards.map((card, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className={`relative flex items-center justify-start p-4 shadow-lg transition-all duration-500 ease-out
                ${activeCard === index ? `${card.color} text-white` : "bg-fondoIconos text-gray-800"} 
                ${activeCard !== index && activeCard !== null ? "transform scale-95" : ""}`}
              style={{
                width: activeCard === index ? (isSmallScreen ? "95vw" : "400px") : "200px",
                height: "200px", // Mantiene altura fija
                overflow: "hidden",
                transition: "width 1.2s ease, transform 0.3s ease", // Suaviza la transformación
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
                <p className="text-xs mt-2">
                  {activeCard === index ? card.activeDescription : ""}
                </p>
                {card.icon}
              </div>
            </div>
          ))}
        </div>
         {/* Botón de "Contáctame" */}
         <div className="flex justify-center mt-8">
          <a
            href="#contacto" // Reemplaza esto por el id o sección de contacto
            className="bg-boton text-white font-Montserrat px-4 py-2 rounded-lg flex items-center shadow-lg hover:bg-gray-600 transition-colors duration-300"
          >
             Contactame<FaHome className="ml-2" />
          </a>
        </div>
      </div>
     
    </div>
  );
};

export default Services;
