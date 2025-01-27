import React from "react";
import styles from "./sectionTitle.module.css";

const SectionTitle = ({ title }) => {
  return (
    <div className={styles.main}>
      <h2 className={styles.first}>{title}</h2>
      <h2 className={styles.second}>{title}</h2>
    </div>
  );
};

export default SectionTitle;
