import React from "react";

import styles from "./Slider.module.css";

const Slider = (props) => {
  const [value, setValue] = React.useState(props.value);

  function changeValue(e) {
    setValue(e.target.value * props.max);
    props.onChange(e.target.value * props.max);
  }

  const sliderStyle = {
    position: "relative",
    width: "284px",
    height: "28px",
  };

  const rangeStyle = {
    webkitAppearance: "none",
    appearance: "none",
    touchAction: "pan-y",
    position: "absolute",
    margin: "0",
    padding: "0",
    width: "284px",
    backgroundColor: "transparent",
  };

  const progressBarStyle = {
    webkitAppearance: "none",
    appearance: "none",
    position: "absolute",
    display: "block",
    margin: "0",
    top: "13px",
    left: "13px",
    width: "256px",
    height: "3px",
    zIndex: "-1",
    backgroundColor: "#D7D7D7",
  };

  return (
    <div
      style={sliderStyle}
      aria-valuemax={props.max}
      aria-valuemin={props.min}
      aria-valuenow={value}
      aria-valuetext={value}
    >
      <input
        type="range"
        onChange={changeValue}
        defaultValue={props.min}
        min={props.min}
        max={props.max}
        step={props.max / 100}
        style={rangeStyle}
      />
      <progress
        className={styles.progress}
        value={value}
        min={props.min}
        max={props.max}
        style={progressBarStyle}
      ></progress>
    </div>
  );
};

Slider.defaultProps = {
  min: 0,
  max: 1,
  value: 0,
  onChange: () => {},
};

export default Slider;
