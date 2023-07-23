import '@walletconnect/react-native-compat';
import '@ethersproject/shims';
import 'fast-text-encoding';
import React, { useEffect, useState } from 'react';
import Home from './Components/Home';
import FaceMeshWeb from './Components/FaceScanModel/FaceMeshWeb';
import FaceScanModel from './Components/FaceScanModel';

import AppProvider from './providers/AppProvider';
import FaceScan from './Components/FaceScan';
import { QRCamera } from './Components/QRCamera';
import { Waiting } from './Components/Waitings';
import { Success } from './Components/Success';
import { useEvmAddress } from './hooks/useEvmAddress';

export type Views =
  | 'home'
  | 'qrCamera'
  | 'frontCamera'
  | 'waiting'
  | 'successs';

const App: React.FC = () => {
  const [view, setView] = useState<Views>('frontCamera');
  const { address } = useEvmAddress();

  useEffect(() => {
    if (address && view === 'frontCamera') setView('qrCamera');
  }, [address]);

  return (
    <AppProvider>
      {view === 'home' ? (
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
      )}
    </AppProvider>
  );
};

export default App;

//waiting > front camera > sucess > waiting
