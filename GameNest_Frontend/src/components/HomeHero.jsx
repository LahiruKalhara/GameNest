import React, { useEffect } from "react";
import "./HomeHero.css";
import AOS from "aos";
import "aos/dist/aos.css";
import bgVideo from "../assets/bg.mp4";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const HomeHero = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  const { scrollY } = useScroll();
  const videoOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const smoothOpacity = useSpring(videoOpacity, { stiffness: 100, damping: 30 });

  return (
    <section className="home-hero">
      <motion.video
        src={bgVideo}
        className="hero-bg"
        autoPlay
        muted
        loop
        playsInline
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ opacity: smoothOpacity }}
      />
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 data-aos="fade-up" data-aos-duration="1200">WELCOME TO GAMENEST</h1>
          <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">
            Discover, download, and dive into the most epic gaming experiences.
            Power up your world with titles that thrill and worlds that inspire.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
