import Input from "./Input";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Component/Input",
  component: Input,
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

export const Input_Default = () => <Input />;
