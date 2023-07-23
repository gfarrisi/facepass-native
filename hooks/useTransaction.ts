import { useDispatch, useSelector } from 'react-redux';
import {
  setError,
  setIsLoading,
  setTransactionHash,
  setTransactionSignature,
} from '../redux/slices/transaction';
import { RootState } from '../redux/store';

interface ISendTransactionParams {
  from: string;
  to: string;
  data: string;
}

interface ISendTransaction {
  id: number;
  result: string;
  jsonrpc: string;
}

const useTransaction = () => {
  const dispatch = useDispatch();

  const error = useSelector((state: RootState) => state.transaction.error);

  const isLoadingTransaction = useSelector(
    (state: RootState) => state.transaction.isLoading,
  );

  const transactionSignature = useSelector(
    (state: RootState) => state.transaction.transactionSignature,
  );

  const sendTransaction = ({
    from,
    to,
    data,
  }: ISendTransactionParams): Promise<ISendTransaction> => {
    const result = `0x`; // Signature hash after signing transaction with the wallet

    return Promise.resolve({
      id: 1,
      result,
      jsonrpc: '2.0',
    });
  };

  return {
    isLoadingTransaction,
    sendTransaction,
    transactionSignature,
    error,
    setTransactionHash: (txHash: string) =>
      dispatch(setTransactionHash(txHash)),
    setTransactionSignature: (txSignature: string) =>
      dispatch(setTransactionSignature(txSignature)),
    setError: (errMessage: string) => dispatch(setError(errMessage)),
    setIsLoading: (bool: boolean) => dispatch(setIsLoading(bool)),
  };
};

export default useTransaction;
