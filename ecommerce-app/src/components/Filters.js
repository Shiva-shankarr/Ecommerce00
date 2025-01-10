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
      {/* Filter by Section */}
      <div 
        className="filter-title d-flex align-items-center"
        onClick={toggleFilter}
        aria-expanded={isFilterOpen}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && toggleFilter()}
      >
        <FaFilter className="filter-icon me-2" /> Filter by
      </div>

      {isFilterOpen && (
        <div className="filter-options">
          {/* Price Filter Section */}
          <div className="filter-item">
            <div 
              className="filter-label d-flex align-items-center"
              onClick={togglePrice}
              aria-expanded={isPriceOpen}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && togglePrice()}
            >
              <FaDollarSign className="filter-icon me-2" /> Price
            </div>
            {isPriceOpen && (
              <div className="filter-dropdown mt-2">
                <select
                  onChange={(e) => onPriceChange(e.target.value)}
                  className="form-select"
                  aria-label="Filter by Price"
                >
                  <option value="" disabled selected>
                    Choose Price
                  </option>
                  <option value="low-high">Low to High</option>
                  <option value="high-low">High to Low</option>
                </select>
              </div>
            )}
          </div>

          {/* Rating Filter Section */}
          <div className="filter-item">
            <div 
              className="filter-label d-flex align-items-center"
              onClick={toggleRating}
              aria-expanded={isRatingOpen}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && toggleRating()}
            >
              <FaStar className="filter-icon me-2" /> Rating
            </div>
            {isRatingOpen && (
              <div className="filter-dropdown mt-2">
                <select
                  onChange={(e) => onRatingChange(e.target.value)}
                  className="form-select"
                  aria-label="Filter by Rating"
                >
                  <option value="" disabled selected>
                    Choose Rating
                  </option>
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
