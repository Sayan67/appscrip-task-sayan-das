import React from "react";
import styles from "./hero.module.css";
function Hero() {
  return (
    <div className={styles.heroContainer}>
      <h1
      className={styles.heroTitle}
      >DISCOVER OUR PRODUCTS</h1>
      <h4 className={styles.heroSubtitle}
      >
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </h4>
    </div>
  );
}

export default Hero;
