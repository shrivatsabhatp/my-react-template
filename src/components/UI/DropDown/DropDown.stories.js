import DropDown from "./DropDown";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Component/DropDown",
  component: DropDown,
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

export const DropDown_Default = () => <DropDown />;
