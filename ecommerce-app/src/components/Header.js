import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black text-white py-1 shadow-md fixed-top w-100 z-10">
      <div className="container-fluid px-4 d-flex justify-content-between align-items-center">
        {/* Website Title */}
        <h1 className="text-4xl font-bold tracking-wide cursor-pointer text-right md:text-left w-full m-2">
          ShopWay
        </h1>
      </div>

      {/* Navbar with Links */}
      <nav className="navbar navbar-light bg-black">
        <div className="container-fluid justify-content-end">
          {/* Home Button */}
          <Link to="/" className="btn btn-sm btn-outline-light m-2">
            Home
          </Link>

          {/* Products Button */}
          <Link to="/products" className="btn btn-sm btn-outline-light m-2">
            Products
          </Link>

          {/* Contact Us Button */}
          <Link to="/contact-us" className="btn btn-sm btn-outline-light m-2">
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
