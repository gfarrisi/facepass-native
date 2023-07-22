import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IWeb3Wallet } from "@walletconnect/web3wallet";
import { createAction } from "@reduxjs/toolkit";
import { SessionTypes } from "@walletconnect/types";

interface InitialState {
  wallet: IWeb3Wallet | null;
  session: SessionTypes.Struct | null;
  evmAddress: string | null;
  isInitialized: boolean;
  isLoading: boolean;
}

export const setIsLoading = createAction<boolean, "setIsLoading">(
  "setIsLoading"
);

export const setWallet = createAction<IWeb3Wallet, "setWallet">("setWallet");

export const setSession = createAction<SessionTypes.Struct, "setSession">(
  "setSession"
);

export const setEvmAddress = createAction<string, "setEvmAddress">(
  "setEvmAddress"
);

export const setIsInitialized = createAction<boolean, "setIsInitialized">(
  "setIsInitialized"
);

const initialState: InitialState = {
  isLoading: false,
  wallet: null,
  session: null,
  evmAddress: null,
  isInitialized: false,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    [setWallet.type]: (state, action: PayloadAction<IWeb3Wallet>) => {
      state.wallet = action.payload;
    },
    [setSession.type]: (state, action: PayloadAction<SessionTypes.Struct>) => {
      state.session = action.payload;
    },
    [setIsInitialized.type]: (state, action: PayloadAction<boolean>) => {
      state.isInitialized = action.payload;
    },
    [setEvmAddress.type]: (state, action: PayloadAction<string>) => {
      state.evmAddress = action.payload;
    },
    [setIsLoading.type]: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export default sessionSlice.reducer;
