//component to tell the user they have been connected and we are waiitng
import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Pressable,
  Image,
  ImageBackground,
} from 'react-native';
import { Views } from '../App';
import styles from '../styles';
import { Icon } from './Icons/Icon';
import { Logo } from './Icons/Logo';
import { useEvmAddress } from '../hooks/useEvmAddress';
import Space from './Space';

export type Props = {
  setView: (view: Views) => void;
};

export const Success: React.FC<Props> = (props) => {
  const { setView } = props;
  const { address } = useEvmAddress();

  useEffect(() => {
    const timer = setTimeout(() => {
      setView('waiting');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ImageBackground
        source={require('../assets/blur.png')}
        style={styles.imageBackground}
      >
        <View style={styles.container}>
          <Icon size={150} />
          <Logo size={150} />
        </View>

        <View style={styles.center}>
          <Text style={styles.text}>SUCCESS!</Text>
          <Image source={{ uri: './../assets/check.png' }} />
        </View>
      </ImageBackground>
    </>
  );
};
