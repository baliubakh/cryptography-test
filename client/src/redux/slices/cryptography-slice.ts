import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICryptography } from "../../types/cryptographyTypes";

const initialState: ICryptography[] = [
  {
    user_id: 0,
    cipher: "",
    cipher_key: "",
    decrypted: "",
  },
];

export const cryptographySlice = createSlice({
  name: "cryptography",
  initialState,
  reducers: {
    edit: (state, action: PayloadAction<ICryptography[]>) => {
      state = action.payload;
      return state;
    },

    removeById: (state, action: PayloadAction<number>) => {
      const newState = [...state];
      newState.splice(action.payload, 1);
      return newState;
    },

    get: (state, action: PayloadAction<ICryptography[]>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { get, edit, removeById } = cryptographySlice.actions;
export const showProjects = (state: { cryptography: ICryptography[] }) =>
  state.cryptography;
export default cryptographySlice.reducer;
