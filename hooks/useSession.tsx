import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Web3Wallet } from '@walletconnect/web3wallet';
import { Core } from '@walletconnect/core';
import { getSdkError, parseUri } from '@walletconnect/utils';
import { useWsUri } from './useWsUri';

import useTransaction from './useTransaction';
import {
  setIsInitialized,
  setSession,
  setWallet,
} from '../redux/slices/session';
import { useEvmAddress } from './useEvmAddress';

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
  const { wsUri, setWsUri } = useWsUri();

  const { getEvmAddress } = useEvmAddress();

  const { deleteEvmAddress } = useEvmAddress();

  const dispatch = useDispatch();

  const isInitialized = useSelector(
    (state: RootState) => state.session.isInitialized,
  );

  const session = useSelector((state: RootState) => state.session.session);

  const wallet = useSelector((state: RootState) => state.session.wallet);

  const reset = () => {
    deleteEvmAddress();
    dispatch(setIsInitialized(false));
    setWsUri('');
    dispatch(setSession(null));
  };

  const initializeSession = async () => {
    if (!wallet) {
      console.log(`❌ Cannot initialize session without being connected`);
      return;
    }

    wallet.on('session_proposal', async (proposal) => {
      const evmAddress =
        '0x9A9A200C587f49f9783B041225269Ea2a307495B'; /* await getEvmAddress(); */
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

    wallet.core.pairing
      .pair({ uri: wsUri })
      .catch((err) =>
        console.log(`❌ Failed to pair wallet connect. Error: ${err.message}`),
      );
  };

  const initializeWallet = async (setIfSessionActive?: boolean) => {
    const _wallet = await Web3Wallet.init({
      core,
      metadata: WCMetadata,
    });

    const activeSessions = await _wallet.getActiveSessions();

    const sessionValues = Object.values(activeSessions ?? {});

    if (setIfSessionActive) {
      const sessionPairingTopic = sessionValues?.[0]?.pairingTopic;

      const wsSocketUri = sessionPairingTopic
        ? `wc:${sessionPairingTopic}@2?relay-protocol=irn&symKey=xxxxxx`
        : '';

      if (wsSocketUri && sessionPairingTopic) {
        setWsUri(wsSocketUri);
        dispatch(setSession(sessionPairingTopic ? sessionValues[0] : null));
      }
    }

    dispatch(setWallet(_wallet));
  };

  const onDisconnect = async () => {
    if (!session) {
      console.log(`❌ No session found for the wallet. Disconnect is allowed`);
      return;
    }

    if (!wallet) {
      console.log(`❌ Wallet not initialized. Disconnect is allowed`);
      return;
    }

    await wallet
      .disconnectSession({
        topic: session.topic,
        reason: getSdkError('USER_DISCONNECTED'),
      })
      .catch(() => console.log(`❌ Failed to disconnect the wallet`));

    reset();
  };

  return {
    onDisconnect,
    wsUri,
    initializeSession,
    reset,
    initializeWallet,
    wallet,
    session,
    isInitialized,
  };
};

export default useSession;
