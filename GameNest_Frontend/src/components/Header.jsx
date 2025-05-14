// src/components/Header.jsx
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="gn-header">
      <div className="gn-logo">🎮 GameNest</div>
      <nav className="gn-nav">
        <a href="#">Home</a>
        <a href="#">Store</a>
        <a href="#">Library</a>
        <a href="#">Profile</a>
      </nav>
    </header>
  );
};

export default Header;
