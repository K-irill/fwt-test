import styled from "styled-components";

type Porps = {
  activPage?: boolean;
};

export const PaginationModule = styled.div`
  display: flex;
  width: 280px;
  margin-top: 20px;
  margin-bottom: 97px;

  @media ${(props) => props.theme.media.phone} {
    margin-top: 10px;
    margin-bottom: 34px;
  }
`;

export const PaginationPage = styled.button<Porps>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 41px;
  height: 41px;
  border: 1px solid ${(props) => props.theme.colors.secondaryColor};
  border-right: none;
  color: ${(props) =>
    props.activPage
      ? `${props.theme.colors.mainColor}`
      : `${props.theme.colors.secondaryColor}`};
  background: ${(props) =>
    props.activPage
      ? `${props.theme.colors.secondaryColor}`
      : `${props.theme.colors.mainColor}`};

  & path {
    fill: ${(props) => props.theme.colors.secondaryColor};
  }

  &:hover {
    background: ${(props) =>
      props.activPage ? "" : `${props.theme.colors.colorPaginationHover}`};
  }
  &:first-of-type {
    border-radius: 8px 0 0 8px;
  }
  &:last-child {
    border-radius: 0 8px 8px 0;
    border-right: 1px solid;
  }
  &:disabled {
    border-color: ${(props) => props.theme.colors.colorDisabled};

    & path {
      fill: ${(props) => props.theme.colors.colorDisabled};
    }
    &:hover {
      cursor: default;
      background: inherit;
    }
  }
`;
