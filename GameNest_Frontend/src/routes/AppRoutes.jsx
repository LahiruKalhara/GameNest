// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import StorePage from "../pages/StorePage";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/store" element={<StorePage />} />
    </Routes>
  );
};

export default AppRoutes;
