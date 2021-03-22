import React, { useState } from "react";
import Dialog from "../Dialog/Dialog";

import styles from "./Modal.module.css";

const Modal = ({ ...props }) => {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.Modal}>
      <Dialog
        show={show}
        onClose={() => {
          setShow(false);
        }}
      >
        <h1>Element from parent !!</h1>
      </Dialog>
      <button
        onClick={() => {
          setShow(true);
        }}
      >
        show
      </button>
    </div>
  );
};

export default Modal;
