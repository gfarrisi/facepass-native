import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Web3Wallet } from '@walletconnect/web3wallet';
import { Core } from '@walletconnect/core';

import useSendTransaction from './useSendTransaction';
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
  } = useSendTransaction();

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
    dispatch(setWallet(null));
  };

  const onInitialize = async () => {
    const wallet = await Web3Wallet.init({
      core,
      metadata: WCMetadata,
    });

    wallet.on('session_proposal', async (proposal) => {
      const { requiredNamespaces } = proposal.params;
      const namespaceKey = 'eip155';
      const requiredNamespace = requiredNamespaces[namespaceKey];
      const chains = requiredNamespace.chains || [];

      const accounts = chains.map((chain) => {
        return `${chain}:${evmAddress}`;
      });

      console.log(`✨ Hit session_proposal with address: ${evmAddress}`);

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
      console.log(event.params.request.method);
      if (method === 'eth_sendTransaction') {
        try {
          dispatch(setIsLoadingTransaction(true));

          if (txError) dispatch(setTransactionError(''));
          if (transactionSignature) dispatch(setTransactionSignature(''));

          const txResponse = await sendTransaction({
            from: '0x',
            to: '0x',
            data: '0x',
          });
          console.log('🧼 txResponse', txResponse);
          await wallet.respondSessionRequest({
            topic,
            response: txResponse,
          });

          dispatch(setTransactionSignature(txResponse.result));
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

    const pairing = await wallet.core.pairing
      .pair({ uri: wsUri })
      .catch((err) => {
        console.log(
          `❌ Failed to initialize wallet connect session. Uri: ${wsUri}. Address: ${evmAddress}. Error: ${err.message}`,
        );
        reset();
        return null;
      });

    if (!pairing) return;

    dispatch(setWallet(wallet));
  };

  return {
    reset,
    wsUri,
    onInitialize,
    wallet,
    session,
    isInitialized,
    evmAddress,
  };
};

export default useSession;
