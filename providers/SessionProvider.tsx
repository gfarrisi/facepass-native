import React, { ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useSession from '../hooks/useSession';
import useTransaction from '../hooks/useTransaction';
import { useEvmAddress } from '../hooks/useEvmAddress';

interface ISessionProvider {
  children: ReactNode;
}

const SessionProvider = ({ children }: ISessionProvider) => {
  const { initializeWallet, initializeSession, wsUri, wallet, setWsUri } =
    useSession();
  const { getEvmAddress } = useEvmAddress();

  const { isLoadingTransaction: isSigningTransaction } = useTransaction();

  useEffect(() => {
    if (wallet) initializeSession();
  }, [wallet]);

  useEffect(() => {
    getEvmAddress(); // loads up evm address from async storage into memory
    if (!wallet) initializeWallet();
  }, []);

  return children;
};

export default SessionProvider;
