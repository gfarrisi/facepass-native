import { PayloadAction, createReducer, createSlice } from '@reduxjs/toolkit';
import { IWeb3Wallet } from '@walletconnect/web3wallet';
import { createAction } from '@reduxjs/toolkit';
import { SessionTypes } from '@walletconnect/types';

interface InitialState {
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

export const setIsInitialized = createAction<boolean, 'setIsInitialized'>(
  'setIsInitialized',
);

const initialState: InitialState = {
  isLoading: false,
  wallet: null,
  session: null,
  isInitialized: false,
};

export const sessionSlice = createReducer(initialState, (builder) => {
  builder
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
