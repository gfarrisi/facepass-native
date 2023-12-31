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

const isWeb = Platform.OS === 'web';

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
    right: isWeb ? -150 : -100,
    top: isWeb ? 100 : 250,
  },
  {
    left: isWeb ? -150 : -100,
    bottom: 130,
  },
  {
    right: -100,
    bottom: 0,
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
          <Text style={styles.text}>SCAN HERE TO CONNECT WALLET</Text>
          {/* <Space h={1} /> */}
          <Pressable
            onPress={() => setView(isWeb ? 'frontCamera' : 'qrCamera')}
            style={{ padding: 15 }}
          >
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
                opacity: 0.5,
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
