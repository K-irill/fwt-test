import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      mainColor: string;
      secondaryColor: string;
      colorBorder: string;
      colorDisabled: string;
      colorPaginationHover: string;
    };

    media: {
      tab1024: string;
      tab768: string;
      phone: string;
    };
  }
}
