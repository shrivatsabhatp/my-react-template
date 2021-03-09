import React from "react";

import styles from "./ProgressBar.module.css";

import PBType1 from "./PBType1";
import PBType2 from "./PBType2";
import PBType3 from "./PBType3";

const ProgressBar = ({ type = "one", percentage = 50 }) => {
  let component = null;

  switch (type) {
    case "one":
      component = <PBType1 percentage={percentage} />;
      break;
    case "two":
      component = <PBType2 percentage={percentage} />;
      break;
    case "three":
      component = <PBType3 label={`${percentage}%`} percentage={percentage} />;
      break;

    default:
      component = <PBType2 percentage={percentage} />;
      break;
  }

  return <React.Fragment>{component}</React.Fragment>;
};

export default ProgressBar;
