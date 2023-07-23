import { atom, useAtom } from 'jotai';
import { Views } from '../App';

const viewsAtom = atom<Views>('frontCamera');
export const useView = () => {
  const [view, setView] = useAtom(viewsAtom);
  return { view, setView };
};
