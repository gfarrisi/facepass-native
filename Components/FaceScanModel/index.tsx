import { FaceMesh } from '@mediapipe/face_mesh';
import React, { useRef, useEffect, useState, useMemo } from 'react';
import * as Facemesh from '@mediapipe/face_mesh';
import * as cam from '@mediapipe/camera_utils';
import { drawMesh } from './findFace';
import Canvas from 'react-native-canvas';
// import {
//   CameraDeviceFormat,
//   CameraRuntimeError,
//   FrameProcessorPerformanceSuggestion,
//   PhotoFile,
//   sortFormats,
//   useCameraDevices,
//   useFrameProcessor,
//   VideoFile,
// } from 'react-native-vision-camera';
// import { Camera, frameRateIncluded,CameraPermissionStatus } from 'react-native-vision-camera';
import Webcam from 'react-webcam';

interface FaceProps {
  frontcamRef_?: React.Ref<null>;
}

const WIDTH = 300;
const HEIGHT = 300;

const FaceScan = (props: FaceProps) => {
  const frontcamRef = useRef(null);
  const canvasRef = useRef(null);

  // const [cameraPermission, setCameraPermission] = useState<CameraPermissionStatus>();
  // const [isCameraInitialized, setIsCameraInitialized] = useState(false);
  // const [cameraPosition, setCameraPosition] = useState<'front' | 'back'>('front');

  // const devices = useCameraDevices('wide-angle-camera')
  // const device = devices.front

  function onResults(results: any) {
    console.log('here');
    if (frontcamRef == null) {
      return;
    }
    // @ts-ignore
    const videoWidth = props.frontcamRef.current.video.videoWidth;
    // @ts-ignore
    const videoHeight = props.frontcamRef.current.video.videoHeight;
    if (frontcamRef == null || canvasRef == null) {
      return;
    }

    // Set canvas width
    if (canvasRef.current != null) {
      //@ts-ignore
      //canvasRef.current.width = videoWidth;
      //@ts-ignore
      //canvasRef.current.height = videoHeight;

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
    // Camera.getCameraPermissionStatus().then(setCameraPermission);

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
  }, []);
  // if (cameraPermission == null ) {
  //   // still loading
  //   return null;
  // }

  return (
    <center>
      <div className="App">
        <p>hello</p>
        {/* <Camera
          ref={frontcamRef}
          device={device!}
          isActive={true}
        /> */}
        <Webcam
          ref={frontcamRef}
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
        />{' '}
        <Canvas ref={canvasRef} />
      </div>
    </center>
  );
};

export default FaceScan;
