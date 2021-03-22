import Loader from "./Loader";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Component/Loader",
  component: Loader,
  parameters: {
    backgrounds: {
      default: "dark",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#333333" },
      ],
    },
  },
};

export const Default = () => <Loader />;
