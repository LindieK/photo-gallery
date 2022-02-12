import { useEffect, useState } from "react";

export const useDetectOutsideClick = (el, initialState) => {
  const [isOpen, setIsOpen] = useState(initialState);

  useEffect(() => {
    const pageClickEvent = (e) => {
      //if the menu exists and is clicked outside of
      if (el.current !== null && !el.current.contains(e.target)) {
        setIsOpen(!isOpen);
      }
    };

    //if the menu is open then listen for click events
    if (isOpen) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isOpen, el]);

  return [isOpen, setIsOpen];
};
