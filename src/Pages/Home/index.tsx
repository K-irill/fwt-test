import { Alert, Snackbar } from "@mui/material";
import React, { FC } from "react";
import Navigation from "../../components/Navigation";
import Pagination from "../../components/Pagination";
import Painting from "../../components/Painting";
import { useAppDispath, useAppSelector } from "../../hooks/redux";
import { ReactComponent as LogoFWT } from "../../images/logoFWT.svg";
import { ReactComponent as ThemeLogo } from "../../images/theme-logo.svg";
import { paintingsSlice } from "../../store/reducers/paintingsSlice";
import { Header, ThemeLogoContainer, Wrapper } from "./style";

const Home: FC = () => {
  const dispatch = useAppDispath();
  const { setTheme, closeError } = paintingsSlice.actions;
  const { isError, errorText } = useAppSelector(
    (state) => state.paintingsReducer
  );

  const handleCloseError = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(closeError());
  };

  return (
    <Wrapper>
      <Header>
        <LogoFWT />
        <ThemeLogoContainer onClick={() => dispatch(setTheme())}>
          <ThemeLogo />
        </ThemeLogoContainer>
      </Header>
      <Navigation />
      {isError ? (
        <Snackbar
          open={isError}
          autoHideDuration={5000}
          onClose={handleCloseError}
        >
          <Alert
            severity="error"
            sx={{ width: "100%" }}
            onClose={handleCloseError}
          >
            Произошла ошибка! Инфорамция об ошибке: {errorText}
          </Alert>
        </Snackbar>
      ) : (
        <Painting />
      )}
      <Pagination />
    </Wrapper>
  );
};

export default Home;
