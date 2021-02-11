import React, { Fragment } from "react";

import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.Container}>
      {/* Loader Type 1 */}
      <div className={styles.Loader1}>
        <div className={styles.Spinner} />
      </div>

      {/* Loader Type 2 */}
      <div className={styles.Loader2}>
        <div className={styles.ChaseDot} />
        <div className={styles.ChaseDot} />
        <div className={styles.ChaseDot} />
        <div className={styles.ChaseDot} />
        <div className={styles.ChaseDot} />
        <div className={styles.ChaseDot} />
      </div>

      {/* Loader Type 3 */}
      <div className={styles.Loader3}>
        <div className={styles.ChaseSpinner} />
      </div>

      {/* Loader Type 4 */}
      <div className={styles.Loader4}>
        <svg
          className={styles.svg}
          viewBox="0 0 90 90"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className={styles.circle}
            fill="none"
            strokeWidth="4"
            strokeLinecap="round"
            stroke="red"
            cx="45"
            cy="45"
            r="40"
          />
        </svg>
      </div>
    </div>
  );
};

export default Loader;
