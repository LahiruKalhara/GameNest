// components/NewsSection.jsx
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./NewsSection.css";

const newsItems = [
  {
    id: 1,
    title: "Call of Duty: Black Ops 6 Official Reveal Trailer Dropped",
    description:
      "Activision has released the official reveal trailer for Call of Duty: Black Ops 6, showcasing cinematic gameplay and intense action.",
    fullDescription:
      "Activision has officially released the reveal trailer for Black Ops 6. The trailer showcases high-octane gameplay, thrilling story moments, and a return to some fan-favorite mechanics. Fans can expect new multiplayer modes, expansive zombie maps, and a gripping campaign set during the Cold War’s darkest days.",
    image:
      "https://cdn.mos.cms.futurecdn.net/AM8JZFgpsKnGquHkzQyL87-1200-80.jpg",
    date: "May 12, 2025",
  },
  {
    id: 2,
    title: "GTA VI Set for 2025 – New Details Revealed",
    description:
      "Rockstar confirms Grand Theft Auto VI will arrive in 2025 with new locations, characters, and improved physics.",
    fullDescription:
      "GTA VI is now confirmed for a 2025 release. Rockstar Games revealed key details, including a return to Vice City with modern visuals and deeply interactive environments. Two new protagonists are confirmed, along with real-time weather systems and AI-driven pedestrian interactions that evolve with the story.",
    image:
      "https://images.dwncdn.net/images/t_app-icon-l/p/c3c7360a-55f0-4366-a8a8-da2190e900e7/57866846/gta-6-logo",
    date: "May 10, 2025",
  },
  {
    id: 3,
    title: "The Witcher 4 is Officially in Development",
    description:
      "CD Projekt Red has confirmed The Witcher 4 is in early development using Unreal Engine 5.",
    fullDescription:
      "CD Projekt Red has officially begun development on The Witcher 4. This next saga will be powered by Unreal Engine 5, moving away from their proprietary REDengine. Expect new characters, a new School of the Witcher, and deeper roleplaying elements. The release window has not yet been confirmed.",
    image:
      "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:0,cw:3840,ch:2160,q:80,w:3840/zPuqriKSz5FDuuzZKQBgiH.png",
    date: "May 7, 2025",
  },
  {
    id: 4,
    title: "Cyberpunk 2077 Sequel Teased by CD Projekt",
    description:
      "CD Projekt hints at a Cyberpunk 2077 sequel with improved AI and story depth.",
    fullDescription:
      "CD Projekt Red has teased the development of a Cyberpunk 2077 sequel. The upcoming title, codenamed 'Project Orion', is expected to improve AI behavior, offer more impactful choices, and build on the Night City experience with next-gen visuals and systems. A full reveal is expected in 2026.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLQPvmyn8kqMxmMDUhJC1gOYJEmW_9lrUcBj0bbHXDSGqZQUkJ_45UFF5xA873IpcQ7VI&usqp=CAU",
    date: "May 5, 2025",
  },
  {
    id: 5,
    title: "Elden Ring DLC 'Shadow of the Erdtree' Gets Release Date",
    description:
      "FromSoftware announces the release date for Elden Ring’s long-awaited expansion.",
    fullDescription:
      "FromSoftware has announced that 'Shadow of the Erdtree', the highly anticipated DLC for Elden Ring, will launch in August 2025. The expansion will bring new areas, bosses, lore, and gear. Players can expect the same brutal difficulty with a fresh, hauntingly beautiful world.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH8xWBGDPN5_MOyEOm7H0ntMYakkX2RtGNIw&s",
    date: "May 3, 2025",
  },
  {
    id: 6,
    title: "Ubisoft Reveals Assassin’s Creed: Shadows",
    description:
      "Ubisoft's next Assassin’s Creed game explores Feudal Japan with dual protagonists.",
    fullDescription:
      "Assassin’s Creed: Shadows will take players to Feudal Japan with two protagonists — a shinobi assassin and a samurai warrior. The game promises a rich narrative, dynamic stealth systems, and detailed historical environments. It’s set for release in early 2026 and will be powered by the new Anvil Pipeline.",
    image:
      "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1RLdppgLllgGZlkjuvHBu6/237f7e968827f4abda462a311a0f1faf/RED_KEYART_STD_RGB_WW.jpg",
    date: "May 2, 2025",
  },
];


const NewsSection = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleReadMore = (news) => {
    setSelectedNews(news);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedNews(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="news-section">
      <h2 data-aos="fade-up" data-aos-duration={1200}>Latest Gaming News</h2>
      <div className="news-grid">
        {newsItems.map((news, index) => (
          <div
            className="news-card"
            key={news.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-duration={1200}
          >
            <div className="news-image-wrapper">
              <img src={news.image} alt={news.title} />
              <span className="news-date">{news.date}</span>
            </div>
            <div className="news-details">
              <h3>{news.title}</h3>
              <p>{news.description}</p>
              <button className="read-more" onClick={() => handleReadMore(news)}>Read More</button>
            </div>
          </div>
        ))}
      </div>

      {selectedNews && (
        <div className="news-modal-overlay" onClick={closeModal}>
          <div className="news-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <img src={selectedNews.image} alt={selectedNews.title} />
            <h2>{selectedNews.title}</h2>
            <p className="modal-date">{selectedNews.date}</p>
            <p>{selectedNews.fullDescription}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default NewsSection;
