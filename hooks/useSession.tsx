import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Web3Wallet } from "@walletconnect/web3wallet";
import { Core } from "@walletconnect/core";
import { setSession, setWallet } from "../redux/slices/session";
import useSendTransaction from "./useSendTransaction";

const WCMetadata = {
  name: "FACE PASS",
  description: "✨ Your face is your secret recovery phrase",
  url: "www.google.com",
  icons: [
    "https://pbs.twimg.com/profile_images/1226080848396640256/aRdvQaOH_400x400.jpg",
  ],
};

const core = new Core({
  projectId: "4953aa2874b96d0a85c65a08de512d56",
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
    (state: RootState) => state.session.isInitialized
  );

  const evmAddress = useSelector(
    (state: RootState) => state.session.evmAddress
  );

  const session = useSelector((state: RootState) => state.session.session);

  const wallet = useSelector((state: RootState) => state.session.wallet);

  const onInitialize = useCallback(async () => {
    const wallet = await Web3Wallet.init({
      core,
      metadata: WCMetadata,
    });

    wallet.on("session_proposal", async (proposal) => {
      const { requiredNamespaces } = proposal.params;
      const namespaceKey = "eip155";
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

      dispatch(setSession(session));
    });

    wallet.on("session_request", async (event) => {
      const { topic, params, id } = event;
      const { request } = params;
      const { method } = request;

      if (method !== "eth_sendTransaction") {
        try {
          setIsLoadingTransaction(true);

          if (txError) setTransactionError("");
          if (transactionSignature) setTransactionSignature("");

          const txResponse = await sendTransaction({
            from: "0x",
            to: "0x",
            data: "0x",
          });

          await wallet.respondSessionRequest({
            topic,
            response: txResponse,
          });

          setTransactionSignature(txResponse.result);
        } catch (err) {
          const errMessage =
            "❌ Failed to Sign Transaction. Please try again later.";

          await wallet.respondSessionRequest({
            topic,
            response: {
              jsonrpc: "2.0",
              id,
              error: {
                code: 0,
                message: errMessage,
              },
            },
          });

          setTransactionError(errMessage);
        } finally {
          setIsLoadingTransaction(false);
        }
      }
    });

    setWallet(wallet);
  }, []);

  return {
    onInitialize,
    wallet,
    session,
    isInitialized,
    evmAddress,
  };
};

export default useSession;
