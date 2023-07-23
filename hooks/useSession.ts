import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Web3Wallet } from '@walletconnect/web3wallet';
import { Core } from '@walletconnect/core';
import { getSdkError, parseUri } from '@walletconnect/utils';

import {
  setIsInitialized,
  setSession,
  setWallet,
} from '../redux/slices/session';
import { signMessage } from '../utils/convertFaceDataToWallet';
import { JsonRpcResponse } from '@json-rpc-tools/utils';
import { useEvmAddress } from './useEvmAddress';
import useTransaction from './useTransaction';
import { useWsUri } from './useWsUri';
import { useView } from './useView';
import { useEvent } from './useEvent';

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
  const { wsUri, setWsUri } = useWsUri();
  const { setView } = useView();
  const {
    sendTransaction,
    transactionSignature,
    setError: setTransactionError,
    error: txError,
    setTransactionSignature,
    setIsLoading: setIsLoadingTransaction,
  } = useTransaction();

  const { getEvmAddress } = useEvmAddress();

  const { deleteEvmAddress } = useEvmAddress();

  const dispatch = useDispatch();

  const isInitialized = useSelector(
    (state: RootState) => state.session.isInitialized,
  );

  const session = useSelector((state: RootState) => state.session.session);

  const wallet = useSelector((state: RootState) => state.session.wallet);
  const { setEvent } = useEvent();

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
      const evmAddress = await getEvmAddress(); /* await getEvmAddress(); */
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
      console.log(method);
      if (method === 'personal_sign') {
        try {
          setEvent(event);
          console.log('request', request);
          console.log('method', method);

          dispatch(setIsLoadingTransaction(true));

          if (txError) dispatch(setTransactionError(''));
          if (transactionSignature) dispatch(setTransactionSignature(''));

          const message = params.request.params[0];

          console.log('setting view to frontcamera');
          setView('frontCamera');
          // set the scene to facescan
          // const faceData = await getFaceData();

          // dispatch(setTransactionSignature(txSignature.result));
        } catch (err) {
          const errMessage =
            '❌ Failed to Sign Transaction. Please try again later.';
          console.error(errMessage);

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
      .then(() => {
        console.log(`Paired  wallet connect w/ws "${wsUri}"`);
      })
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
    setWsUri,
  };
};

export default useSession;
