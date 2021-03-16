import CardWithFocus from "./CardWithFocus";
import SearchIcon from "../../Icon/SearchIcon";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "UI/CardWithFocus",
  component: CardWithFocus,
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

const Template = (args) => <CardWithFocus {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <SearchIcon />,
};
