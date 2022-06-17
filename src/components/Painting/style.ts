import styled, { keyframes } from "styled-components";

type Props = {
  imgUrl: string;
};

const animation = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

export const PaintingsContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 360px 360px 360px;
  grid-column-gap: 20px;
  max-width: 1120px;

  @media ${(props) => props.theme.media.tab1024} {
    grid-template-columns: 300px 300px 300px;
    max-width: 940px;
  }
  @media ${(props) => props.theme.media.tab768} {
    grid-template-columns: 340px 340px;
    max-width: 940px;
  }
  @media ${(props) => props.theme.media.phone} {
    grid-template-columns: 280px;
    grid-column-gap: 21px;
    max-width: 280px;
  }
`;

export const ImgPainting = styled.img`
position: absolute;
width:360px;
height: 275px;
border-radius: 20px;

@media ${(props) => props.theme.media.tab1024} {
    width:  300px;
    height: 230px;
  }
  @media ${(props) => props.theme.media.tab768} {
    width:  340px;
    height: 249px;
  }
  @media ${(props) => props.theme.media.phone} {
    width:  280px;
    height: 205px;
  }
`

export const Painting = styled.div<Props>`
  display: grid;
  align-content: end;
  height: 275px;
  border-radius: 20px;
  margin-bottom: 20px;

  @media ${(props) => props.theme.media.tab1024} {
    height: 230px;
  }
  @media ${(props) => props.theme.media.tab768} {
    height: 249px;
  }
  @media ${(props) => props.theme.media.phone} {
    height: 205px;
  }
`;

export const PaintingInfoBottom = styled.div`
  z-index: 1;
  width: 330px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  height: 20px;
  padding: 5px 15px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.75);

  span {
    width: 270px;
    font-size: 16px;
    font-weight: 700;
  }

  div {
    display: none;
  }

  &:hover {
    top: 130px;
    height: 130px;
    animation: ${animation} 0.8s forwards;

    span {
      margin-left: 15px;
      font-size: 18px;
    }

    div {
      display: flex;
      flex-direction: column;
      margin-left: 15px;

      p {
        display: grid;
        grid-template-columns: auto auto;
        grid-column-gap: 8px;
        margin: 0;
        margin-top: 5px;

        span {
          display: flex;
          align-items: center;
          font-size: 13px;
          font-weight: 300;
          margin-left: 0;
        }
      }
    }
  }

  @media ${(props) => props.theme.media.tab1024} {
    width: 270px;

    span {
      font-size: 12.5px;
    }
  }
  @media ${(props) => props.theme.media.tab768} {
    width: 310px;

    span {
      font-size: 14px;
    }
  }
  @media ${(props) => props.theme.media.phone} {
    width: 250px;
    font-size: 12.5px;

    span {
      font-size: 11px;
    }

    &:hover {
      span {
        width: 200px;
      }
      
    }
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;
