import React from 'react';

// eslint-disable-next-line react/prop-types
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // const handleScroll = (direction) => {
  //   const container = document.getElementById("pagination-container");
  //   const scrollAmount = 100; // Cantidad a desplazar
  //   container.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  // };

  return (
    <div className="flex justify-center my-4">
      <div
        id="pagination-container"
        className="flex overflow-x-auto space-x-2 scrollbar-hidden"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {/* Puntos de paginación */}
        {[...Array(totalPages).keys()].map((page) => (
          <button
            key={page + 1}
            onClick={() => onPageChange(page + 1)}
            className={`w-4 h-4 rounded-full ${currentPage === page + 1 ? "bg-customBlue" : "bg-gray-400"} cursor-pointer`}
          />
        ))}
      </div>
    </div>
  );
};

export default Pagination;
