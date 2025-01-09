import React from 'react';
import { useLocation } from 'react-router-dom';

const CategoryPage = () => {
  const { state } = useLocation();
  const { category } = state;

  return (
    <div className="py-16">
      <h1 className="text-3xl font-bold text-center">{category.name}</h1>
      <p className="text-lg text-center">{category.description}</p>
      {/* Display the list of products in the category here */}
    </div>
  );
};

export default CategoryPage;
