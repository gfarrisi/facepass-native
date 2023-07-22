//component to tell the user they have been connected and we are waiitng
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Pressable } from 'react-native';
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

  return (
    <>
      <View style={styles.container}>
        <Icon size={150} />
        <Logo size={150} />
      </View>

      <View style={styles.banner}>
        <Text style={styles.text}>SUCCESS!</Text>
      </View>
      <Space h={1} />
      <View style={styles.flex}>
        <Pressable onPress={() => setView('waiting')}>
          <Text style={styles.text}>go back to waiting</Text>
        </Pressable>
      </View>
    </>
  );
};
