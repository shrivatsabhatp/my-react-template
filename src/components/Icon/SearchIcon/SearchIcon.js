import React from "react";

import styles from "./SearchIcon.module.css";

const SearchIcon = () => {
  return (
    <div className={styles.SearchIcon}>
      <div className={styles.Circle} />
      <div className={styles.Bar} />
    </div>
  );
};

export default SearchIcon;
