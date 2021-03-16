import Card from "./Card";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "UI/Card",
  component: Card,
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

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  style: { width: "10vw", height: "10vw" },
  children: <h1>Your children here</h1>,
};
