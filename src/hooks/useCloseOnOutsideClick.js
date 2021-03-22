import React from "react";

/**
 *
 * @param ref - Provide the reference to the DOM element
 * @param callback - Function runs on click event occurred
 * @example useOutsideClick(ref,()=>{your functionality});
 */

const useCloseOnOutsideClick = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref]);
};

export default useCloseOnOutsideClick;
