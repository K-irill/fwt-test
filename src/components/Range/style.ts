import styled from "styled-components";

type Props = {
  selectOpen?: boolean;
  deleteValue?: boolean;
};

export const RangeComponent = styled.div<Props>`
  cursor: pointer;
  position: relative;
  background: ${(props) => props.theme.colors.mainColor};
  box-sizing: border-box;
  width: 265px;
  height: 45px;
  border: ${(props) =>
    props.selectOpen
      ? `1px solid ${props.theme.colors.colorBorder}`
      : `1px solid ${props.theme.colors.colorBorder}`};
  border-radius: ${({ selectOpen }) => (selectOpen ? "8px 8px 0 0" : "8px")};

  @media ${(props) => props.theme.media.tab1024} {
    width: 220px;
  }
  @media ${(props) => props.theme.media.tab768} {
    width: 160px;
  }
  @media ${(props) => props.theme.media.phone} {
    width: 280px;
  }
`;

export const RangeHead = styled.div`
  padding: 14px 15px;
  width: 218px;
  font-style: normal;
  font-size: 13px;
  line-height: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${(props) => props.theme.colors.secondaryColor};
`;

export const RangeArrow = styled.div<Props>`
  position: absolute;
  right: 18px;
  bottom: ${({ selectOpen }) => (selectOpen ? "20%" : "32%")};
  transform: ${({ selectOpen }) => (selectOpen ? "rotate(180deg)" : "")};

  path {
    fill: ${(props) => props.theme.colors.secondaryColor};
  }
`;

export const RangeOpen = styled.div<Props>`
  z-index: 2;
  position: absolute;
  display: ${({ selectOpen }) => (selectOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  align-self: center;
  background: ${(props) => props.theme.colors.mainColor};
  width: inherit;
  border: 1px solid ${(props) => props.theme.colors.colorBorder};
  border-radius: 0 0 8px 8px;
  border-top: none;
  top: 43px;
  left: -1px;
  box-sizing: border-box;
  padding: 20px 21px;
  margin: 0;

  @media ${(props) => props.theme.media.tab1024} {
    flex-direction: column;
    align-items: center;
    height: 170px;
  }
  @media ${(props) => props.theme.media.tab768} {
    flex-direction: column;
    align-items: center;
    height: 170px;
  }
`;
