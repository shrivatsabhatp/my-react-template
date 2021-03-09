import React from "react";

const ProgressBar = (props) => {
  const { completed } = props;

  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    overflow: "hidden",
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: `hsl(${completed},100%,30%)`,
    borderRadius: "inherit",
    textAlign: "right",
    transition: "width 1s ease-in-out",
    display: "grid",
    placeItem: "center",
  };

  const labelStyles = {
    paddingRight: 5,
    color: "white",
    fontSize: "1rem",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
