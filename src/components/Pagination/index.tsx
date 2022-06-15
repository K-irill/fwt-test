import React, { FC, useCallback, useEffect, useState } from "react";
import { PaginationModule, PaginationPage } from "./style";
import { ReactComponent as ArrowLeft } from "../../images/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../images/arrowRight.svg";
import { ReactComponent as DoubleArrowLeft } from "../../images/doubleArrowLeft.svg";
import { ReactComponent as DoubleArrowRight } from "../../images/doubleArrowRight.svg";
import ActivPage from "./activPagination";
import { useAppDispath, useAppSelector } from "../../hooks/redux";
import { searchPaintings } from "../../utils/api";
import { useSearchParams } from "react-router-dom";
import { useMatchMedia } from "../../hooks/useMatchMedia";

const Pagination: FC = () => {
  const dispatch = useAppDispath();
  const [searchParams] = useSearchParams();
  const [current, setCurrent] = useState<number>(1);
  const { totalCount } = useAppSelector((state) => state.paintingsReducer);
  const { authors, locations } = useAppSelector((state) => state.selectReducer);
  const { tab768, phone } = useMatchMedia();

  const limitPainting = phone ? 12 : tab768 ? 12 : 9;
  const amount = Math.ceil(totalCount / limitPainting);

  const getId = useCallback(() => {
    let authorId: string = "";
    let locationId: string = "";
    authors.forEach((el) =>
      el.name === searchParams.get("author") ? (authorId = el.id) : ""
    );
    locations.forEach((el) =>
      el.location === searchParams.get("location") ? (locationId = el.id) : ""
    );

    return { authorId, locationId };
  }, [authors, locations, searchParams]);

  const setQueryParamsFilter = useCallback(() => {
    return {
      q: searchParams.get("q") || "",
      author: getId().authorId,
      location: getId().locationId,
      _gte: searchParams.get("created_gte") || "",
      _lte: searchParams.get("created_lte") || "",
    };
  }, [getId, searchParams]);

  useEffect(() => {
    dispatch(
      searchPaintings({
        filters: setQueryParamsFilter(),
        page: current,
        limit: limitPainting,
      })
    );
  }, [setQueryParamsFilter, current, dispatch, limitPainting]);

  return (
    <PaginationModule>
      <PaginationPage onClick={() => setCurrent(1)} disabled={current < 2}>
        <DoubleArrowLeft />
      </PaginationPage>
      <PaginationPage
        onClick={() => setCurrent((prev) => prev - 1)}
        disabled={current === 1}
      >
        <ArrowLeft />
      </PaginationPage>
      <ActivPage
        current={current}
        amount={amount}
        onChange={(number) => setCurrent(number)}
      />
      <PaginationPage
        onClick={() => setCurrent((prev) => prev + 1)}
        disabled={current >= amount}
      >
        <ArrowRight />
      </PaginationPage>
      <PaginationPage
        onClick={() => setCurrent(amount)}
        disabled={current >= amount}
      >
        <DoubleArrowRight />
      </PaginationPage>
    </PaginationModule>
  );
};

export default Pagination;
