import React, { useEffect } from "react";
import "./HomeHero.css";
import AOS from "aos";
import "aos/dist/aos.css";
import bgImage from "../assets/bg.jpg";

const HomeHero = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  return (
    <section className="home-hero">
      <img src={bgImage} alt="Background" className="hero-bg" />
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 data-aos="fade-up">Welcome to GameNest</h1>
          <p data-aos="fade-up" data-aos-delay="200">
            Discover, download, and dive into the most epic gaming experiences.
            Power up your world with titles that thrill and worlds that inspire.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
