// src/components/Header.jsx
import React from "react";
import "./Header.css";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="gn-header"
    >
      <div className="gn-logo">
        <img src={logo} alt="GameNest Logo" />
      </div>
      <nav className="gn-nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Store</a></li>
          <li><a href="#">Library</a></li>
          <li><a href="#">Profile</a></li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
