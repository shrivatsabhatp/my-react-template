import React, { useState } from "react";
import Input from "../Input/Type1/Input";

import styles from "./Form.module.css";

const Form = ({ ...props }) => {
  const [state, setState] = useState({
    formType: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your Email",
        },
        value: "",
      },
    },
  });

  return (
    <div className={styles.Form}>
      <Input />
    </div>
  );
};

export default Form;
