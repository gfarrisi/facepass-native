import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import Layout from '../layout/Layout';
import { store } from '../redux/store';
import WalletConnect from '../Components/WalletConnect/WalletConnect';

interface IAppProvider {
  children: ReactNode;
}

const AppProvider = ({ children }: IAppProvider) => {
  return (
    <Provider store={store}>
      <WalletConnect />
    </Provider>
  );
};

export default AppProvider;
