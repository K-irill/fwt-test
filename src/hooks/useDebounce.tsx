import { useCallback, useRef } from "react";

const useDebounce = (callback: (...args: any) => void, delay: number) => {
  const time = useRef<any>();
  const debounceCallback = useCallback(
    (...args: any) => {
      if (time.current) clearTimeout(time.current);

      time.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  return debounceCallback;
};

export default useDebounce;
