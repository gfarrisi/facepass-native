import { PayloadAction, createReducer, createSlice } from '@reduxjs/toolkit';
import { IWeb3Wallet } from '@walletconnect/web3wallet';
import { createAction } from '@reduxjs/toolkit';
import { SessionTypes } from '@walletconnect/types';

interface InitialState {
  wsUri: string;
  wallet: IWeb3Wallet | null;
  session: SessionTypes.Struct | null;
  evmAddress: string | null;
  isInitialized: boolean;
  isLoading: boolean;
}

export const setIsLoading = createAction<boolean, 'setIsLoading'>(
  'setIsLoading',
);

export const setWallet = createAction<IWeb3Wallet | null, 'setWallet'>(
  'setWallet',
);

export const setSession = createAction<
  SessionTypes.Struct | null,
  'setSession'
>('setSession');

export const setWsUri = createAction<string, 'setWsUri'>('setWsUri');

export const setEvmAddress = createAction<string | null, 'setEvmAddress'>(
  'setEvmAddress',
);

export const setIsInitialized = createAction<boolean, 'setIsInitialized'>(
  'setIsInitialized',
);

const initialState: InitialState = {
  wsUri:
    'wc:ad8111c17dd5fc8abf2a9dda7e7bdab793ccbdad9cd6cdb8e0426aae8865b808@2?relay-protocol=irn&symKey=61b37ad816cb7dd28a0f0e3f793cbe612c7dea3fff23f9ccc83decd525c65183',
  isLoading: false,
  wallet: null,
  session: null,
  evmAddress: '0x9A9A200C587f49f9783B041225269Ea2a307495B',
  isInitialized: false,
};

export const sessionSlice = createReducer(initialState, (builder) => {
  builder
    .addCase(setWsUri, (state, action) => {
      state.wsUri = action.payload;
    })
    .addCase(setSession, (state, action) => {
      state.session = action.payload;
    })
    .addCase(setWallet, (state, action) => {
      state.wallet = action.payload;
    })
    .addCase(setEvmAddress, (state, action) => {
      state.evmAddress = action.payload;
    })
    .addCase(setIsLoading, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(setIsInitialized, (state, action) => {
      state.isInitialized = action.payload;
    });
});
