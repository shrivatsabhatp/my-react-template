import React from "react";

import styles from "./CardWithFocus.module.css";
import Card from "../Card";

const CardWithFocus = ({ ...props }) => {
  return (
    <div className={styles.CardWithFocus}>
      <Card {...props} className={styles.Card}>
        {props.children}
      </Card>
    </div>
  );
};

export default CardWithFocus;
