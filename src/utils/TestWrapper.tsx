import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";

import store from "../store/store";
import GlobalStyle from "../styles/globalStyle";

import { theme } from "../styles/styles";

interface Props {
  children: ReactNode;
}

const TestWrapper: React.FunctionComponent<Props> = ({ children }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
      <ToastContainer />
    </ThemeProvider>
  </Provider>
);

export default TestWrapper;
