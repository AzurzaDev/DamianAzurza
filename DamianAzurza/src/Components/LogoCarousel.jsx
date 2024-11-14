import React, { useEffect, useState } from "react";
import logo1 from "../assets/LogoH.png";
import logo2 from "../assets/LogoN.png";

const LogoCarousel = () => {
  const logos = [logo1, logo2];
  const instagramUrls = [
    "https://www.instagram.com/cuenta1", // URL para el primer logo
    "https://www.instagram.com/cuenta2", // URL para el segundo logo
  ];

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => setIsSmallScreen(window.innerWidth < 640);
    updateScreenSize(); // Ejecutar al montar el componente
    window.addEventListener("resize", updateScreenSize); // Escuchar cambios de tamaño

    return () => window.removeEventListener("resize", updateScreenSize); // Limpiar el listener
  }, []);

  return (
    <div className="bg-white py-4 overflow-hidden relative">
      <div className="flex animate-scroll space-x-8 sm:space-x-12 lg:space-x-20">
        {/* Condición para mostrar menos logos en pantallas pequeñas */}
        {[...Array(isSmallScreen ? 4 : 8)].map((_, i) => (
          <React.Fragment key={i}>
            {logos.map((logo, index) => (
              <a
                key={`${i}-${index}`}
                href={instagramUrls[index]}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 sm:mx-12 lg:mx-12"
              >
                <img
                  src={logo}
                  alt={`Logo ${index}`}
                  className="object-contain w-40 h-40 sm:w-48 sm:h-48 md:w-32 md:h-32 lg:w-40 lg:h-40" // Tamaños personalizados
                />
              </a>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;







