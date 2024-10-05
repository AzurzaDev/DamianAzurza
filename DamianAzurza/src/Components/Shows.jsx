import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegCalendarCheck } from "react-icons/fa"; // Importa el icono de calendario
import { getAllShows } from "../redux/Actions/actions";
import Pagination from "../utils/Pagination";

const Shows = () => {
  const dispatch = useDispatch();
  const shows = useSelector((state) => state.shows);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    dispatch(getAllShows());
  }, [dispatch]);

  if (loading) {
    return <p className="text-center">Cargando shows...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  const indexOfLastShow = currentPage * itemsPerPage;
  const indexOfFirstShow = indexOfLastShow - itemsPerPage;
  const currentShows = shows.slice(indexOfFirstShow, indexOfLastShow);
  const totalPages = Math.ceil(shows.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="max-w-6xl mx-auto my-8">
      <h2 className="text-3xl font-semibold text-center mb-4">
        Próximos Shows{" "}
      </h2>
      {currentShows.length > 0 ? (
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-8">
          {currentShows.map((show) => {
            const showDate = new Date(show.date);
            const options = { weekday: "long" }; 
            const dayOfWeek = showDate.toLocaleDateString("es-ES", options); // Obtiene el día de la semana en texto

            return (
                <div key={show.idShow} className="bg-white rounded-lg shadow-lg p-4">
  <img 
    src={show.images[0]} 
    alt={show.title} 
    className="w-74 h-74 object-cover   rounded-lg mb-2" // Establece el tamaño cuadrado y los bordes redondeados
  />
  <h3 className="font-bold text-lg">{show.title}</h3>
  <p className="text-gray-600">Dirección: {show.direccion}</p>
  <p className="text-gray-600">Ciudad: {show.city}</p>
  <p className="text-gray-600 flex items-center">
    <FaRegCalendarCheck className="mr-2" />
    Fecha: {dayOfWeek} {showDate.getDate()}/{showDate.getMonth() + 1}
  </p>
</div>

            );
          })}
        </div>
      ) : (
        <p className="text-center">No hay shows disponibles.</p>
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
};

export default Shows;
