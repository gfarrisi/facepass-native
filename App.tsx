import '@walletconnect/react-native-compat';
import '@ethersproject/shims';
import 'fast-text-encoding';
import React, { useState } from 'react';
import Home from './Components/Home';
import FaceMeshWeb from './Components/FaceScanModel/FaceMeshWeb';
import FaceScanModel from './Components/FaceScanModel';

import AppProvider from './providers/AppProvider';
import { QRCamera } from './Components/Camera';

export type Views = 'home' | 'qrCamera' | 'frontCamera' | 'sucesss';

const App: React.FC = () => {
  const [view, setView] = useState<Views>('frontCamera');
  return (
    <AppProvider>
      {view === 'home' ? (
        <Home view={view} setView={setView} />
      ) : view === 'qrCamera' ? (
        <QRCamera setView={setView} />
      ) : view === 'frontCamera' ? (
        <>
          <FaceMeshWeb />
        </>
      ) : (
        <></>
      )}
    </AppProvider>
  );
};

export default App;
