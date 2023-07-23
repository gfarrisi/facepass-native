import { Web3WalletTypes } from '@walletconnect/web3wallet';
import { atom, useAtom } from 'jotai';

const eventAtom = atom<Web3WalletTypes.SessionRequest | null>(null);

export const useEvent = () => {
  const [event, setEvent] = useAtom(eventAtom);
  return { event, setEvent };
};
