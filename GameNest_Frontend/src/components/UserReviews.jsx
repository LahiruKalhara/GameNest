// components/UserReviews.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./UserReviews.css";

const reviewsData = [
  { id: 1, name: "Alex Mercer", avatar: "https://i.pravatar.cc/60?img=12", rating: 5, text: "GameNest is a total game changer! Smooth purchases and sick visuals." },
  { id: 2, name: "Lara Croft", avatar: "https://i.pravatar.cc/60?img=45", rating: 4, text: "Love the UI and how easy it is to find new games. Keep it up!" },
  { id: 3, name: "John Wick", avatar: "https://i.pravatar.cc/60?img=32", rating: 5, text: "Perfect platform for gamers. The animations are slick and immersive." },
  { id: 4, name: "Jill Valentine", avatar: "https://i.pravatar.cc/60?img=7", rating: 4, text: "Great selection of games and smooth checkout process. Highly recommend!" },
  { id: 5, name: "Max Payne", avatar: "https://i.pravatar.cc/60?img=15", rating: 5, text: "This site’s vibe is crazy good — easy navigation and gorgeous design." },
  { id: 6, name: "Sam Fisher", avatar: "https://i.pravatar.cc/60?img=20", rating: 4, text: "Found all my favorite games here. The animations keep me hooked!" },
];

function UserReviews() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    // Optional: refresh AOS on updates (good if content might change)
    AOS.refresh();

    // Your manual scroll visibility check
    const onScroll = () => {
      const section = document.querySelector(".user-reviews");
      if (!section) return;
      const top = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight - 100) setVisible(true);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={`user-reviews ${visible ? "visible" : ""}`}>
      <h2 data-aos="fade-up">User Reviews</h2>
      <div className="reviews-container">
        {reviewsData.map(({ id, name, avatar, rating, text }, idx) => (
          <div
            key={id}
            className="review-card"
            style={{ animationDelay: `${idx * 0.15}s` }}
            data-aos="fade-up"
            data-aos-delay={idx * 150}
          >
            <img src={avatar} alt={`${name} avatar`} className="avatar" />
            <div className="review-content">
              <div className="review-header">
                <h3>{name}</h3>
                <div className="stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={`star ${i < rating ? "filled" : ""}`}>★</span>
                  ))}
                </div>
              </div>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UserReviews;
