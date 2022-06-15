import { useSearchParams } from "react-router-dom";
import { IQuery } from "../types";

const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filter: IQuery = {
    q: searchParams.get("q") || "",
    author: searchParams.get("author") || "",
    location: searchParams.get("location") || "",
    _gte: searchParams.get("created_gte") || "",
    _lte: searchParams.get("created_lte") || "",
  };

  const setQueryParams = (name: string, value: string) => {
    searchParams.set(name, value);
    setSearchParams(searchParams);
  };

  const deleteQueryParams = (name: string) => {
    searchParams.delete(name);
    setSearchParams(searchParams);
  };

  return { filter, setQueryParams, deleteQueryParams };
};

export default useQueryParams;
