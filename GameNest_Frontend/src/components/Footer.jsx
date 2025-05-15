// components/Footer.jsx
import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaDiscord } from "react-icons/fa";
import "./Footer.css";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src={logo} alt="GameNest Logo" className="footer-logo" />
          <p className="footer-tagline">Your ultimate game buying experience.</p>
          <div className="social-icons">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="social-icon twitter">
              <FaTwitter />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="social-icon facebook">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-icon instagram">
              <FaInstagram />
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" aria-label="Discord" className="social-icon discord">
              <FaDiscord />
            </a>
          </div>
        </div>

        <div className="footer-center">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#featured">Featured Games</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#reviews">User Reviews</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-right">
          <h3>Join Our Newsletter</h3>
          <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              required
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-btn">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 GameNest. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
