// src/components/ProductCard.js

import React from 'react';

const ProductCard = ({ product }) => {
  const handleBuyNow = () => {
    window.open(`https://wa.me/?text=I%20am%20interested%20in%20buying%20${product.name}`, '_blank');
  };

  const handleCallNow = () => {
    window.location.href = `tel:${product.phone}`;
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold text-white">{product.name}</h2>
      <p className="text-gray-400 mb-4">{product.description}</p>
      <div className="flex justify-between items-center">
        <button
          onClick={handleBuyNow}
          className="bg-green-500 text-white py-2 px-4 rounded"
        >
          Buy Now
        </button>
        <button
          onClick={handleCallNow}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Call Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
