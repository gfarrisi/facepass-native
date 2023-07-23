//component to tell the user they have been connected and we are waiitng
import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Pressable,
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

        <View style={styles.banner}>
          <Text style={styles.text}>WAITING FOR TRANSACTION</Text>
        </View>
        <Space h={2} />
        <View style={styles.flex}>
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
