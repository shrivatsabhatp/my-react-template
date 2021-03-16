import React from "react";

import styles from "./Input.module.css";

const Input = ({ ...props }) => {
  let inputElement = null;

  switch (props.inputtype) {
    case "input":
      inputElement = <input className={styles.InputElement} {...props} />;
      break;
    case "textarea":
      inputElement = <textarea className={styles.InputElement} {...props} />;
      break;
    default:
      inputElement = (
        <input className={styles.InputElement} {...props} ref={props.Ref} />
      );
      break;
  }
  return (
    <div className={styles.Input}>
      {inputElement}
      <span className={styles.highlight}></span>
      <span className={styles.bar}></span>
      <label className={styles.Label}>{props.label}</label>
    </div>
  );
};

export default Input;
