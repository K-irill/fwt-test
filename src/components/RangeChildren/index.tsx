import React, { FC, useState } from "react";
import { SelectChildren, StyleDash } from "./style";
import useQueryParams from "../../hooks/useQueryParams";

interface IRangeChildren {
  getValueFrom: (valueFrom: string) => void;
  getValueBefore: (valueBefore: string) => void;
}

const RangeChildren: FC<IRangeChildren> = ({
  getValueFrom,
  getValueBefore,
}) => {
  const { filter } = useQueryParams();
  const [valueFrom, setValueFrom] = useState<string>(filter._gte || "");
  const [valueBefore, setValueBefore] = useState<string>(filter._lte || "");

  const setValFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueFrom(e.target.value);
    getValueFrom(e.target.value);
  };

  const setValBefore = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueBefore(e.target.value);
    getValueBefore(e.target.value);
  };

  return (
    <>
      <SelectChildren
        placeholder="from"
        onChange={setValFrom}
        value={valueFrom}
      />
      <StyleDash />
      <SelectChildren
        placeholder="before"
        onChange={setValBefore}
        value={valueBefore}
      />
    </>
  );
};

export default RangeChildren;
