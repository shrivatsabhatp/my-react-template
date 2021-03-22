import React, { useRef } from "react";
import ReactDOM from "react-dom";
import useEventListener from "../../hooks/useEventListener";

import styles from "./Dialog.module.css";

const Dialog = ({ show = true, onClose = () => null, children }) => {
  const dialogRef = useRef();

  // Event listener to close dialog on click outside element
  useEventListener(
    "mousedown",
    (event) => {
      if (event.defaultPrevented) {
        return; // Do nothing if event was already processed
      }
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        // console.log("Click outside deceted -> closeing dialog...");
        onClose();
      }
    },
    window
  );

  return (
    <React.Fragment>
      {show
        ? ReactDOM.createPortal(
            <div className={styles.Dialog}>
              <div className={styles.DialogContainer} ref={dialogRef}>
                <button className={styles.Close}>
                  <span />
                </button>
                <div>{children}</div>
              </div>
            </div>,
            document.body
          )
        : null}
    </React.Fragment>
  );
};

export default Dialog;
