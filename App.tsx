import '@walletconnect/react-native-compat';
import '@ethersproject/shims';
import 'fast-text-encoding';
import React, { useState } from 'react';
import Home from './Components/Home';
import AppProvider from './providers/AppProvider';
import FaceScan from './Components/FaceScan';
import { QRCamera } from './Components/Camera';

export type Views = 'home' | 'qrCamera' | 'frontCamera' | 'sucesss';

const App: React.FC = () => {
  const [view, setView] = useState<Views>('home');
  return (
    <AppProvider>
      {view === 'home' ? (
        <Home view={view} setView={setView} />
      ) : view === 'qrCamera' ? (
        <QRCamera setView={setView} />
      ) : view === 'frontCamera' ? (
        <FaceScan setView={setView} />
      ) : (
        <></>
      )}
    </AppProvider>
  );
};

export default App;
