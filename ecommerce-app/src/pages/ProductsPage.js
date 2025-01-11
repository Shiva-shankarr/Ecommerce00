import React, { useState, useEffect } from "react";
import { Row, Col, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
import { FaSearch, FaList, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import './ProductPage.css';
import items from "../data/items.json"; // Import static data

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [loading, setLoading] = useState(true);

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); // Number of products per page

  // Fetch products on mount
  useEffect(() => {
    const fetchProducts = () => {
      try {
        setProducts(items); // Use static JSON data
        setFilteredProducts(items);
        setLoading(false); // Set loading to false
      } catch (error) {
        console.error("Error loading products:", error);
        setLoading(false); // Stop loading in case of error
      }
    };

    fetchProducts();
  }, []);

  // Handle Filters and Search
  useEffect(() => {
    let tempProducts = [...products];

    if (searchQuery) {
      tempProducts = tempProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory) {
      tempProducts = tempProducts.filter((product) => product.category === selectedCategory);
    }

    if (selectedPriceRange) {
      if (selectedPriceRange === "low") {
        tempProducts = tempProducts.filter((product) => product.price < 50);
      } else if (selectedPriceRange === "medium") {
        tempProducts = tempProducts.filter((product) => product.price >= 50 && product.price <= 150);
      } else if (selectedPriceRange === "high") {
        tempProducts = tempProducts.filter((product) => product.price > 150);
      }
    }

    if (selectedRating) {
      tempProducts = tempProducts.filter((product) => product.rating.rate >= selectedRating);
    }

    setFilteredProducts(tempProducts);
  }, [searchQuery, selectedCategory, selectedPriceRange, selectedRating, products]);

  // Handle Pagination
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle Page Change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle Search
  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  // Handle Category Change
  const handleCategoryChange = (value) => setSelectedCategory(value);

  // Handle Price Range Change
  const handlePriceChange = (value) => setSelectedPriceRange(value);

  // Handle Rating Change
  const handleRatingChange = (value) => setSelectedRating(value);

  // Predefined message for WhatsApp
  const handleBuyNow = (product) => {
    const message = `I'm interested in buying the product "${product.title}". Please send more details.`;
    const phoneNumber = "1234567890"; // Replace with the desired phone number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  // Handle Call Now button click (opens phone dialer)
  const handleCallNow = () => {
    const phoneNumber = "1234567890"; // Replace with the desired phone number
    const callUrl = `tel:${phoneNumber}`;
    window.location.href = callUrl;
  };

  return (
    <div className="container">
      <br /><br /><br /><br /><br /><br />
      <h2 className="text-center mb-4">Products</h2>

      {/* Search and Filter */}
      <div className="row mb-4 align-items-center">
        <div className="col-lg-6 col-md-12 mb-3 mb-lg-0">
          <div className="custom-search-bar">
            <input
              type="text"
              className="custom-search-input"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="custom-search-button">
              <FaSearch />
            </button>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-3 mb-md-0">
          <div className="filter-item">
            <div className="filter-label">
              <FaList className="filter-icon" /> Filter By
            </div>
            <div className="filter-dropdown">
              <select
                onChange={(e) => handlePriceChange(e.target.value)}
                className="filter-select"
                value={selectedPriceRange}
              >
                <option value="">Select Price Range</option>
                <option value="low">Below $50</option>
                <option value="medium">$50 - $150</option>
                <option value="high">Above $150</option>
              </select>

              <select
                onChange={(e) => handleRatingChange(Number(e.target.value))}
                className="filter-select"
                value={selectedRating}
              >
                <option value="">Select Rating</option>
                <option value="1">1 Star & Above</option>
                <option value="2">2 Stars & Above</option>
                <option value="3">3 Stars & Above</option>
                <option value="4">4 Stars & Above</option>
                <option value="5">5 Stars</option>
              </select>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-3 mb-md-0">
          <div className="filter-item">
            <div className="filter-label">
              <FaList className="filter-icon" /> Category By
            </div>
            <div className="filter-dropdown">
              <select
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="filter-select"
                value={selectedCategory}
              >
                <option value="">Select Category</option>
                <option value="electronics">Electronics</option>
                <option value="clothes">Clothes</option>
                <option value="home-decors">Home Decors</option>
                <option value="sports">Sports</option>
                <option value="etc">Others</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
          <p>Loading items, please wait...</p>
        </div>
      ) : (
        <div>
          <Row xs={1} sm={2} md={3} className="g-4">
            {currentProducts.length > 0 ? (
              currentProducts.map((product) => (
                <Col key={product.id}>
                  <Card className="product-card" style={{ backgroundColor: "black", color: "white" }}>
                    <Card.Img
                      variant="top"
                      src={product.image}
                      className="card-img"
                      style={{ padding: "10px" }}
                    />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>Price: ${product.price}</Card.Text>
                      <Card.Text>Rating: {product.rating.rate} Stars</Card.Text>
                      <Card.Text>Reviews: {product.rating.count} Reviews</Card.Text>
                      <Link to={`/product/${product.id}`} className="btn btn-primary">
                        View Product
                      </Link>

                      <div className="btn-container mt-3">
                        <button
                          className="buy-now-btn"
                          onClick={() => handleBuyNow(product)}
                        >
                          <FaWhatsapp /> Buy Now
                        </button>
                        <button
                          className="call-now-btn"
                          onClick={handleCallNow}
                        >
                          <FaPhoneAlt /> Call Now
                        </button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <p>No products match your criteria.</p>
            )}
          </Row>
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalItems={filteredProducts.length}
        itemsPerPage={itemsPerPage}
        onPageChange={paginate}
      />
      <br /><br />
    </div>
  );
};

export default ProductsPage;
