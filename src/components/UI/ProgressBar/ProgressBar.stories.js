import ProgressBar from "./ProgressBar";
import { useState } from "react";
import Slider from "../Slider";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Stories/ProgressBar",
  component: ProgressBar,
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#F8F8F8" },
        { name: "dark", value: "#333333" },
      ],
    },
  },
};

export const ProgressBar_Default = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div style={{ fontSize: "1.5rem" }}>
      <p style={{ fontSize: "0.9rem" }}>Controller</p>
      <Slider onChange={(value) => setProgress(Math.round(value * 100))} />
      <p style={{ fontSize: "1.1rem" }}>Progress Bars</p>
      <ProgressBar type={"one"} percentage={progress} />
      <br />
      <ProgressBar type={"two"} percentage={progress} />
      <br />
      <ProgressBar type={"three"} percentage={progress} />
      <br />
      <ProgressBar type={"four"} percentage={progress} />
      <br />
      <ProgressBar type={"five"} percentage={progress} />
    </div>
  );
};
