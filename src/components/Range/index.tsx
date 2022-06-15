import React, { FC, useRef, useState } from "react";
import outsideClick from "../../hooks/useOutsideClick";
import { RangeArrow, RangeComponent, RangeHead, RangeOpen } from "./style";
import { ReactComponent as Arrow } from "../../images/arrowSelect.svg";
import { IRange } from "../../types";
import RangeChildren from "../RangeChildren";
import useDebounce from "../../hooks/useDebounce";
import useQueryParams from "../../hooks/useQueryParams";

const Range: FC<IRange> = ({ name }) => {
  const [value] = useState<string>(name);
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef(null);
  const { setQueryParams, deleteQueryParams } = useQueryParams();
  const debounceSet = useDebounce(setQueryParams, 500);
  const debounceDelete = useDebounce(deleteQueryParams, 500);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };
  outsideClick(ref, toggleOpen);

  const setValueFrom = (valueFrom: string) => {
    if (valueFrom) debounceSet("created_gte", valueFrom);
    if (!valueFrom?.length) debounceDelete("created_gte");
  };

  const setValueBefore = (valueBefore: string) => {
    if (valueBefore) debounceSet("created_lte", valueBefore);
    if (!valueBefore?.length) debounceDelete("created_lte");
  };

  return (
    <RangeComponent
      ref={open ? ref : null}
      selectOpen={open}
      onClick={() => setOpen((prev) => !prev)}
    >
      <RangeHead>{value}</RangeHead>
      <RangeArrow selectOpen={open}>
        <Arrow />
      </RangeArrow>
      <RangeOpen selectOpen={open} onClick={(e) => e.stopPropagation()}>
        <RangeChildren
          getValueFrom={(value) => setValueFrom(value)}
          getValueBefore={(value) => {
            setValueBefore(value);
          }}
        ></RangeChildren>
      </RangeOpen>
    </RangeComponent>
  );
};

export default Range;
