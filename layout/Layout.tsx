import React, { ReactNode } from 'react';
import { View } from 'react-native';
import styles from '../styles';

interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return <View style={styles.app}>{children}</View>;
};

export default Layout;
