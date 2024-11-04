import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegCalendarCheck } from "react-icons/fa";
import { getAllShows } from "../redux/Actions/actions";
import ImagenDebajoCarrousel from "../Components/ImagenDebajoCarrousel";
import Popup from "../Components/Popup";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "./Shows.css";

const formatDate = (dateString) => {
  const options = { weekday: "long", day: "numeric", month: "long" };
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("es-ES", options).format(date);
};

const Shows = () => {
  const dispatch = useDispatch();
  const shows = useSelector((state) => state.shows);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    dispatch(getAllShows());
  }, [dispatch]);

  const handleShowClick = (show) => {
    setSelectedShow(show);
  };

  const closePopup = () => {
    setSelectedShow(null);
  };

  if (loading) {
    return <p className="text-center">Cargando shows...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div id="shows">
      <ImagenDebajoCarrousel />
      <div className="max-w-6xl mx-auto my-12">
        {shows.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {shows.map((show) => (
              <SwiperSlide key={show.idShow} className="cursor-pointer">
                <div
                  className="bg-white rounded-lg  h-[320px] flex flex-col justify-between md:m-4"
                  onClick={() => handleShowClick(show)}
                >
                  {/* Imagen sin márgenes, ocupando todo el ancho */}
                  <div className="w-full">
                    <img
                      src={show.images[0]}
                      alt={show.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  {/* Contenedor para los textos con margen */}
                  <div className="p-4">
                    <h3 className="font-bold font-Montserrat text-lg overflow-hidden text-ellipsis whitespace-nowrap">
                      {show.title}
                    </h3>
                    <p className="text-gray-600 font-Montserrat text-xs overflow-hidden text-ellipsis whitespace-nowrap">
                      {show.direccion}
                    </p>
                    {/* Nueva estructura para la dirección y la fecha en dos columnas */}
                    <div className="flex justify-between items-center mt-2 gap-2">
                      <p className="text-boton font-Montserrat uppercase font-semibold text-xs flex items-center justify-end">
                        <FaRegCalendarCheck className="mr-2 w-8 h-auto" />
                        {formatDate(show.date)}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-center">No hay shows disponibles</p>
        )}
      </div>
      {selectedShow && <Popup show={selectedShow} onClose={closePopup} />}
    </div>
  );
};

export default Shows;
