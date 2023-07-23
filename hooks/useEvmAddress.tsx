import AsyncStorage from '@react-native-async-storage/async-storage';
import { atom, useAtom } from 'jotai';
import { store } from '../redux/store';
import { connectToWallet } from '../utils/convertFaceDataToWallet';
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
     /*  const storedAddress = await AsyncStorage.getItem('@evm_address');
      setEvmAddress(storedAddress); */
      return connectToWallet('123').address;
    },
    deleteEvmAddress: () => {
      setAddress(null);
      return AsyncStorage.removeItem('@evm_address');
    },
  };
};
