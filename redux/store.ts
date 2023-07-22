import { configureStore } from "@reduxjs/toolkit";
import sessionSlice from "./slices/session";
import transactionSlice from "./slices/transaction";

export const store = configureStore({
  reducer: {
    session: sessionSlice,
    transaction: transactionSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
