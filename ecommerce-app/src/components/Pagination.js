import React from "react";

const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center flex-wrap gap-2 mt-8">
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => handlePageClick(number)}
          className={`px-4 py-2 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
            currentPage === number
              ? "bg-blue-500 text-white"
              : "bg-gray-700 text-white hover:bg-gray-500"
          }`}
          aria-label={`Go to page ${number}`}
          tabIndex={0}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
