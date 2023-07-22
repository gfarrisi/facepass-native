import React, { useState } from 'react';
import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import styles from './styles';
import { Icon } from './Components/Icons/Icon';
import { Logo } from './Components/Icons/Logo';
import { QRCode } from './Components/Icons/QRCode';
import { Dots } from './Components/Icons/Dots';
import Space from './Components/Space';
import Home from './Components/Home';

export type Props = {};

const App: React.FC<Props> = ({}) => {
  const [view, setView] = useState('home');
  return (
    <View style={styles.app}>
      {view === 'home' ? (
        <Home view={view} setView={setView} />
      ) : view === 'qrCamera' ? (
        <></>
      ) : (
        <></>
      )}
    </View>
  );
};

export default App;
