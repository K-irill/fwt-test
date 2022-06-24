import styled from "styled-components";
import { ReactComponent as Dash } from "../../images/dash.svg";

export const SelectChildren = styled.input`
  z-index: 1;
  width: 95px;
  height: 45px;
  box-sizing: border-box;
  background: #efefef;
  border: 1px solid rgba(0, 0, 0, 0.3);
  outline: none;
  padding-left: 15px;
  border-radius: 8px;

  @media ${(props) => props.theme.media.tab1024} {
    width: 110px;
    height: 45px;
  }
  @media ${(props) => props.theme.media.tab768} {
    width: 110px;
    height: 45px;
  }
`;

export const StyleDash = styled(Dash)`
  margin: 0 10px;
  line {
    stroke: ${(props) => props.theme.colors.secondaryColor};
  }
  @media ${(props) => props.theme.media.tab1024} {
    margin: 15px 0px;
  }
  @media ${(props) => props.theme.media.tab768} {
    margin: 15px 0px;
  }
`;
