import React, { FC, useState } from "react";
import useQueryParams from "../../hooks/useQueryParams";
import useDebounce from "../../hooks/useDebounce";
import { InputContainer } from "./style";

const Input: FC = () => {
  const { filter, setQueryParams, deleteQueryParams } = useQueryParams();
  const [value, setValue] = useState<string>(filter.q || "");
  const debounceSet = useDebounce(setQueryParams, 500);
  const debounceDelete = useDebounce(deleteQueryParams, 500);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    debounceSet("q", e.target.value);
    if (!e.target.value.length) return debounceDelete("q");
  };

  return (
    <InputContainer>
      <input placeholder="Name" value={value} onChange={onChange} />
    </InputContainer>
  );
};

export default Input;
