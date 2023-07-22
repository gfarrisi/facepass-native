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
import LinearGradient from 'react-native-linear-gradient';
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
      {/* <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient} start={{x: 0, y:0}} end={{x: 100, y:100}}> */}

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
        {dotsPositions?.map((dots) => {
          return (
            <View
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
      {/* </LinearGradient> */}
    </>
  );
};

export default Home;
