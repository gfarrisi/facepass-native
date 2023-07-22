import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';

export const useEvmAddress = () => {
  const dispatch = useDispatch();

  return {
    setEvmAddress: async (evmAddress: string) => {
      return AsyncStorage.setItem('@evm_address', evmAddress);
    },
    getEvmAddress: async () => {
      const asyncStorageEvmAddress = await AsyncStorage.getItem('@evm_address');
      return asyncStorageEvmAddress;
    },
    deleteEvmAddress: async () => {
      return AsyncStorage.removeItem('@evm_address');
    },
  };
};
