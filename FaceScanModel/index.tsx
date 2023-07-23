import React, { useRef, useEffect, useState, useMemo } from 'react';
import * as Facemesh from '@mediapipe/face_mesh';
import { FaceMesh } from '@mediapipe/face_mesh';
import * as cam from '@mediapipe/camera_utils';
import { drawMesh } from './findFace';
//mport Canvas from 'react-native-canvas';
import Webcam from 'react-webcam';

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

import styles from '../../styles';

// interface FaceProps {
//   frontcamRef_?: React.Ref<null>;
// }

const WIDTH = 300;
const HEIGHT = 300;

const FaceMeshWeb: React.FC = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  let camera = null;

  function onResults(results: any) {
    if (webcamRef == null) {
      console.log('nul webcam');
      return;
    }
    // @ts-ignore
    const videoWidth = webcamRef.current.video.videoWidth;
    // @ts-ignore
    const videoHeight = webcamRef.current.video.videoHeight;

    // Set canvas width
    if (canvasRef == null || canvasRef.current == null) {
      return;
    }
    canvasRef.current.width = videoWidth;
    canvasRef.current.height = videoHeight;

    const canvasElement = canvasRef.current;
    const canvasCtx = canvasElement.getContext('2d');
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.drawImage(
      results.image,
      0,
      0,
      canvasElement.width,
      canvasElement.height,
    );

    if (results.multiFaceLandmarks) {
      for (const landmarks of results.multiFaceLandmarks) {
        drawMesh(canvasCtx, landmarks);
        // console.log(landmarks)
      }
    }
    // Set canvas width
    if (canvasRef.current != null) {
      //@ts-ignore
      canvasRef.current.width = videoWidth;
      //@ts-ignore
      canvasRef.current.height = videoHeight;

      const canvasCtx = canvasRef.current.getContext('2d');
      canvasCtx.save();
      canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
      canvasCtx.drawImage(results.image, 0, 0, WIDTH, HEIGHT);
      if (results.multiFaceLandmarks) {
        for (const landmarks of results.multiFaceLandmarks) {
          drawMesh(canvasCtx, landmarks);
        }
      }
      canvasCtx.restore();
    }
  }

  useEffect(() => {
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
  }, []);

  return (
    <View style={styles.container}>
      <Webcam ref={webcamRef} />
      <canvas
        ref={canvasRef}
        className="output_canvas"
        style={{
          position: 'absolute',
          marginLeft: 'auto',
          marginRight: 'auto',
          left: 0,
          right: 0,
          textAlign: 'center',
          zindex: 9,
          width: 640,
          height: 480,
        }}
      ></canvas>
    </View>
  );
};

export default FaceMeshWeb;
