import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegCalendarCheck } from "react-icons/fa";
import { getAllShows } from "../redux/Actions/actions";
import Pagination from "../utils/Pagination";
import ImagenDebajoCarrousel from "../Components/ImagenDebajoCarrousel";
import Popup from "../Components/Popup";

const formatDate = (dateString) => {
  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('es-ES', options).format(date);
};

const Shows = () => {
  const dispatch = useDispatch();
  const shows = useSelector((state) => state.shows);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [selectedShow, setSelectedShow] = useState(null); // Estado para el show seleccionado

  useEffect(() => {
    dispatch(getAllShows());
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1); // 1 item por página en pantallas pequeñas
      } else {
        setItemsPerPage(3); // 3 items por página en pantallas grandes
      }
    };

    handleResize(); // Llama la función al cargar
    window.addEventListener("resize", handleResize); // Añade listener

    return () => window.removeEventListener("resize", handleResize); // Limpieza
  }, []);

  const handleShowClick = (show) => {
    setSelectedShow(show); // Establece el show seleccionado
  };

  const closePopup = () => {
    setSelectedShow(null); // Cierra el popup
  };

  if (loading) {
    return <p className="text-center">Cargando shows...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  const sortedShows = [...shows].sort((a, b) => new Date(a.date) - new Date(b.date));

  const indexOfLastShow = currentPage * itemsPerPage;
  const indexOfFirstShow = indexOfLastShow - itemsPerPage;
  const currentShows = sortedShows.slice(indexOfFirstShow, indexOfLastShow);

  return (
    <div id="shows">
      <ImagenDebajoCarrousel />
      <div className="max-w-6xl mx-auto my-8">
        
        {currentShows.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {currentShows.map((show) => (
              <div
                key={show.idShow}
                className="bg-white rounded-lg shadow-lg p-4 cursor-pointer"
                onClick={() => handleShowClick(show)}
              >
                <img
                  src={show.images[0]}
                  alt={show.title}
                  className="w-74 h-74 object-cover rounded-lg mb-2"
                />
                <h3 className="font-bold font-Montserrat text-lg">{show.title}</h3>
                <p className="text-gray-600 font-Montserrat">{show.direccion}</p>
                <p className="text-boton font-Montserrat uppercase font-bold flex items-center">
                  <FaRegCalendarCheck className="mr-2" />
                  {formatDate(show.date)}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">No hay shows disponibles</p>
        )}
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(shows.length / itemsPerPage)}
          onPageChange={setCurrentPage}
        />
      </div>
      {selectedShow && <Popup show={selectedShow} onClose={closePopup} />} {/* Renderiza el popup si hay un show seleccionado */}
    </div>
  );
};

export default Shows;
