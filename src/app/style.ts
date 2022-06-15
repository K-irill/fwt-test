import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
body {
  margin: 0;
  background: ${(props) => props.theme.colors.mainColor};
  font-family: "Roboto";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;
