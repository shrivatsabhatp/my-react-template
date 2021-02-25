import React from "react";
import styles from "./Body.module.css";

const Body = (props) => {
  const renderOptions = props.options.map((option) => {
    return (
      <div
        className={styles.option}
        key={option.id}
        onClick={() => props.onOptionSelect(option)}
        style={optionStyle}
      >
        <img
          alt={option?.label}
          src={option?.image}
          style={optionImage}
          className={`${props.rounded && styles.roundedImg} ${styles.img}`}
        />
        <label style={optionLabel}>{option.label}</label>
      </div>
    );
  });

  return (
    <div className={props.className} {...props}>
      {renderOptions}
    </div>
  );
};

export default Body;

const optionStyle = {
  boxSizing: "border-box",
  padding: "0.33rem",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  cursor: "pointer",
};

const optionImage = {
  width: "2em",
  height: "2em",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

const optionLabel = {
  cursor: "pointer",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};
