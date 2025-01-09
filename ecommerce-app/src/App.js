import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';  // Import Outlet
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import ContactUs from './components/ContactUs';  // Corrected import for ContactUs.js
//import Navigation from './components/Navigation'; // Import Navigation component
import './styles/main.css';

const App = () => {
  return (
    <Router>
      <div className="bg-black text-white">
        {/* Render Navigation */}
        <Header/>

        {/* Content Section */}
        <div style={{ minHeight: '70vh', padding: '0px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/product/:productName" element={<ProductPage />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
