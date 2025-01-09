import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <Container className="my-5">
      <Row>
        {/* Heading Section */}
        <Col xs={12} className="text-center mb-4">
          <h2>Contact Us</h2>
          <p>We would love to hear from you! Feel free to reach out to us using the following information.</p>
        </Col>
        
        {/* Contact Information Section */}
        <Col xs={12} md={4} className="text-center text-md-left mb-4 mb-md-0">
          <h5>Contact Information</h5>
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

        {/* Contact Form Section */}
        <Col xs={12} md={8}>
          <h5>Get In Touch</h5>
          <form>
            <Row>
              <Col xs={12} md={6} className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </Col>
              <Col xs={12} md={6} className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="mb-3">
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Your Message"
                  required
                />
              </Col>
            </Row>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
