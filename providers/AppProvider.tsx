import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import Layout from '../layout/Layout';
import { store } from '../redux/store';
import WalletConnect from '../Components/WalletConnect/WalletConnect';
import { View } from 'react-native';
import styles from '../styles';

interface IAppProvider {
  children: ReactNode;
}

const AppProvider = ({ children }: IAppProvider) => {
  return (
    <Provider store={store}>
      <View style={styles.app}>{children}</View>
    </Provider>
  );
};

export default AppProvider;
