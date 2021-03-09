import React from "react";

const ProgressBar = ({
  width = "100%",
  height = " .1em",
  percentage = "23%",
}) => {
  const ProgressBarContainer = {
    width,
    height,
    borderRadius: "0.1em",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#3f3f3f4d",
  };

  const ProgressBar = {
    display: "block",
    width: `${percentage}%`,
    height: "0.2em",
    borderRadius: "0.2em",
    transition: "width 0.22s ease",
    backgroundColor: "#00a5a5",
  };

  return (
    <div style={ProgressBarContainer}>
      <div style={ProgressBar} />
    </div>
  );
};

export default ProgressBar;
