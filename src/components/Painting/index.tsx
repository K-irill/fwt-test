import React, { FC } from "react";
import { useAppSelector } from "../../hooks/redux";
import {
  PaintingsContainer,
  Painting,
  PaintingInfoBottom,
  LoadingContainer,
} from "./style";
// import CircularProgress from "@mui/material/CircularProgress";
import { Alert, AlertTitle, CircularProgress } from "@mui/material";

const PaintingPage: FC = () => {
  const { paintings, isLoading } = useAppSelector(
    (state) => state.paintingsReducer
  );
  const { authors, locations } = useAppSelector((state) => state.selectReducer);

  const searchAuthor = (id: string) => {
    let author: string = "";

    authors.forEach((el) => {
      if (el.id === id) return (author = el.name);
    });
    return author;
  };

  const searchLocation = (id: string) => {
    let location: string = "";

    locations.forEach((el) => {
      if (el.id === id) return (location = el.location);
    });
    return location;
  };

  const painting = paintings.map((el) => {
    return (
      <Painting imgUrl={el.imageUrl} key={el.id}>
        <PaintingInfoBottom>
          <span>{el.name}</span>
          <div>
            <p>
              Author:
              <span>{searchAuthor(el.authorId)}</span>
            </p>
            <p>
              Created: <span>{el.created}</span>
            </p>
            <p>
              Location:
              <span>{searchLocation(el.locationId)}</span>
            </p>
          </div>
        </PaintingInfoBottom>
      </Painting>
    );
  });

  return (
    <>
      {isLoading ? (
        <LoadingContainer>
          <CircularProgress sx={{ color: "#b3b3b3" }} />
        </LoadingContainer>
      ) : painting.length === 0 ? (
        <Alert severity="info">
          <AlertTitle>Ничего не найдено!</AlertTitle>
          По вашему запросу ничего не найденно, попробуйте другие параметры
          поиска.
        </Alert>
      ) : (
        <PaintingsContainer>{painting}</PaintingsContainer>
      )}
    </>
  );
};

export default PaintingPage;
