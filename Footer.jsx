// Footer.js

import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Learn more about our company and mission.</p>
          <a href="/aboutus">Read More</a>
        </div>

        <div className="footer-section">
          <h4>Our Services</h4>
          <ul>
            <li>
              <a href="/services">Service 1</a>
            </li>
            <li>
              <a href="/services">Service 2</a>
            </li>
            <li>
              <a href="/services">Service 3</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Reach out to our team for inquiries and support.</p>
          <a href="/contact">Contact Us</a>
        </div>
      </div>

      <div className="footer-social">
        <h4>Connect with Us</h4>
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; 2023 Your Company. All rights reserved. | Privacy Policy |
          Terms of Service
        </p>
      </div>
    </footer>
  );
}

export default Footer;
