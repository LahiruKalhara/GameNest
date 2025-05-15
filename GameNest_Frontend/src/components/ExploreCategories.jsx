import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ExploreCategories.css";

const categories = [
  {
    title: "Action",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/967/828/36/action-armor-crysis-2-video-games-crysis-hd-art-wallpaper-preview.jpg",
  },
  {
    title: "Adventure",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/495/171/606/shadow-of-the-tomb-raider-2018-puzzle-video-game-wallpaper-preview.jpg",
  },
  {
    title: "Strategy",
    imageUrl: "https://wallpapers.com/images/hd/strategy-games-1728-x-972-wallpaper-93d2bnjagc0rgtry.jpg",
  },
  {
    title: "Multiplayer",
    imageUrl: "https://wallpapercave.com/wp/wp10517902.jpg",
  },
  {
    title: "RPG",
    imageUrl: "https://i.pinimg.com/736x/2b/bc/45/2bbc451257b07dbc5386235986188593.jpg",
  },
];

const ExploreCategories = () => {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let visible = false;

    const lines = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      angle: Math.random() * 2 * Math.PI,
      speed: Math.random() * 1.2 + 0.8,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (visible) {
        ctx.globalAlpha = 0.5;
        ctx.shadowColor = "rgba(255, 0, 0, 0.6)";
        ctx.shadowBlur = 20;
        ctx.lineWidth = 1.4;

        lines.forEach((line) => {
          const curve = 60;
          const cx = line.x + Math.cos(line.angle) * curve;
          const cy = line.y + Math.sin(line.angle) * curve;
          const ex = line.x + Math.cos(line.angle) * 100;
          const ey = line.y + Math.sin(line.angle) * 100;

          ctx.beginPath();
          ctx.moveTo(line.x, line.y);
          ctx.quadraticCurveTo(cx, cy, ex, ey);
          ctx.strokeStyle = "rgba(255, 60, 60, 0.8)";
          ctx.stroke();

          line.x += Math.cos(line.angle) * line.speed;
          line.y += Math.sin(line.angle) * line.speed;

          if (
            line.x < -100 ||
            line.x > canvas.width + 100 ||
            line.y < -100 ||
            line.y > canvas.height + 100
          ) {
            line.x = Math.random() * canvas.width;
            line.y = Math.random() * canvas.height;
            line.angle = Math.random() * 2 * Math.PI;
          }
        });
      }

      requestAnimationFrame(draw);
    };

    draw();

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        canvas.style.opacity = visible ? "1" : "0";
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="explore-categories" ref={sectionRef}>
      <canvas className="background-canvas" ref={canvasRef}></canvas>
      <h2 data-aos="fade-up">Explore Categories</h2>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div
            className="category-card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <img src={category.imageUrl} alt={category.title} />
            <div className="overlay">
              <h3>{category.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreCategories;
