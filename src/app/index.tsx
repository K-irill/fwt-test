import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "../components/AppRouter";
import { ThemeProvider } from "styled-components";
import { Global } from "./style";
import { useAppSelector } from "../hooks/redux";

const App: FC = () => {
  const { isDarkTheme } = useAppSelector((state) => state.paintingsReducer);

  const theme = {
    colors: {
      mainColor: isDarkTheme ? "#000000" : "#FFFFFF",
      secondaryColor: isDarkTheme ? "#FFFFFF" : "#000000",
      colorBorder: isDarkTheme ? "#FFFFFF" : "rgba(0, 0, 0, 0.3)",
      colorDisabled: isDarkTheme ? "#4c4c4c" : "#b3b3b3",
      colorPaginationHover: isDarkTheme ? "#464646" : "#ededed",
    },

    media: {
      tab1024: "(max-width: 1024px) and (min-width: 768px)",
      tab768: "(max-width: 768px) and (min-width: 400px)",
      phone: "(max-width: 400px)",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Global />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
