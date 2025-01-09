import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams hook for dynamic routing
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const ProductDetailPage = () => {
  const { id } = useParams(); // Get the product id from the URL
  const [product, setProduct] = useState(null);

  // Fetch the product details based on the ID
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // Display loading state while fetching data
  }

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
      <h2 className="text-center mb-4">{product.title}</h2>

      <div className="row">
        <div className="col-lg-6">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>
        <div className="col-lg-6">
          <h3>Price: ${product.price}</h3>
          <h4>Rating: {product.rating.rate} Stars</h4>
          <p>{product.description}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Reviews:</strong> {product.rating.count} Reviews</p>

          {/* Buttons for WhatsApp and Call Now */}
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
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
