import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import "./FeaturedGames.css";

const FeaturedGames = () => {
  const [games, setGames] = useState([]);
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/games")
      .then((res) => setGames(res.data))
      .catch((err) => console.error(err));
  }, []);

useEffect(() => {
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

        if (line.x < -100 || line.x > canvas.width + 100 || line.y < -100 || line.y > canvas.height + 100) {
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
    <section className="featured-games" ref={sectionRef}>
      <canvas className="background-canvas" ref={canvasRef}></canvas>
      <h2 data-aos="fade-up">Featured Games</h2>
      <div className="games-grid">
        {games.slice(0, 4).map((game, index) => (
          <div
            className="game-card"
            key={game._id}
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            <div className="game-image-wrapper">
              <img src={game.imageUrl} alt={game.title} />
            </div>
            <div className="game-details">
              <h3>{game.title}</h3>
              <p className="genre">{game.genre}</p>
              <p className="price">{game.isFree ? "Free" : `$${game.price.toFixed(2)}`}</p>
              <p className="description">{game.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedGames;
