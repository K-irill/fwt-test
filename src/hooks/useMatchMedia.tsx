import { useState, useLayoutEffect, useCallback } from "react";

const queries = [
  "(max-width: 768px) and (min-width: 400px)",
  "(max-width: 400px)",
];

export const useMatchMedia: () => {
  tab768?: boolean;
  phone?: boolean;
} = () => {
  const mediaQueryLists = queries.map((query) => matchMedia(query));

  const getValues = useCallback(
    () => mediaQueryLists.map((list) => list.matches),
    [mediaQueryLists]
  );

  const [values, setValues] = useState(getValues);

  useLayoutEffect(() => {
    const handler = () => setValues(getValues);

    mediaQueryLists.forEach((list) => list.addEventListener("change", handler));

    return () =>
      mediaQueryLists.forEach((list) =>
        list.removeEventListener("change", handler)
      );
  }, [getValues, mediaQueryLists]);

  return ["tab768", "phone"].reduce(
    (acc, screen, index) => ({
      ...acc,
      [screen]: values[index],
    }),
    {}
  );
};
