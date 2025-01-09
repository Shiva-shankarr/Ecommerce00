import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductPage = () => {
  const { state } = useLocation();
  const { product } = state;

  return (
    <div className="py-16">
      <h1 className="text-3xl font-bold text-center">{product.name}</h1>
      <p className="text-lg text-center">{product.description}</p>
      <p className="text-xl text-center">{product.price}</p>
      <img src={product.image} alt={product.name} className="mx-auto" />
      <p className="text-center">{product.rating}</p>
    </div>
  );
};

export default ProductPage;
