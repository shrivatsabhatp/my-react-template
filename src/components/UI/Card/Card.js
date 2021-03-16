import React from "react";

import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div {...props} className={[styles.Card, props.className].join(" ")}>
      {props.children}
    </div>
  );
};

export default Card;
