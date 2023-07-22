import AsyncStorage from '@react-native-async-storage/async-storage';

export const useEvmAddress = () => {
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
