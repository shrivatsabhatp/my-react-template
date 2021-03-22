import React, { useEffect, useState } from "react";
import styles from "./scrollToHome.module.css";

export default function ScrollToHome(props) {
  const top = () => window.scrollTo(0, 0);

  const [show, setShow] = useState({ state: false, value: 0 });

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      console.log(window.scrollY);
      setShow({ state: true, value: window.scrollY });
    });
    return () => {
      window.removeEventListener("scroll", (e) => {
        console.log(window.scrollY);
        setShow(false);
      });
    };
  }, []);

  return (
    <div className={styles.container}>
      <section>section 1</section>
      <section>section 2</section>
      <section>section 3</section>
      <section>section 4</section>
      {/* <section>section 5</section> */}
      {show.state && show.value > 600 && <button onClick={top}>TOP</button>}
    </div>
  );
}
