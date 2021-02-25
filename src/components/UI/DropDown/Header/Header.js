import React from "react";
import styles from "./Header.module.css";

const Header = (props) => {
  const Arrow = () => (
    <div
      className={styles.arrow}
      style={{
        ...arrow,
        transform: props.onActive ? "rotate(-45deg)" : "rotate(135deg)",
      }}
    />
  );
  return (
    <div {...props} style={style}>
      {props.children}
      <Arrow />
    </div>
  );
};

export default Header;

const style = {
  background: "white",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: " 0 1rem",
  height: "2.5rem",
  width: "100%",
  borderRadius: "6px",
  cursor: "pointer",
  textAlign: "left",
};

const arrow = {
  display: "inline-block",
  marginBottom: "0.2em",
  width: "0.4em",
  height: "0.4em",
  borderRight: "0.15em solid black",
  borderTop: "0.15em solid black",
  marginRight: "0.5em",
  userSelect: "none",
};
