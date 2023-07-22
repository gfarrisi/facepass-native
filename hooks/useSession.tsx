import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Web3Wallet } from '@walletconnect/web3wallet';
import { Core } from '@walletconnect/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

import useTransaction from './useTransaction';
import {
  setEvmAddress,
  setIsInitialized,
  setSession,
  setWallet,
  setWsUri,
} from '../redux/slices/session';

const WCMetadata = {
  name: 'FACE PASS',
  description: '✨ Your face is your secret recovery phrase',
  url: 'www.google.com',
  icons: [
    'https://pbs.twimg.com/profile_images/1226080848396640256/aRdvQaOH_400x400.jpg',
  ],
};

const core = new Core({
  projectId: '4953aa2874b96d0a85c65a08de512d56',
});

const useSession = () => {
  const {
    sendTransaction,
    transactionSignature,
    setError: setTransactionError,
    error: txError,
    setTransactionSignature,
    setIsLoading: setIsLoadingTransaction,
  } = useTransaction();

  const dispatch = useDispatch();

  const isInitialized = useSelector(
    (state: RootState) => state.session.isInitialized,
  );

  const evmAddress = useSelector(
    (state: RootState) => state.session.evmAddress,
  );

  const session = useSelector((state: RootState) => state.session.session);

  const wallet = useSelector((state: RootState) => state.session.wallet);

  const wsUri = useSelector((state: RootState) => state.session.wsUri);

  const reset = () => {
    console.log('dispatch()!');
    dispatch(setIsInitialized(false));
    dispatch(setEvmAddress(null));
    dispatch(setWsUri(''));
    dispatch(setSession(null));
  };

  const initializeSession = () => {
    if (!wallet) {
      console.log(`❌ Cannot initialize session without being connected`);
      return;
    }

    wallet.on('session_proposal', async (proposal) => {
      const { requiredNamespaces } = proposal.params;
      const namespaceKey = 'eip155';
      const requiredNamespace = requiredNamespaces[namespaceKey];
      const chains = requiredNamespace.chains || [];

      const accounts = chains.map((chain) => {
        return `${chain}:${evmAddress}`;
      });

      const namespace = {
        accounts,
        chains,
        methods: requiredNamespace.methods || [],
        events: requiredNamespace.events || [],
      };

      const session = await wallet.approveSession({
        id: proposal.id,
        namespaces: {
          [namespaceKey]: namespace,
        },
      });

      dispatch(setIsInitialized(true));
      dispatch(setSession(session));
    });

    wallet.on('session_request', async (event) => {
      const { topic, params, id } = event;
      const { request } = params;
      const { method } = request;

      if (method === 'eth_sendTransaction') {
        try {
          dispatch(setIsLoadingTransaction(true));

          if (txError) dispatch(setTransactionError(''));
          if (transactionSignature) dispatch(setTransactionSignature(''));

          const txSignature = await sendTransaction({
            from: '0x',
            to: '0x',
            data: '0x',
          });
          console.log('✨ txSignature', txSignature);
          await wallet.respondSessionRequest({
            topic,
            response: txSignature,
          });

          dispatch(setTransactionSignature(txSignature.result));
        } catch (err) {
          const errMessage =
            '❌ Failed to Sign Transaction. Please try again later.';

          await wallet.respondSessionRequest({
            topic,
            response: {
              jsonrpc: '2.0',
              id,
              error: {
                code: 0,
                message: errMessage,
              },
            },
          });

          dispatch(setTransactionError(errMessage));
        } finally {
          dispatch(setIsLoadingTransaction(false));
        }
      }
    });

    wallet.on('session_delete', () => {
      reset();
    });
  };

  const initializeWallet = async () => {
    const _wallet = await Web3Wallet.init({
      core,
      metadata: WCMetadata,
    });

    dispatch(setWallet(_wallet));
  };

  return {
    wsUri,
    evmAddress,
    initializeSession,
    reset,
    initializeWallet,
    wallet,
    session,
    isInitialized,
    setEvmAddress: (evmAddress: string) => dispatch(setEvmAddress(evmAddress)),
    getEvmAddress: async () => {
      const asyncStorageEvmAddress = await AsyncStorage.getItem('@evm_address');
      return asyncStorageEvmAddress;
    },
    deleteEvmAddress: async () => {
      await AsyncStorage.removeItem('@evm_address');
      dispatch(setEvmAddress(null));
    },
    setWsUri: (wsUri: string) => dispatch(setWsUri(wsUri)),
  };
};

export default useSession;
