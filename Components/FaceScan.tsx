import React, { useEffect, useState, useRef } from 'react';
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
  ImageBackground,
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
import { connectToWallet, signMessage } from '../utils/convertFaceDataToWallet';
import { getPublicKey } from '../utils/publicKeyStorage';
import { useEvmAddress } from '../hooks/useEvmAddress';
import Webcam from 'react-webcam';
import { FacePulse } from './Icons/FacePulse';
import { Animated } from 'react-native';

import { FaceMesh } from '@mediapipe/face_mesh';
import * as cam from '@mediapipe/camera_utils';
import { calculatePoints } from './FaceScanModel/findFace';

const isWeb = Platform.OS === 'web';

const PulsingImage = () => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return (
    <Animated.Image
      style={[
        styles.facePulse,
        {
          transform: [{ scale: scaleAnim }],
        },
      ]}
      source={{ uri: '/.face-pulse.svg' }}
    />
  );
};

export type Props = {
  setView: (view: Views) => void;
};

const FaceScan: React.FC<Props> = (props) => {
  const { setView } = props;
  const [type, setType] = useState(CameraType.front);
  const [isFaceScan, setIsFaceScan] = useState(true);
  const { address, setEvmAddress } = useEvmAddress();
  const webcamRef = useRef(null);
  let camera = null;

  const message = address
    ? `SCANNING TO COMPLETE TRANSACTION`
    : `SCAN TO CREATE WALLET`;

  const resolveFaceData = (faceData: string) => {
    if (!address) {
      //create wallet
      const account = connectToWallet(faceData);
      console.log('account___', { account });
      setEvmAddress(account.address);
      // setPublicKey(account.address);
      setView('qrCamera');
    } else {
      //call send transaction
      signMessage(faceData);
      setView('successs');
    }
  };

  function onResults(results: any) {
    if (webcamRef == null) {
      console.log('nul webcam');
      return;
    }
    if (!isFaceScan) {
      return;
    }

    if (results.multiFaceLandmarks) {
      for (const landmarks of results.multiFaceLandmarks) {
        const res = calculatePoints(landmarks);
        if (res) {
          if (res.status) {
            console.log('Done', res.data);
            setIsFaceScan(false);
            resolveFaceData(res.data);
          } else {
            //console.log(res)
          }
        }
      }
    }
  }

  useEffect(() => {
    //-----
    if (!isWeb) {
      return;
    }
    const faceMesh = new FaceMesh({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
      },
    });

    faceMesh.setOptions({
      maxNumFaces: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });
    faceMesh.onResults(onResults);

    if (
      typeof webcamRef.current !== 'undefined' &&
      webcamRef.current !== null
    ) {
      camera = new cam.Camera(webcamRef.current.video, {
        onFrame: async () => {
          await faceMesh.send({ image: webcamRef.current.video });
        },
        width: 640,
        height: 480,
      });
      camera.start();
    }
    //----
  }, []);

  return (
    <>
      <ImageBackground
        source={require('../assets/blur.png')}
        style={styles.imageBackground}
      >
        <View style={styles.container}>
          <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']} />
          <Text style={styles.text}>{message}</Text>
          <Space h={3} />
          {isWeb ? (
            <Webcam style={styles.camera} />
          ) : (
            <Camera style={styles.camera} type={type}></Camera>
          )}
          <Space h={25} />
          <View style={styles.center}>
            {/* <Image
            source={require('./../assets/facescan-pulse.gif')}
            style={{ width: 200, height: 200 }}
          /> */}
            {/* <FacePulse size={1000}/> */}
          </View>
        </View>
        <Space h={25} />
        <View style={styles.flex}>
          <Logo size={160} />
          <View style={styles.flex}>
            <Pressable onPress={() => resolveFaceData('123')}>
              <Text style={styles.text}>Complete</Text>
            </Pressable>
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
                opacity: 0.5,
              }}
            >
              <Dots size={230} />
            </View>
          );
        })}
      </ImageBackground>
    </>
  );
};

export default FaceScan;
