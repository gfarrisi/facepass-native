import React from 'react';
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import { Icon } from './Icons/Icon';
import { Logo } from './Icons/Logo';
import { QRCode } from './Icons/QRCode';
import { Dots } from './Icons/Dots';
import Space from './Space';
import styles from '../styles';
import { Views } from '../App';
import { LinearGradient } from 'expo-linear-gradient';

export type Props = {
  view: Views;
  setView: (view: Views) => void;
};

export const dotsPositions = [
  {
    left: -100,
    top: 0,
  },
  {
    right: -150,
    top: 250,
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

const isWeb = Platform.OS === 'web';

const Home: React.FC<Props> = (props) => {
  const { view, setView } = props;
  return (
    <>
      <View style={styles.container}>
        {/* <Icon size={150} />
        <Logo size={150} /> */}
      </View>
      <View>
        <View style={styles.container}>
          <Text style={styles.text}>SCAN HERE</Text>
          <Space h={2} />
          <Pressable onPress={() => setView('frontCamera')}>
            {/* <QRCode size={50} /> */}
            <Text style={styles.text}>SCAN HERE</Text>
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
      {/* <View style={{...styles.linearGradient, }}>
        <LinearGradient
        // Button Linear Gradient
        colors={['#079697','transparent' ,'transparent' ,'transparent', 'transparent']}
        start={{x:0, y:600}}
        style={{...styles.button, height: '100vh'}}>
        </LinearGradient>
      </View> */}
    </>
  );
};

export default Home;
