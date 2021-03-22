import { useRef, useEffect } from "react";
import Input from "./Type1/Input";
import Input2 from "./Type2/Input";

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
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Input {...args} />;
const Template2 = (args) => <Input2 {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Name",
};

export const Type1_Focused = (args) => {
  const newRef = useRef(null);
  useEffect(() => {
    newRef.current.focus();
  });
  return <Input {...args} Ref={newRef} />;
};
Type1_Focused.args = { style: { width: "384px" }, placeholder: "Address" };

export const Type2 = Template2.bind({});
Type2.args = {
  placeholder: "First Name",
};

export const Type2_Focused = (args) => {
  const newRef = useRef(null);
  useEffect(() => {
    newRef.current.focus();
  });
  return <Input2 {...args} Ref={newRef} />;
};
Type2_Focused.args = { placeholder: "Address", label: "Label", type: "text" };
