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
  wsUri:
    'wc:2e7e1f112453e80ab41050f4dfda1c6a8263f70dce00e7d4554c7db059be64e9@2?relay-protocol=irn&symKey=3e7f41243cd86e4e920b240d9da7a13fb9902f66e64af175b250b0b3db1e12e2',
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
