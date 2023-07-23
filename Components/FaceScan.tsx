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
import {
  connectToWallet,
  createTransaction,
  signMessage,
} from '../utils/convertFaceDataToWallet';
import { getPublicKey } from '../utils/publicKeyStorage';
import { useEvmAddress } from '../hooks/useEvmAddress';
import Webcam from 'react-webcam';
import { FacePulse } from './Icons/FacePulse';
import { Animated } from 'react-native';

import { FaceMesh } from '@mediapipe/face_mesh';
import * as cam from '@mediapipe/camera_utils';
import { Reset, calculatePoints } from './FaceScanModel/findFace';
import { JsonRpcResponse } from '@json-rpc-tools/utils';
import { id } from 'ethers/lib/utils';
import useSession from '../hooks/useSession';
import { useEvent } from '../hooks/useEvent';

const isWeb = Platform.OS === 'web';

export type Props = {
  setView: (view: Views) => void;
};

const FaceScan: React.FC<Props> = (props) => {
  const { wallet } = useSession();
  const { setView } = props;
  const [type, setType] = useState(CameraType.front);
  const [isFaceScan, setIsFaceScan] = useState(true);
  const { address, setEvmAddress } = useEvmAddress();
  const { event } = useEvent();
  const webcamRef = useRef(null);
  let camera = null;
  useEffect(() => {
    Reset();
  }, []);

  const message = address
    ? `SCANNING TO COMPLETE TRANSACTION`
    : `SCAN TO CREATE WALLET`;

  const resolveFaceData = (
    faceData: string,
    isEthSendingTransaction?: boolean,
  ) => {
    if (!address) {
      //create wallet
      const account = connectToWallet(faceData);
      console.log('account___', { account });
      setEvmAddress(account.address);
      // setPublicKey(account.address);
      setView('qrCamera');
    } else {
      (async () => {
        if (!wallet) {
          throw new Error('wallet missing');
        }
        if (!event) {
          throw new Error('event missing');
        }
        //call send transaction
        // signMessage(faceData);

        let txSignature;

        if (isEthSendingTransaction) {
          txSignature = await signMessage(faceData, message);
        } else {
          txSignature = await createTransaction(faceData, {
            to: '',
            value: '',
            data: '',
          });
        }

        const response: JsonRpcResponse = {
          id: event.id,
          jsonrpc: '2.0',
          result: txSignature,
        };

        wallet
          .respondSessionRequest({
            topic: event.topic,
            response,
          })
          .then(() => {
            setView('success');
          });
      })();
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
            <Webcam style={styles.camera} ref={webcamRef} />
          ) : (
            <Camera style={styles.camera} type={type}></Camera>
          )}
          <Space h={35} />
          <View style={styles.center}>
            <Logo size={160} />
            <View style={styles.flex}>
              <Pressable
                onPress={() => {
                  if (!address) {
                    throw new Error('no address found');
                  }
                  resolveFaceData(address);
                }}
              >
                <Text style={styles.text}>Complete</Text>
              </Pressable>
            </View>
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
