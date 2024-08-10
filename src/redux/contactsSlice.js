import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      // console.log("action.payload", action.payload);
      // console.log("state items:", state.items);
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const selectContacts = (state) => {
  return state.contacts.items;
};
export const { addContact, deleteContact } = slice.actions;

export default slice.reducer;
