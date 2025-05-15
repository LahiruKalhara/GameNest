import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./LatestGames.css"; // Reuse styles

const FreeGames = () => {
  const [games, setGames] = useState([]);
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    axios.get("http://localhost:5000/api/games")
      .then((res) => {
        const freeOnly = res.data.filter((game) => game.isFree);
        setGames(freeOnly);
      })
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

          if (
            line.x < -100 || line.x > canvas.width + 100 ||
            line.y < -100 || line.y > canvas.height + 100
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
    <section className="latest-games" ref={sectionRef}>
      <canvas className="background-canvas" ref={canvasRef}></canvas>
      <h2 data-aos="fade-up">Free Games</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          480: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
          1600: { slidesPerView: 5 },
        }}
        style={{ padding: "0 2rem" }}
      >
        {games.map((game, index) => (
          <SwiperSlide key={game._id}>
            <div className="game-card" data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="game-image-wrapper">
                <img src={game.imageUrl} alt={game.title} />
              </div>
              <div className="game-details">
                <h3>{game.title}</h3>
                <p className="genre">{game.genre}</p>
                <p className="price">Free</p>
                <p className="description">{game.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FreeGames;
