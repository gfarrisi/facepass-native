import React, { ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useSession from '../hooks/useSession';
import useTransaction from '../hooks/useTransaction';

interface ISessionProvider {
  children: ReactNode;
}

const SessionProvider = ({ children }: ISessionProvider) => {
  const {
    initializeWallet,
    initializeSession,
    wsUri,
    evmAddress,
    wallet,
    setWsUri,
    setEvmAddress,
    deleteEvmAddress,
    getEvmAddress,
  } = useSession();

  const { isLoadingTransaction: isSigningTransaction } = useTransaction();

  useEffect(() => {
    if (wallet) initializeSession();
  }, [wallet]);

  useEffect(() => {
    if (!wallet) initializeWallet();
  }, []);

  /* useEffect(() => {
    getEvmAddress();
  }, []); */

  useEffect(() => {
    deleteEvmAddress();
  }, []);

  /* 
  useEffect(() => {
    setTimeout(() => {
      setEvmAddress('0x9A9A200C587f49f9783B041225269Ea2a307495B');
      setWsUri(
        'wc:60bc1116c0ce51b4ea8ef296864425a0735588886aebbf3606af37071cc40a72@2?relay-protocol=irn&symKey=7d4aeca4a058095fa1436a217ed4ddb4e7d6735115d0efcf8aa3d18e1e1d9f68',
      );
    }, 2000);
  }, []); */

  console.log(isSigningTransaction);

  return children;
};

export default SessionProvider;
