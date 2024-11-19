import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import uno from "../assets/1.jpeg";
import dos from "../assets/videosImg2.png";
import tres from "../assets/3.png";

const VideosComponent = () => {
  const videoCards = [
    {
      title: 'Videos',
      image: uno,
      facebook: 'https://www.facebook.com/damianazurzamusician',
      instagram: 'https://www.instagram.com/damian_azurza?igsh=MWtlazR0bGN6M3Zzaw==',
      youtube: 'https://youtube.com/@damianazurza?si=vZdWXMG2EQJOFG2d'
    },
    {
      title: 'Video 2',
      image: dos,
      facebook: 'https://www.facebook.com/damianazurzamusician',
      instagram: 'https://www.instagram.com/damian_azurza?igsh=MWtlazR0bGN6M3Zzaw==',
      youtube: 'https://youtube.com/@damianazurza?si=vZdWXMG2EQJOFG2d'
    },
    {
      title: 'Video 3',
      image: tres,
      facebook: 'https://www.facebook.com/damianazurzamusician',
      instagram: 'https://www.instagram.com/damian_azurza?igsh=MWtlazR0bGN6M3Zzaw==',
      youtube: 'https://youtube.com/@damianazurza?si=vZdWXMG2EQJOFG2d'
    },
  ];

  return (
    <div id="videos" className="w-full mx-auto bg-black py-4">
      <h3 className="text-white text-3xl md:text-4xl text-center font-semibold font-Montserrat">
        {videoCards[0].title}
      </h3>
      
      {/* Gallery of videos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Imagen 1 */}
        <div className="relative md:col-span-2 md:row-span-2 overflow-hidden group p-4">
          <div className="transform transition duration-500 ease-in-out group-hover:scale-95 w-full h-full">
            <img
              src={videoCards[0].image}
              alt={videoCards[0].title}
              className="rounded-3xl w-full h-full object-cover aspect-video shadow-[4px_4px_15px_rgba(200,200,200,0.5)]"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 flex justify-center space-x-2 md:space-x-4">
              <a href={videoCards[0].facebook} target="_blank" rel="noreferrer" className="text-white border-2 rounded-full p-2 xl:p-4 transform transition-transform duration-300 hover:scale-75">
                <FaFacebookF size={24} />
              </a>
              <a href={videoCards[0].instagram} target="_blank" rel="noreferrer" className="text-white border-2 rounded-full p-2 xl:p-4 transform transition-transform duration-300 hover:scale-75">
                <FaInstagram size={24} />
              </a>
              <a href={videoCards[0].youtube} target="_blank" rel="noreferrer" className="text-white border-2 rounded-full p-2 xl:p-4 transform transition-transform duration-300 hover:scale-75">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Image 2 */}
        <div className="relative overflow-hidden group p-4">
          <div className="transform transition duration-500 ease-in-out group-hover:scale-95 w-full h-full">
            <img
              src={videoCards[1].image}
              alt={videoCards[1].title}
              className="rounded-3xl w-full h-full object-cover aspect-video shadow-[4px_4px_15px_rgba(200,200,200,0.5)]"
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end p-4 bg-black bg-opacity-25">
              <div className="flex justify-center space-x-2 md:space-x-4 mb-4">
                <a href={videoCards[1].facebook} target="_blank" rel="noreferrer" className="text-white border-2 rounded-full p-2 xl:p-4 transform transition-transform duration-300 hover:scale-75">
                  <FaFacebookF size={24} />
                </a>
                <a href={videoCards[1].instagram} target="_blank" rel="noreferrer" className="text-white border-2 rounded-full p-2 xl:p-4 transform transition-transform duration-300 hover:scale-75">
                  <FaInstagram size={24} />
                </a>
                <a href={videoCards[1].youtube} target="_blank" rel="noreferrer" className="text-white border-2 rounded-full p-2 xl:p-4 transform transition-transform duration-300 hover:scale-75">
                  <FaYoutube size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Image 3 */}
        <div className="relative overflow-hidden group p-4">
          <div className="transform transition duration-500 ease-in-out group-hover:scale-95 w-full h-full">
            <img
              src={videoCards[2].image}
              alt={videoCards[2].title}
              className="rounded-3xl w-full h-full object-cover aspect-video shadow-[4px_4px_15px_rgba(200,200,200,0.5)]"
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end p-4 bg-black bg-opacity-25">
              <div className="flex justify-center space-x-2 md:space-x-4 mb-4">
                <a href={videoCards[2].facebook} target="_blank" rel="noreferrer" className="text-white border-2 rounded-full p-2 xl:p-4 transform transition-transform duration-300 hover:scale-75">
                  <FaFacebookF size={24} />
                </a>
                <a href={videoCards[2].instagram} target="_blank" rel="noreferrer" className="text-white border-2 rounded-full p-2 xl:p-4 transform transition-transform duration-300 hover:scale-75">
                  <FaInstagram size={24} />
                </a>
                <a href={videoCards[2].youtube} target="_blank" rel="noreferrer" className="text-white border-2 rounded-full p-2 xl:p-4 transform transition-transform duration-300 hover:scale-75">
                  <FaYoutube size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosComponent;
