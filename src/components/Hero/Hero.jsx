import React from "react";
import styles from "./Hero.module.css";
import HeroHeadphoneImage from "../../assets/hero_headphones.svg?react";

function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <HeroHeadphoneImage />
      </div>
    </div>
  );
}

export default Hero;
