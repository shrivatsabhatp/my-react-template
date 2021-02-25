import React from "react";

import styles from "./DropDown.module.css";

import Header from "./Header";
import Body from "./Body";

const DropDown = ({ ...props }) => {
  const [showDropdownBody, setShowDropdownBody] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();
  return (
    <div
      style={{
        ...style,
        maxHeight: showDropdownBody ? "fit-content" : "2.5rem",
      }}
    >
      {/* Dropdown Header */}
      <Header
        // className={props.headerClassName}
        className={styles.header}
        onClick={() => setShowDropdownBody(!showDropdownBody)}
        onActive={showDropdownBody}
      >
        {selectedValue?.label || props.headerValue}
      </Header>
      {/* Dropdown body */}
      {showDropdownBody && (
        <Body
          className={styles.body}
          // className={props.bodyClassName}
          options={props.options}
          onOptionSelect={setSelectedValue}
        />
      )}
    </div>
  );
};

DropDown.defaultProps = {
  headerValue: "Please select ...",
  options: [
    {
      id: 1,
      image:
        "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png",
      label: "Option 1",
      value: "option",
    },
    {
      id: 2,
      image:
        "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png",
      label: "Option 2",
      value: "option",
    },
    { id: 3, label: "Option 3", value: "option" },
  ],
};

export default DropDown;
export { Header, Body };

const style = {
  color: "blue",
  width: "100%",
  maxHeight: "2.5rem",
  borderRadius: "0.3rem",
  boxShadow: "0 0.1rem 0.5rem rgba(0,0,0,0.051)",
};
