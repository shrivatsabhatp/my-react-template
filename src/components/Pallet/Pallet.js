import React from "react";

import styles from "./Pallet.module.css";

const Pallet = ({ ...props }) => {
  return (
    <div className={styles.Pallet}>
      <section className={styles.TopSection}>
        {React.Children.map(
          props.children,
          (child) => child.type === "header" && React.Children.only(child)
        )}
      </section>
      <section className={styles.BottomSection}>
        <form className={styles.BottomBody}>
          {React.Children.map(
            props.children,
            (child) => child.type !== "header" && React.Children.only(child)
          )}
        </form>
      </section>
    </div>
  );
};

export default Pallet;
