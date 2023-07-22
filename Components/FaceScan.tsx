import React, { useState } from 'react';
import { Camera, CameraType } from 'expo-camera';
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from './Icons/Icon';
import { Logo } from './Icons/Logo';
import { QRCode } from './Icons/QRCode';
import { Dots } from './Icons/Dots';
import Space from './Space';
import styles from '../styles';
import { Views } from '../App';
import { dotsPositions } from './Home';

const isWeb = Platform.OS === 'web';

export type Props = {
  setView: (view: Views) => void;
};

const FaceScan: React.FC<Props> = (props) => {
  const { setView } = props;
  const [type, setType] = useState(CameraType.front);

  return (
    <>
      <View style={styles.container}>
        <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']} />
        <Text style={styles.text}>SCANNING TO COMPLETE TRANSACTION</Text>
        <Space h={3} />

        {!isWeb && <Camera style={styles.camera} type={type}></Camera>}
        <Space h={25} />
        <View style={styles.center}>
          <Image
            source={require('./../assets/facescan-pulse.gif')}
            style={{ width: 200, height: 200 }}
          />
        </View>
      </View>
      <Space h={25} />
      <View style={styles.center}>
        <Logo size={160} />
        <Pressable onPress={() => setView('home')}>
          <Text style={styles.text}>Back</Text>
        </Pressable>
      </View>

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
              opacity: 0.4,
            }}
          >
            <Dots size={230} />
          </View>
        );
      })}
    </>
  );
};

export default FaceScan;
