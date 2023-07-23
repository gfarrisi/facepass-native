import '@walletconnect/react-native-compat';
import '@ethersproject/shims';
import 'fast-text-encoding';
import React, { useEffect, useState } from 'react';
import Home from './Components/Home';
import AppProvider from './providers/AppProvider';
import FaceScan from './Components/FaceScan';
import { QRCamera } from './Components/QRCamera';
import { Waiting } from './Components/Waitings';
import { Button, Text } from 'react-native';
import { signMessage } from './utils/convertFaceDataToWallet';

export type Views =
  | 'home'
  | 'qrCamera'
  | 'frontCamera'
  | 'waiting'
  | 'successs';

const App: React.FC = () => {
  const [view, setView] = useState<Views>('frontCamera');

  return (
    <AppProvider>
      <Button
        onPress={() => signMessage('123', 'yo')}
        title={'touch this...'}
      />
      {/*  {view === 'home' ? (
        <Home view={view} setView={setView} />
      ) : view === 'qrCamera' ? (
        <QRCamera setView={setView} />
      ) : view === 'frontCamera' ? (
        <FaceScan setView={setView} />
      ) : view === 'waiting' ? (
        <Waiting setView={setView} />
      ) : view === 'successs' ? (
        <Success setView={setView} />
      ) : (
        <></>
      )} */}
    </AppProvider>
  );
};

export default App;

//waiting > front camera > sucess > waiting
