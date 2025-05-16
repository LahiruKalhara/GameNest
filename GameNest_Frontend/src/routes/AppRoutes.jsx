// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import StorePage from "../pages/StorePage";
import NewsPage from "../pages/NewsPage";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/store" element={<StorePage />} />
      <Route path="/news" element={<NewsPage />} />
    </Routes>
  );
};

export default AppRoutes;
