import { PayloadAction, createReducer, createSlice } from '@reduxjs/toolkit';
import { IWeb3Wallet } from '@walletconnect/web3wallet';
import { createAction } from '@reduxjs/toolkit';
import { SessionTypes } from '@walletconnect/types';

interface InitialState {
  wsUri: string;
  wallet: IWeb3Wallet | null;
  session: SessionTypes.Struct | null;
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

export const setIsInitialized = createAction<boolean, 'setIsInitialized'>(
  'setIsInitialized',
);

const initialState: InitialState = {
  wsUri: 'wc:1e33aa4082d3a16b5408471c8e173190b37d4d3eded1f544b33b5b32308e499f@2?relay-protocol=irn&symKey=7703f0351c922219f7658b560e5e0d4f68f58d630396b96c7f30cbb3b17a3466',
  isLoading: false,
  wallet: null,
  session: null,
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
    .addCase(setIsLoading, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(setIsInitialized, (state, action) => {
      state.isInitialized = action.payload;
    });
});
