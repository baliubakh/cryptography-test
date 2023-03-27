import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUserState } from "../../types/auth.types";

const initialState: IUserState = {
  username: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    edit: (state, action: PayloadAction<IUserState>) => {
      state = action.payload;
      return state;
    },

    remove: (state) => {
      state = { username: "" };
      return state;
    },

    get: (state, action: PayloadAction<IUserState>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { get, edit, remove } = userSlice.actions;
export const showUser = (state: { user: IUserState }) => state.user;
export default userSlice.reducer;
