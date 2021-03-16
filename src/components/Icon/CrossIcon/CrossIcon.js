import React from "react";

import styles from "./CrossIcon.module.css";

const CrossIcon = (props) => {
  return (
    <div {...props} className={styles.CrossIcon}>
      <div className={styles.Cross} />
    </div>
  );
};

export default CrossIcon;
