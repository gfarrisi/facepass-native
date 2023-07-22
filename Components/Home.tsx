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
    left: -100,
    top: 0,
  },
  {
    right: -100,
    top: 150,
  },
  {
    left: -100,
    bottom: 100,
  },
  {
    right: -100,
    bottom: -50,
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
      <>
        {dotsPositions?.map((dots, index) => {
          return (
            <View
              key={index}
              style={{
                ...styles.dots,
                top: dots.top,
                left: dots.left,
                right: dots.right,
                bottom: dots.bottom,
              }}
            >
              <Dots size={230} />
            </View>
          );
        })}
      </>
    </>
  );
};

export default Home;
