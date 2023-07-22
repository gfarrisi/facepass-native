import React, { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import useSession from '../../hooks/useSession';
import { useDispatch, useSelector } from 'react-redux';
import { setEvmAddress, setWsUri } from '../../redux/slices/session';
import { RootState } from '../../redux/store';

const WalletConnect = () => {
  const {
    onInitialize,
    wallet,
    session,
    isInitialized,
    evmAddress,
    wsUri,
    initSession,
    reset,
  } = useSession();
  const address = '0x9A9A200C587f49f9783B041225269Ea2a307495B';
  const wsUriFinal = `wc:06d31af21f3c6db76bca1166d27fd4ba52d7c0e622c0d754be63812a6c56ff48@2?relay-protocol=irn&symKey=3445c9538ab78ffce4634db10b3535b56c3673bc35515a624bfca7f8868f38f1`;
  console.log(`
  evmAddress: ${evmAddress}
  isInitialized: ${isInitialized}
  wallet: ${wallet}
  session: ${session}
  wsUri: ${wsUri}
  `);
  const dispatch = useDispatch();

  useEffect(() => {
    if (wallet && wsUri && evmAddress) initSession();
  }, [wallet, wsUri, evmAddress]);

  useEffect(() => {
    if (!wallet) {
      onInitialize();
    }
  }, [wallet]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setEvmAddress(address));
      dispatch(setWsUri(wsUriFinal));
    }, 3500);
  }, []);

  const onPress = () => {
    console.log('yes');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Wallet connect here!: {wsUri}</Text>
      <View style={styles.greeting}>
        {/*  <TextInput
          style={styles.input}
          placeholder="Wallet Connect URI..."
          onChangeText={setWsUri}
          value={wsUri}
        />

        <TextInput
          style={styles.input}
          placeholder="EVM Address..."
          onChangeText={setAddress}
          value={address}
        /> */}

        <Button
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          onPress={onPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    width: '100%',
  },
  greeting: {
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    textAlign: 'center',
  },
});

export default WalletConnect;
