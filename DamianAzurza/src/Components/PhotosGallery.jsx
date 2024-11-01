import { FiInstagram, FiYoutube, FiFacebook } from "react-icons/fi";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import navbar2 from "../assets/debajoSlider.png";
import Modal from 'react-modal';
import './PhotoGallery.css';


const PhotosGallery = () => {
  const [visibleImages, setVisibleImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [allImages, setAllImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('/fotos');
        const images = response.data.map(image => image.src);
        setAllImages(images);
        setVisibleImages(images.slice(0, 10));
      } catch (error) {
        console.error('Error al cargar las imágenes:', error);
      }
    };
    fetchImages();
  }, []);

  useEffect(() => {
    const loadMoreImages = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !loading) {
        setLoading(true);
        setVisibleImages(prevImages => {
          const nextImages = allImages.slice(prevImages.length, prevImages.length + 4);
          return [...prevImages, ...nextImages];
        });
        setLoading(false);
      }
    };
    window.addEventListener("scroll", loadMoreImages);
    return () => window.removeEventListener("scroll", loadMoreImages);
  }, [loading, allImages]);

  const openModal = (imageIndex) => setSelectedImage(imageIndex);
  const closeModal = () => setSelectedImage(null);
  const nextImage = () => setSelectedImage((selectedImage + 1) % allImages.length);
  const prevImage = () => setSelectedImage((selectedImage - 1 + allImages.length) % allImages.length);

  return (
    <div className="bg-white">
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
          <Link to="/">
            <img src="LogoNavbar.png" alt="Logo" className="w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-0" />
          </Link>
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center w-full mb-2 md:mb-0"></h1>
          {/* <div className="flex space-x-4 text-white">
            <a href="#"><FiInstagram size={30} /></a>
            <a href="#"><FiYoutube size={30} /></a>
            <a href="#"><FiFacebook size={30} /></a>
          </div> */}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
      <div className="photo-gallery container mx-auto px-4 py-8">
  {visibleImages.map((image, index) => (
    <motion.div
      key={index}
      className={`relative w-full h-auto cursor-pointer ${
        index % 4 === 0 || index % 4 === 2 ? 'wide-image' : ''
      }`}
      onClick={() => openModal(index)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <img
        src={image}
        alt={`Image ${index + 1}`}
        className="w-full h-full object-cover rounded-md"
      />
    </motion.div>
  ))}
</div>
      </div>

      {selectedImage !== null && (
        <Modal
          isOpen={selectedImage !== null}
          onRequestClose={closeModal}
          contentLabel="Imagen seleccionada"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
          overlayClassName="Overlay"
          ariaHideApp={false}
        >
          <div className="relative" onClick={closeModal}>
            <button onClick={closeModal} className="absolute top-2 right-2 text-white text-3xl font-bold">&times;</button>
            <img src={allImages[selectedImage]} alt={`Image ${selectedImage + 1}`} className="max-h-screen max-w-full object-contain" onClick={(e) => e.stopPropagation()} />
            <div className="absolute inset-0 flex items-center justify-between px-4">
              <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="text-white text-3xl">&#10094;</button>
              <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="text-white text-3xl">&#10095;</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default PhotosGallery;




