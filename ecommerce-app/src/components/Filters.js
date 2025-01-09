// src/components/Filter.js

import React, { useState } from 'react';
import { FaFilter, FaDollarSign, FaStar } from 'react-icons/fa'; // Using react-icons for filter, price, and rating icons

const Filter = ({ onPriceChange, onRatingChange }) => {
  // State to manage the visibility of the filter options
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isRatingOpen, setIsRatingOpen] = useState(false);

  // Toggle the visibility of the "Filter by" options
  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

  // Toggle visibility for Price dropdown
  const togglePrice = () => setIsPriceOpen(!isPriceOpen);

  // Toggle visibility for Rating dropdown
  const toggleRating = () => setIsRatingOpen(!isRatingOpen);

  return (
    <div className="filter-container">
      <div className="filter-title" onClick={toggleFilter}>
        <FaFilter className="filter-icon" /> Filter by
      </div>

      {isFilterOpen && (
        <div className="filter-options">
          {/* Price Filter Section */}
          <div className="filter-item">
            <div className="filter-label" onClick={togglePrice}>
              <FaDollarSign className="filter-icon" /> Price
            </div>
            {isPriceOpen && (
              <div className="filter-dropdown">
                <select 
                  onChange={e => onPriceChange(e.target.value)} 
                  className="filter-select"
                >
                  <option value="">Choose Price</option>
                  <option value="low-high">Low to High</option>
                  <option value="high-low">High to Low</option>
                </select>
              </div>
            )}
          </div>

          {/* Rating Filter Section */}
          <div className="filter-item">
            <div className="filter-label" onClick={toggleRating}>
              <FaStar className="filter-icon" /> Rating
            </div>
            {isRatingOpen && (
              <div className="filter-dropdown">
                <select 
                  onChange={e => onRatingChange(e.target.value)} 
                  className="filter-select"
                >
                  <option value="">Choose Rating</option>
                  <option value="low-high">Low to High</option>
                  <option value="high-low">High to Low</option>
                </select>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
