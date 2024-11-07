import React from "react";
import logo1 from "../assets/LogoH.png";
import logo2 from "../assets/LogoN.png";

const LogoCarousel = () => {
  const logos = [logo1, logo2];

  return (
    <div className="bg-white py-4 overflow-hidden relative">
      <div className="flex animate-scroll space-x-8 sm:space-x-12 lg:space-x-20">
        {/* Repetimos el contenedor varias veces para crear el efecto continuo */}
        {[...Array(8)].map((_, i) => (
          <React.Fragment key={i}>
            {logos.map((logo, index) => (
              <div key={`${i}-${index}`} className="mx-4 sm:mx-12 lg:mx-12">
                <img
                  src={logo}
                  alt={`Logo ${index}`}
                  className=" object-contain"
                />
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;


