import { createGlobalStyle } from "styled-components";

import "react-datepicker/dist/react-datepicker.css";

import { ThemeContainer } from "./styles";
import { baseFontSize, fontFamily } from "./typography";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    font-size: ${baseFontSize}px;
    font-family: ${fontFamily};
    background-color: ${({ theme }: ThemeContainer) => theme.html.bg};
    color: ${({ theme }: ThemeContainer) => theme.html.text};
  }
`;

export default GlobalStyle;
