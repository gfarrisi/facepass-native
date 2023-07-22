import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import CameraComponent from './Components/Camera';
import styles from './styles';
import { Icon } from './Components/Icons/Icon';
import { Logo } from './Components/Icons/Logo';
import { QRCode } from './Components/Icons/QRCode';
import { Dots } from './Components/Icons/Dots';
import { Blur } from './Components/Icons/Blur';

export type Props = {
 
};

const dotsPositions = [
  {
    x: -100,
    y: 70
  },
  {
    x: 400,
    y: 60
  },
  {
    x: -120,
    y: 100
  },
  {
    x: 400,
    y: 100
  },
]

const App: React.FC<Props> = ({
}) => {
  return (
    <View style={styles.app}>
      <View style={styles.container}>
        <Icon size={150} />
        <Logo size={150}/>
      </View>
      <View>
          <View style={styles.container}>
          <Text>SCAN HERE</Text>
          <QRCode size={50}/>
        </View>
        </View>
      <View style={styles.dots}>
        {dotsPositions?.map(dots=>{
          return (
            <View style={{top: dots.y, left: dots.x}}>
                <Dots size={230}/>
              </View>
          )
        })}
      </View>
      <View style={styles.blur}>
        {/* <Blur /> */}
      </View>
    </View>
  );
};



export default App;


// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
