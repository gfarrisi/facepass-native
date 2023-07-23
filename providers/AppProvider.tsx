import React, { ReactNode, useEffect } from 'react';
import { Provider } from 'react-redux';
import Layout from '../layout/Layout';
import { store } from '../redux/store';
import { View } from 'react-native';
import styles from '../styles';
import useSession from '../hooks/useSession';
import useTransaction from '../hooks/useTransaction';
import SessionProvider from './SessionProvider';

interface IAppProvider {
  children: ReactNode;
}

const AppProvider = ({ children }: IAppProvider) => {
  return (
    <Provider store={store}>
      <SessionProvider>
        <View style={styles.app}>{children}</View>
      </SessionProvider>
    </Provider>
  );
};

export default AppProvider;
