"use client";
import React, { useEffect } from "react";
import styles from "./sectionTitle.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const SectionTitle = ({ title }) => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      offset: 100, // Distance to start the animation
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen once or every scroll
    });
  }, []);
  return (
    <div
      data-aos="zoom-in"
      className={`${styles.main} md:text-[60px] sm:text-[40px] text-[30px] px-4 `}
    >
      <h2 className={styles.first}>{title}</h2>
      <h2 className={styles.second}>{title}</h2>
    </div>
  );
};

export default SectionTitle;
