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
    'wc:ae4eb1925c7da97712e0a8bbd0fd8cffadf13a0f69ec6f19360dbf32cff8fee2@2?relay-protocol=irn&symKey=c185cac9062090df1a2bcf02792578e4648889447039aab4b38dfb52894ba542wc:eac2f91535386658c5fafa2e5149f4c7f4ce490077b8de03bf04419108fe9c5e@2?relay-protocol=irn&symKey=2eceaf8be1a2d5b3ebd56b4047a1321435896a6bc5f7e069500af5f9d14d3710',
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
