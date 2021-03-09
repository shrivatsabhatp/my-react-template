import React from "react";

const ProgressBar = (props) => {
  const { completed } = props;

  const bgcolor = decideTheBgColor(completed);

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
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
    transition: "width 0.2s ease",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{/* {`${completed}%`} */}</span>
      </div>
    </div>
  );
};

export default ProgressBar;

const bgColor = [
  { color: "#0f0", value: 60 },
  { color: "#4ff", value: 30 },
  { color: "#fcc", value: 0 },
];

const decideTheBgColor = (completed) => {
  return bgColor.find((item) => completed >= item.value).color;
};
