import AsyncStorage from '@react-native-async-storage/async-storage';
import { atom, useAtom } from 'jotai';
import { connectToWallet } from '../utils/convertFaceDataToWallet';
import { store } from '../redux/store';
const addressAtom = atom<string | null>(null);

export const useEvmAddress = () => {
  const [address, setAddress] = useAtom(addressAtom);

  const setEvmAddress = async (evmAddress: string | null) => {
    if (typeof evmAddress !== 'string') {
      throw new Error(
        'can only set address of type string, but found ' + typeof evmAddress,
      );
    }
    AsyncStorage.setItem('@evm_address', evmAddress);
    setAddress(evmAddress);
  };
  return {
    address,
    setEvmAddress,
    getEvmAddress: async () => {
      if (!address) {
        const storedAddress = await AsyncStorage.getItem('@evm_address');
        setAddress(storedAddress);
        return storedAddress;
      }
      return address;
    },
    deleteEvmAddress: () => {
      setAddress(null);
      return AsyncStorage.removeItem('@evm_address');
    },
  };
};
