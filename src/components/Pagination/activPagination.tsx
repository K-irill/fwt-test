import React, { FC, useMemo } from "react";
import { PaginationPage } from "./style";

interface IActivPage {
  current: number;
  amount: number;
  onChange: (number: number) => void;
}

const ActivPage: FC<IActivPage> = ({ current, amount, onChange }) => {
  const amountPage = useMemo(
    () => Array.from({ length: amount }, (v, i) => i + 1),
    [amount]
  );

  const kitPages = () => {
    if (current <= 1) return amountPage.slice(0, 3);
    if (current >= amountPage.length) return amountPage.slice(-3);

    const start = current <= 2 ? 0 : current - 2;
    const end =
      current >= amountPage.length - 1 ? amountPage.length : current + 1;

    return amountPage.slice(start, end);
  };

  return (
    <>
      {kitPages().map((el) => {
        return (
          <PaginationPage
            key={el}
            activPage={el === current}
            onClick={() => onChange(el)}
          >
            {el}
          </PaginationPage>
        );
      })}
    </>
  );
};

export default ActivPage;
