import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhoneAlt, FaMapMarkerAlt, FaRegClock } from "react-icons/fa";
import "../styles/Footer.css"; // Import your custom CSS for the footer

const Footer = () => {
  return (
    <footer className="bg-dark text-white py- mt-5">
      <Container>
        <Row className="align-items-center g-5">
          {/* Google Maps Location */}
          <Col xs={12} md={4} className="mb-4 mb-md-0 text-center text-md-left">
            <h5>Our Location</h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.25176871577!2d78.40804554999998!3d17.412348700000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1736371468278!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Col>

          {/* Contact Us Information */}
          <Col xs={12} md={4} className="text-center text-md-left mb-4 mb-md-0">
            <h5>Contact Us</h5>
            <p>
              <FaMapMarkerAlt /> Address: Hyderabad, Telangana, India
            </p>
            <p>
              <FaPhoneAlt /> Phone: +91 9876543210
            </p>
            <p>
              <FaRegClock /> Timing: Mon - Fri, 9:00 AM - 6:00 PM
            </p>
          </Col>

          {/* Social Media Links */}
          <Col xs={12} md={4} className="text-center text-md-right">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="https://www.instagram.com" className="text-white mx-3" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.youtube.com" className="text-white mx-3" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={24} />
              </a>
              <a href="https://www.facebook.com" className="text-white mx-3" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.twitter.com" className="text-white mx-3" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Footer Bottom */}
      <div className="bg-black text-center py-3">
        <p className="mb-0">&copy; 2025 ShopWay. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
