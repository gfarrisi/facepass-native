import React, { useState } from 'react';
import Home from './Components/Home';
import AppProvider from './providers/AppProvider';
import WalletConnect from './Components/WalletConnect/WalletConnect';

export type Views = 'home' | 'qrCamera' | 'frontCamera' | 'sucesss';

const App: React.FC = () => {
  const [view, setView] = useState<Views>('home');
  return (
    <AppProvider>
      <WalletConnect />
      {view === 'home' ? (
        <Home view={view} setView={setView} />
      ) : view === 'qrCamera' ? (
        <></>
      ) : (
        <></>
      )}
    </AppProvider>
  );
};

export default App;
