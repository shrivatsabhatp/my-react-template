import React from "react";

import styles from "./App.module.css";

// higher order component
import Aux from "../hoc/Aux";
import withClass from "../hoc/withClass";

const App = ({ ...props }) => {
  return <Aux>Hello World</Aux>;
};

export default withClass(App, styles.App);
