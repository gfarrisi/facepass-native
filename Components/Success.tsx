//component to tell the user they have been connected and we are waiitng
import React, { useState, useEffect, useRef } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Pressable,
  Image,
  ImageBackground,
  Animated,
  Easing,
} from 'react-native';
import { Views } from '../App';
import styles from '../styles';
import { Icon } from './Icons/Icon';
import { Logo } from './Icons/Logo';
import { useEvmAddress } from '../hooks/useEvmAddress';
import Space from './Space';
import Check from './Icons/Check';

const PulsingComponent = () => {
  const flipAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(flipAnim, {
        toValue: 1,
        duration: 8500,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ).start();
  }, []);

  const flipInterpolate = flipAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '1440deg'],
  });
  return (
    <Animated.View
      style={[
        styles.facePulse,
        {
          transform: [{ rotateY: flipInterpolate }],
        },
      ]}
    >
      <Check width={100} />
    </Animated.View>
  );
};

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
          <View style={styles.center}>
            {/* <Image source={{ uri: './../assets/check.png' }} /> */}
            <View>
              <PulsingComponent />
            </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};
