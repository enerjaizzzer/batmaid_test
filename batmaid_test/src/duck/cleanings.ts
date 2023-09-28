import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cleaningsFetch } from "./types";

export const cleanings = createSlice({
  name: "cleanings",
  initialState: {
    data: [],
  },
  reducers: {
    save: (state, action: PayloadAction<cleaningsFetch>) => {
      // @ts-ignore
      state.data = action.payload;
    },
  },
});

export const { save } = cleanings.actions;

export default cleanings.reducer;
