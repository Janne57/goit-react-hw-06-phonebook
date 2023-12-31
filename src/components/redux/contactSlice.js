import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
    },
    filterContact: (state, action) => {
      state.filter = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addContact, deleteContact, filterContact } =
  contactSlice.actions;

export default contactSlice.reducer;


