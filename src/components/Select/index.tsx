import React, { FC, useRef, useState } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { ISelect } from "../../types";
import { ReactComponent as Arrow } from "../../images/arrowSelect.svg";
import { ReactComponent as CrossSvg } from "../../images/cross.svg";
import outsideClick from "../../hooks/useOutsideClick";
import {
  ToogleDelete,
  SelectComponent,
  SelectHead,
  SelectItem,
  SelectList,
  SelectArrow,
} from "./style";
import useQueryParams from "../../hooks/useQueryParams";

const Select: FC<ISelect> = ({ name, items, onChange }) => {
  const { filter, deleteQueryParams } = useQueryParams();
  const [value, setValue] = useState<string>(
    name === "Author" ? filter.author || name : filter.location || name
  );

  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef(null);
  const toggleOpen = () => setOpen((prev) => !prev);
  outsideClick(ref, toggleOpen);

  return (
    <SelectComponent
      ref={open ? ref : null}
      selectOpen={open}
      onClick={() => setOpen((prev) => !prev)}
    >
      <SelectArrow selectOpen={open}>
        <Arrow />
      </SelectArrow>
      <ToogleDelete
        deleteValue={value !== name}
        onClick={(e) => {
          e.stopPropagation();
          deleteQueryParams(name.toLowerCase());
          setValue(name);
        }}
      >
        <CrossSvg />
      </ToogleDelete>
      <SelectHead deleteValue={value !== name}>{value}</SelectHead>
      <SelectList selectOpen={open}>
        <SimpleBar style={{ maxHeight: "300px" }}>
          {items.map((item) => (
            <SelectItem
              key={item.id}
              onClick={() => {
                setValue(item.name || item.location);
                onChange(item.name || item.location);
              }}
            >
              {item.name || item.location}
            </SelectItem>
          ))}
        </SimpleBar>
      </SelectList>
    </SelectComponent>
  );
};

export default Select;
