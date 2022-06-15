import styled from "styled-components";

export const InputContainer = styled.div`
  input {
    box-sizing: border-box;
    outline: none;
    width: 265px;
    height: 45px;
    padding-left: 15px;
    color: ${(props) => props.theme.colors.secondaryColor};
    background: ${(props) => props.theme.colors.mainColor};
    border: 1px solid ${(props) => props.theme.colors.colorBorder};
    border-radius: 8px;
  }

  @media ${(props) => props.theme.media.tab1024} {
    input {
      width: 220px;
    }
  }
  @media ${(props) => props.theme.media.tab768} {
    input {
      width: 160px;
    }
  }
  @media ${(props) => props.theme.media.phone} {
    input {
      width: 280px;
      margin-bottom: 15px;
    }
  }
`;
