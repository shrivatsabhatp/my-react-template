import Dialog from "./Dialog";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "UI/Modal/Dialog",
  component: Dialog,
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

export const Dialog_Default = () => (
  <Dialog show={true}>
    <h1 style={{ width: "40rem", height: "20rem" }}>Dialog children</h1>
  </Dialog>
);
