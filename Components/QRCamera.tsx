// import React, { useState, useEffect } from 'react';
// import { Text, View, StyleSheet, Button } from 'react-native';
// import { BarCodeScannedCallback, BarCodeScanner } from 'expo-barcode-scanner';
// import useSession from '../hooks/useSession';
// import { Views } from '../App';

// export type Props = {
//   setView: (view: Views) => void;
// };

// export const QRCamera: React.FC<Props> = (props) => {
//   const { setView } = props;
//   const [hasPermission, setHasPermission] = useState<boolean | null>(null);
//   const [scanned, setScanned] = useState(false);
//   const { setWsUri } = useSession();

//   useEffect(() => {
//     const getBarCodeScannerPermissions = async () => {
//       const { status } = await BarCodeScanner.requestPermissionsAsync();
//       setHasPermission(status === 'granted');
//     };

//     getBarCodeScannerPermissions();
//   }, []);

// const handleBarCodeScanned: BarCodeScannedCallback = ({ type, data }) => {
//   setScanned(true);
//   setWsUri(data);
//   //@ts-ignore
//   alert(`Bar code with type ${type} and data ${data} has been scanned!`);
//   setView('frontCamera');
// };

//   if (hasPermission === null) {
//     return <Text>Requesting for camera permission</Text>;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <BarCodeScanner
//         onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
//         style={StyleSheet.absoluteFillObject}
//       />
//       {scanned && (
//         <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//   },
// });

import React, { useState } from 'react';
import { Views } from '../App';
import { Button, TextInput, View, Text, ImageBackground } from 'react-native';
import styles from '../styles';
import { useWsUri } from '../hooks/useWsUri';

export type Props = {
  setView: (view: Views) => void;
};

export const QRCamera: React.FC<Props> = (props) => {
  const { setView } = props;
  const [data, setData] = useState('No result');
  const [text, onChangeText] = React.useState('Copy Link from Wallet Connect');
  const { setWsUri } = useWsUri();
  return (
    <ImageBackground
      source={require('../assets/blur.png')}
      style={styles.imageBackground}
    >
      <View style={styles.center}>
        {/* <QrReader
        constraints={{ facingMode: 'environment' }}
        onResult={(result, error) => {
          console.log({ result, error });
          if (!!result) {
            console.log({ result });
            setData(JSON.stringify(result));
          }

          if (!!error) {
            console.info('ERROR', error);
          }
        }}
        style={{
          width: '100%',
        }}
      />
      <p>{data}</p> */}
        <Text style={styles.textAddress}>Wallet Connect</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          onFocus={() => onChangeText('')}
        />
        <Button
          onPress={() => {
            setWsUri(text);
            setView('waiting');
          }}
          title="connect"
          color="#079697"
        />
      </View>
    </ImageBackground>
  );
};
