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
    reset,
  } = useSession();
  const address = '';
  const wsUriFinal = ``;
  console.log(`
  evmAddress: ${evmAddress}
  isInitialized: ${isInitialized}
  wallet: ${wallet}
  session: ${session}
  wsUri: ${wsUri}
  `);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!wsUri || !evmAddress) return;
    onInitialize();
  }, [evmAddress, wsUri]);

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
    padding: '50px',
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
