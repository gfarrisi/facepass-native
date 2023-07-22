import React, { useState } from 'react';
import { View } from 'react-native';
import styles from './styles';
import Home from './Components/Home';
import AppProvider from './providers/AppProvider';

const App: React.FC = () => {
  const [view, setView] = useState('home');
  return (
    <AppProvider>
      <View style={styles.app}>
        {view === 'home' ? (
          <Home view={view} setView={setView} />
        ) : view === 'qrCamera' ? (
          <></>
        ) : (
          <></>
        )}
      </View>
    </AppProvider>
  );
};

export default App;
