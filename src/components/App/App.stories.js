import App from "./App";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Stories/App",
  component: App,
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

export const App_Default = () => <App />;
