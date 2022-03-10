import React, { ReactNode } from "react";
import styled, { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";

import "normalize.css";
import "boxicons/css/boxicons.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";

import GlobalStyle from "../styles/globalStyle";
import { theme } from "../styles/styles";
import Nav from "./Nav/Nav";

interface ContainerProps {}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex: 1;
  min-height: 100vh;
`;

const Content = styled.div<ContainerProps>`
  display: flex;
  flex: 1;
  padding: 50px 80px;
`;

interface Props {
  children: ReactNode;
}

const Layout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <Nav />
        <Content>{children}</Content>
      </Container>
      <ToastContainer />
    </ThemeProvider>
  );
};

export default Layout;
