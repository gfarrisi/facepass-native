import React, { useRef } from 'react';
import { Button, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

function CameraComponent() {
  const cameraRef = useRef<RNCamera>(null); // Explicitly declare the type here

  return (
    <View style={{ flex: 1 }}>
      <RNCamera
        ref={cameraRef}
        style={{ flex: 1 }}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
      />
      <Button
        title="Capture Photo"
        onPress={async () => {
          if (cameraRef.current) {
            const options = { quality: 0.5, base64: true };
            const data = await cameraRef.current.takePictureAsync(options);
            console.log(data.uri);
          }
        }}
      />
    </View>
  );
}

export default CameraComponent;
