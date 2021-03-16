import SearchIcon from "./SearchIcon";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Icon/SearchIcon",
  component: SearchIcon,
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

export const SearchIcon_Default = () => <SearchIcon />;
