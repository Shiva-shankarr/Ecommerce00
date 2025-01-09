// src/components/Pagination.js

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
    <div className="flex justify-center space-x-4 mt-8">
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => handlePageClick(number)}
          className={`px-4 py-2 rounded ${currentPage === number ? "bg-blue-500" : "bg-gray-700"}`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
