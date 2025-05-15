// src/components/FeaturedBanner.jsx
import React from "react";
import "./FeaturedBanner.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { FaCartPlus } from "react-icons/fa";
import video from '../assets/store.mp4'

AOS.init();

const FeaturedBanner = () => {
  return (
    <section className="featured-banner">
      <video className="banner-video" src={video} autoPlay loop muted />

      <div className="banner-overlay"></div>

      <div className="banner-content" >
        <h1 data-aos="fade-up" data-aos-duration="1200" className="banner-title">CALL OF DUTY:<br></br> BLACK OPS 6</h1>
        <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" className="banner-tagline">Prepare for the ultimate mission.</p>
        <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300" className="banner-description">
          Dive into a next-generation warfare experience with stunning visuals, new tactical options,
          and a gripping storyline that will redefine the FPS genre.
        </p>
        <button data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500" className="buy-now-btn">
          <FaCartPlus /> Buy Now
        </button>
      </div>
    </section>
  );
};

export default FeaturedBanner;
