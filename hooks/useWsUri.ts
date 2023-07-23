import { atom, useAtom } from 'jotai';
const uriAtom = atom<string>('');
export const useWsUri = () => {
  const [wsUri, setWsUri] = useAtom(uriAtom);
  return {
    wsUri,
    setWsUri,
  };
};
