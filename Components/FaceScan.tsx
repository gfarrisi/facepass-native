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
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from './Icons/Icon';
import { Logo } from './Icons/Logo';
import { QRCode } from './Icons/QRCode';
import { Dots } from './Icons/Dots';
import Space from './Space';
import styles from '../styles';
import { Views } from '../App';

export type Props = {
  setView: (view: Views) => void;
};

const FaceScan: React.FC<Props> = (props) => {
  const [type, setType] = useState(CameraType.front);

  return (
    <>
      <View style={styles.container}>
        <Text>SCAN TO COMPLETE TRANSACTION</Text>
        <Camera style={styles.camera} type={type}></Camera>
      </View>
    </>
  );
};

export default FaceScan;
