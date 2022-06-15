import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  @media ${(props) => props.theme.media.tab1024} {
    width: 940px;
  }
  @media ${(props) => props.theme.media.tab768} {
    width: 700px;
  }
  @media ${(props) => props.theme.media.phone} {
    width: 280px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 35px 0;
  max-width: 1120px;

  @media ${(props) => props.theme.media.tab1024} {
    max-width: 940px;
  }
  @media ${(props) => props.theme.media.tab768} {
    max-width: 700px;
  }
  @media ${(props) => props.theme.media.phone} {
    max-width: 280px;
    margin: 25px 0;
  }
`;

export const ThemeLogoContainer = styled.div`
  cursor: pointer;
  svg {
    width: 22px;
    height: 22px;

    path {
      fill: ${(props) => props.theme.colors.secondaryColor};
    }
  }
`;
