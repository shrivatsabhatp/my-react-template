import Slider from "./Slider";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Stories/Slider",
  component: Slider,
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

export const Slider_Default = () => (
  <div style={{ fontSize: "1.5rem" }}>
    <Slider />
  </div>
);
