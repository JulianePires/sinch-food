import "styled-components";
interface IPalette {
  main: string;
  contrastText: string;
  details: string;
  hover: string;
  hoverBackground: string;
}
declare module "styled-components" {
  export interface DefaultTheme {
    main: string;
    contrastText: string;
    details: string;
    hover: string;
    hoverBackground: string;
  }
}
