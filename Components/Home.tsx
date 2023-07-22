import React from 'react';
import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Icon } from './Icons/Icon';
import { Logo } from './Icons/Logo';
import { QRCode } from './Icons/QRCode';
import { Dots } from './Icons/Dots';
import Space from './Space';
import styles from '../styles';

type Views = 'home' | 'qrCamera' | 'frontCamera' | 'sucesss';

export type Props = {
  view: Views;
  setView: (view: Views) => void;
};

const dotsPositions = [
  {
    x: -100,
    y: 70,
  },
  {
    x: 400,
    y: 60,
  },
  {
    x: '-10%',
    y: 100,
  },
  {
    x: '150%',
    y: 100,
  },
];

const Home: React.FC<Props> = (props) => {
  const { view, setView } = props;
  return (
    <>
      <View style={styles.container}>
        <Icon size={150} />
        <Logo size={150} />
      </View>
      <View>
        <View style={styles.container}>
          <Text style={{ color: 'white' }}>SCAN HERE</Text>
          <Space h={2} />
          <Pressable onPress={() => setView('qrCamera')}>
            <QRCode size={50} />
          </Pressable>
        </View>
      </View>
      <View style={styles.dots}>
        {dotsPositions?.map((dots) => {
          return (
            <View style={{ top: dots.y, left: dots.x }}>
              <Dots size={230} />
            </View>
          );
        })}
      </View>
    </>
  );
};

export default Home;
