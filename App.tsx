import '@walletconnect/react-native-compat';
import '@ethersproject/shims';
import 'fast-text-encoding';
import React, { useState } from 'react';
import Home from './Components/Home';
import AppProvider from './providers/AppProvider';
import FaceScan from './Components/FaceScan';
import { QRCamera } from './Components/QRCamera';
import { Waiting } from './Components/Waitings';
import { Success } from './Components/Success';

export type Views = 'home' | 'qrCamera' | 'frontCamera' | 'waiting' | 'sucesss';

const App: React.FC = () => {
  const [view, setView] = useState<Views>('frontCamera');
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
      ) : view === 'sucesss' ? (
        <Success setView={setView} />
      ) : (
        <></>
      )}
    </AppProvider>
  );
};

export default App;

//waiting > front camera > sucess > waiting
