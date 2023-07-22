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

export type Props = {
  setView: (view: Views) => void;
};

const FaceScan: React.FC<Props> = (props) => {
  const [type, setType] = useState(CameraType.front);

  return (
    <>
      <View style={styles.container}>
        <LinearGradient
          // Background Linear Gradient
          colors={['rgba(0,0,0,0.8)', 'transparent']}
          // style={styles.background}
        />
        <Text style={styles.text}>SCANNING TO COMPLETE TRANSACTION</Text>
        <Space h={3} />
        {/* <iframe  allow="microphone; camera;"> */}
        {/* <Camera style={styles.camera} type={type}></Camera> */}
        {/* </iframe> */}
        <View style={styles.center}>
          <Image
            source={require('./../assets/facescan-pulse.gif')}
            style={{ width: 250, height: 250 }}
          />
        </View>
      </View>
      <View>
        <View style={styles.center}>
          <Logo size={160} />
        </View>
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
