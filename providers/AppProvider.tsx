import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import Layout from "../layout/Layout";
import { store } from "../redux/store";

interface IAppProvider {
  children: ReactNode;
}

const AppProvider = ({ children }: IAppProvider) => {
  return (
    <Provider store={store}>
      <Layout>{children}</Layout>
    </Provider>
  );
};

export default AppProvider;
