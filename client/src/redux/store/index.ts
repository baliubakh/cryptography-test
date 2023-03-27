import { configureStore } from "@reduxjs/toolkit";
import cryptographySlice from "../slices/cryptography-slice";
import userSlice from "../slices/user-slice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    cryptography: cryptographySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
