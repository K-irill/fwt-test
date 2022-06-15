import React, { FC, useEffect } from "react";
import { fetchAuthors, fetchLocations } from "../../utils/api";
import { useAppDispath, useAppSelector } from "../../hooks/redux";
import Input from "../Input";
import Select from "../Select";
import Range from "../Range";
import useQueryParams from "../../hooks/useQueryParams";
import { NavigationContainer } from "./style";

const Navigation: FC = () => {
  const dispatch = useAppDispath();
  const { authors, locations } = useAppSelector((state) => state.selectReducer);
  const { setQueryParams } = useQueryParams();

  useEffect(() => {
    dispatch(fetchAuthors());
    dispatch(fetchLocations());
  }, [dispatch]);

  return (
    <NavigationContainer>
      <Input />
      <Select
        name="Author"
        items={authors}
        onChange={(value) => setQueryParams("author", value)}
      />
      <Select
        name="Location"
        items={locations}
        onChange={(value) => setQueryParams("location", value)}
      />
      <Range name="Created" />
    </NavigationContainer>
  );
};

export default Navigation;
