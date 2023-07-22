import { PayloadAction, createReducer, createSlice } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';

interface InitialState {
  isLoading: boolean;
  transactionSignature: string;
  transactionHash: string;
  error: string;
}

export const setIsLoading = createAction<boolean, 'setIsLoadingTransaction'>(
  'setIsLoadingTransaction',
);

export const setTransactionSignature = createAction<
  string,
  'setTransactionSignature'
>('setTransactionSignature');

export const setTransactionHash = createAction<string, 'setTransactionHash'>(
  'setTransactionHash',
);

export const setError = createAction<string, 'setTransactionError'>(
  'setTransactionError',
);

const initialState: InitialState = {
  isLoading: false,
  transactionSignature: '',
  transactionHash: '',
  error: '',
};

export const transactionSlice = createReducer(initialState, (builder) => {
  builder
    .addCase(setIsLoading, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(setTransactionSignature, (state, action) => {
      state.transactionSignature = action.payload;
    })
    .addCase(setTransactionHash, (state, action) => {
      state.transactionHash = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});
