import Form from "./Form";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Component/Form",
  component: Form,
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

export const Form_Default = () => <Form />;
