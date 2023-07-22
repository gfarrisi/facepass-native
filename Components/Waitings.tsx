//component to tell the user they have been connected and we are waiitng
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Pressable } from 'react-native';
import { Views } from '../App';
import styles from '../styles';
import { Icon } from './Icons/Icon';
import { Logo } from './Icons/Logo';

export type Props = {
  setView: (view: Views) => void;
};

export const Waiting: React.FC<Props> = (props) => {
  const { setView } = props;

  return (
    <View style={styles.container}>
      <Icon size={150} />
      <Logo size={150} />
      <View style={styles.flex}>
        <Pressable onPress={() => setView('home')}>
          <Text style={styles.text}>Back</Text>
        </Pressable>
        <Pressable onPress={() => setView('home')}>
          <Text style={styles.text}>Complete</Text>
        </Pressable>
      </View>
    </View>
  );
};
