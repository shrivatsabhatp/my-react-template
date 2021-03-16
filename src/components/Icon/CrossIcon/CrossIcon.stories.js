import CrossIcon from "./CrossIcon";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Icon/CrossIcon",
  component: CrossIcon,
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

export const CrossIcon_Default = () => <CrossIcon />;
