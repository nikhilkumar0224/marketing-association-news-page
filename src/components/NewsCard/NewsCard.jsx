import React from "react";
import styles from "./NewsCard.module.css";

export default function NewsCard({ article }) {
  if (!article) {
    return null;
  }
  const { title, description, image, alt = "" } = article;
  return (
    <article className={styles.NewsCard}>
      <img src={image} alt={alt} className={styles.cardImage} />

      <div className={styles.newsContent}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </article>
  );
}
