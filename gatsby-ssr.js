import React from "react";
import { Provider } from "react-redux";

import Layout from "./src/components/layout";
import store from "./src/store/store";

export const wrapPageElement = ({ element, props }) => {
  return (
    <Provider store={store}>
      <Layout {...props}>{element}</Layout>
    </Provider>
  );
};
