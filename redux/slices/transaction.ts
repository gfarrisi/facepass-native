import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";

interface InitialState {
  isLoading: boolean;
  transactionSignature: string;
  transactionHash: string;
  error: string;
}

export const setIsLoading = createAction<boolean, "setIsLoadingTransaction">(
  "setIsLoadingTransaction"
);

export const setTransactionSignature = createAction<
  string,
  "setTransactionSignature"
>("setTransactionSignature");

export const setTransactionHash = createAction<string, "setTransactionHash">(
  "setTransactionHash"
);

export const setError = createAction<string, "setTransactionError">(
  "setTransactionError"
);

const initialState: InitialState = {
  isLoading: false,
  transactionSignature: "",
  transactionHash: "",
  error: "",
};

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    [setIsLoading.type]: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    [setTransactionSignature.type]: (state, action: PayloadAction<string>) => {
      state.transactionSignature = action.payload;
    },
    [setTransactionHash.type]: (state, action: PayloadAction<string>) => {
      state.transactionHash = action.payload;
    },
    [setError.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export default transactionSlice.reducer;
