import { RefObject, TouchEvent, useEffect } from "react";

const OutsideClick = (ref: RefObject<HTMLElement>, func: () => void) => {
  useEffect(() => {
    const clickOutside = (e: MouseEvent | TouchEvent): void => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        func();
      }
    };
    document.addEventListener("mousedown", clickOutside);

    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [func, ref]);
};

export default OutsideClick;
