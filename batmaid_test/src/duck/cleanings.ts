import { createSlice } from "@reduxjs/toolkit";

export const cleanings = createSlice({
  name: "cleanings",
  initialState: {
    cleanings: [],
  },
  reducers: {
    save: (state, action) => {
      state.cleanings = action.payload.jobs;
    },
  },
});

export const { save } = cleanings.actions;

export default cleanings.reducer;
