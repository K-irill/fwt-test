import styled from "styled-components";

export const NavigationContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 20px;
  max-width: 1120px;
  height: 45px;
  margin-bottom: 45px;

  @media ${(props) => props.theme.media.tab1024} {
    grid-template-columns: 220px 220px 220px 220px;
    max-width: 940px;
  }
  @media ${(props) => props.theme.media.tab768} {
    grid-template-columns: 160px 160px 160px 160px;
    grid-column-gap: 20px;
    max-width: 700px;
  }
  @media ${(props) => props.theme.media.phone} {
    display: block;
    max-width: 280px;
    height: 225px;
  }
`;
