import React from "react";
import styles from "./hero.module.css";
function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.breadcrumbsContainer}>
        <p
          style={{
            color: "var(--text-muted)",
          }}
        >
          HOME
        </p>
        <p
          style={{
            color: "var(--text-muted)",
          }}
        >
          |
        </p>
        <p>SHOP</p>
      </div>
      <h1 className={styles.heroTitle}>DISCOVER OUR PRODUCTS</h1>
      <h4 className={styles.heroSubtitle}>
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </h4>
    </div>
  );
}

export default Hero;
