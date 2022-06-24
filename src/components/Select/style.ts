import styled from "styled-components";

type Props = {
  selectOpen?: boolean;
  deleteValue?: boolean;
};

export const SelectComponent = styled.div<Props>`
  cursor: pointer;
  position: relative;
  background: ${(props) => props.theme.colors.mainColor};
  outline: none;
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.secondaryColor};
  width: 265px;
  height: 45px;
  box-shadow: ${(props) =>
    props.selectOpen
      ? `0px 0px 0px 1px ${props.theme.colors.secondaryColor}`
      : `0px 0px 0px 1px ${props.theme.colors.colorBorder}`};
  border-radius: ${(props) => (props.selectOpen ? "8px 8px 0 0" : "8px")};

  @media ${(props) => props.theme.media.tab1024} {
    width: 220px;
  }
  @media ${(props) => props.theme.media.tab768} {
    width: 160px;
  }
  @media ${(props) => props.theme.media.phone} {
    width: 280px;
    margin-bottom: 15px;
  }
`;

export const SelectArrow = styled.div<Props>`
  position: absolute;
  right: 18px;
  bottom: ${({ selectOpen }) => (selectOpen ? "20%" : "32%")};
  transform: ${({ selectOpen }) => (selectOpen ? "rotate(180deg)" : "")};

  path {
    fill: ${(props) => props.theme.colors.secondaryColor};
  }
`;

export const SelectHead = styled.div<Props>`
  padding: 14px 15px;
  width: ${(props) => (props.deleteValue ? "200px" : "218px")};
  font-style: normal;
  font-size: 13px;
  line-height: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${(props) => props.theme.colors.secondaryColor};

  @media ${(props) => props.theme.media.tab1024} {
    width: ${(props) => (props.deleteValue ? "150px" : "220px")};
  }
  @media ${(props) => props.theme.media.tab768} {
    width: ${(props) => (props.deleteValue ? "100px" : "130px")};
  }
  @media ${(props) => props.theme.media.phone} {
    width: ${(props) => (props.deleteValue ? "220px" : "280px")};
    margin-bottom: 15px;
  }
`;

export const ToogleDelete = styled.div<Props>`
  display: ${(props) => (props.deleteValue ? "" : "none")};
  position: absolute;
  right: 38px;
  bottom: 30%;

  svg {
    path {
      fill: ${(props) => props.theme.colors.secondaryColor};
    }
  }
`;

export const SelectList = styled.ul<Props>`
  z-index: 2;
  position: absolute;
  list-style: none;
  display: ${(props) => (props.selectOpen ? "block" : "none")};
  background: ${(props) => props.theme.colors.mainColor};
  width: 100%;
  box-shadow: 0px 0px 0px 1px ${(props) => props.theme.colors.secondaryColor};
  border-radius: 0 0 8px 8px;
  max-height: 300px;
  top: 45px;
  padding: 0;
  margin: 0;

  .simplebar-scrollbar::before {
    background-color: ${(props) => props.theme.colors.secondaryColor};
  }
`;
export const SelectItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  box-sizing: border-box;
  word-break: break-word;
  width: 100%;
  padding: 16px 15px;
  &:hover {
    color: ${(props) => props.theme.colors.mainColor};
    background: ${(props) => props.theme.colors.secondaryColor};
  }
  &:last-child {
    border-radius: 0 0 8px 8px;
  }
`;
