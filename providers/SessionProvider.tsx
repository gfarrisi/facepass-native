import React, { ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useSession from '../hooks/useSession';
import useTransaction from '../hooks/useTransaction';
import { useEvmAddress } from '../hooks/useEvmAddress';

interface ISessionProvider {
  children: ReactNode;
}

const SessionProvider = ({ children }: ISessionProvider) => {
  const { initializeWallet, initializeSession, wallet, wsUri, session } =
    useSession();
  console.log(wsUri, session);
  useEffect(() => {
    if (wallet && wsUri) initializeSession();
  }, [wallet, wsUri]);

  useEffect(() => {
    if (!wallet) initializeWallet(true);
  }, []);

  return children;
};

export default SessionProvider;
