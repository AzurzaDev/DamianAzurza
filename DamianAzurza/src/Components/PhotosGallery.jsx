import { FiInstagram, FiYoutube, FiFacebook } from "react-icons/fi";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import navbar2 from "../assets/debajoSlider.png";
import img1 from "../assets/solista.png";
import img2 from "../assets/produccion.png";
import img3 from "../assets/paraBio.jpg";
import img4 from "../assets/onlylovers.jpeg";
import img5 from "../assets/solista.png";
import img6 from "../assets/produccion.png";
import img7 from "../assets/paraBio.jpg";
import img8 from "../assets/onlylovers.jpeg";
import img9 from "../assets/solista.png";
import img10 from "../assets/produccion.png";
import img11 from "../assets/paraBio.jpg";
import img12 from "../assets/onlylovers.jpeg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];

const PhotosGallery = () => {
  const [visibleImages, setVisibleImages] = useState(images.slice(0, 4));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadMoreImages = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100 && !loading
      ) {
        setLoading(true);
        setVisibleImages((prevImages) => {
          const nextImages = images.slice(0, prevImages.length + 4);
          return nextImages.length > prevImages.length ? nextImages : prevImages;
        });
        setLoading(false);
      }
    };

    window.addEventListener("scroll", loadMoreImages);
    return () => window.removeEventListener("scroll", loadMoreImages);
  }, [loading]);

  return (
    <div className="bg-white">
      {/* Navbar con imagen de fondo */}
      <div
        className="relative w-full h-64 bg-cover bg-center"
        style={{
          backgroundImage: `url(${navbar2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col md:flex-row items-center justify-between p-4">
          {/* Logo */}
          <Link to="/">
          <img
            src="LogoNavbar.png"
            alt="Logo"
            className="w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-0"
          />
          </Link>
          {/* Título */}
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center w-full mb-2 md:mb-0">
            Fotos
          </h1>
          
          {/* Iconos de redes sociales */}
          <div className="flex space-x-4 text-white">
            <a href="#">
              <FiInstagram size={30} />
            </a>
            <a href="#">
              <FiYoutube size={30} />
            </a>
            <a href="#">
              <FiFacebook size={30} />
            </a>
          </div>
        </div>
      </div>

      {/* Galería de imágenes */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {visibleImages.map((image, index) => (
            <div key={index} className="w-full h-64">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotosGallery;


