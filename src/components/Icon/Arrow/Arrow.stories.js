import Arrow from "./Arrow";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Icon/Arrow",
  component: Arrow,
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

export const Arrow_Default = () => <Arrow />;
