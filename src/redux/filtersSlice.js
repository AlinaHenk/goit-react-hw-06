import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter(state, action) {
      state.items.push(action.payload);
    },
  },
});

export const { changeFilter } = slice.actions;

export default slice.reducer;
