import React, { useState } from "react";
import NewsCard from "../NewsCard/NewsCard.jsx";
import styles from "./Main.module.css";
import Card1 from "../Images/exclusive-student-event.png";
import Card2 from "../Images/MindFuel.png";
import Card3 from "../Images/Andy-AI.png";
const articles = [
  {
    id: 1,
    title: "Exclusive Student Event Auckland",
    description:
      "Our Speed Networking (Students x Marketers) get-together in April was such a hit, we’re doing it again.",
    alt: "exclusive student event",
    image: Card1,
  },
  {
    id: 2,
    title: "MindFuel Webinar with Quantum Jump",
    description:
      "Loyalty in New Zealand just had its biggest shake-up in years. Foodstuffs launched Club+, The Warehouse launched Club, Airpoints became Koru, and Cashpoints went live with foundation partner Super Liquor. So what do Kiwis actually make of it all?",
    alt: "MindFuel QJ Listing Image (382 x 226 px)",
    image: Card2,
  },
  {
    id: 3,
    title: "AI Bootcamp with Andy Lark",
    description:
      "AI is advancing at a lightning speed, and expert Andy Lark is here to make sure you don’t get left behind.",
    alt: "Andy Lark AI Bootcamp Feature image",
    image: Card3,
  },
];

export default function Main() {
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    e.preventDefault();
  }
  return (
    <>
      <section className={styles.main}>
        <div className={styles.mainContent}>
          <video autoPlay muted loop className={styles.backgroundVideo}>
            <source
              src="https://marketing.org.nz/hubfs/Helping%20Marketers%20be%20Brilliant.mp4"
              type="video/mp4"
            />
          </video>
          <div className={styles.heroContent}>
            <form className={styles.searchForm} onSubmit={handleSearch}>
              <input
                type="search"
                placeholder="Search news..."
                aria-label="Search news"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <button type="submit">SEARCH</button>
            </form>
          </div>
        </div>
      </section>
      <section className={styles.newsSection}>
        <div className={styles.newsGrid}>
          {articles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </>
  );
}
