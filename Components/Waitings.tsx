//component to tell the user they have been connected and we are waiitng
import React, { useState, useEffect, useRef } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Pressable,
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
import { dotsPositions } from './Home';
import { Dots } from './Icons/Dots';

const LoadingText = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
      ]),
    ).start();
  }, []);

  return (
    <Animated.View style={[styles.banner, { opacity: fadeAnim }]}>
      <Text style={{ ...styles.text, fontWeight: '500', fontSize: 17 }}>
        WAITING FOR TRANSACTION
      </Text>
    </Animated.View>
  );
};

export type Props = {
  setView: (view: Views) => void;
};

export const Waiting: React.FC<Props> = (props) => {
  const { setView } = props;
  const { address } = useEvmAddress();

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
        <LoadingText />
        <View style={styles.bannerDark}>
          <Text style={styles.textAddress}>{address}</Text>
        </View>
        <Space h={6} />
        <View style={styles.flex}>
          {/* <Pressable onPress={() => setView('home')}>
          <Text style={styles.text}>Back</Text>
        </Pressable> */}
          <Pressable onPress={() => setView('frontCamera')}>
            <Text style={styles.text}>Incoming message</Text>
          </Pressable>
        </View>
        
      </ImageBackground>
    </>
  );
};
