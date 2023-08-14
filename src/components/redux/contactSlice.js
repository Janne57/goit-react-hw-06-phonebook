import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Jane Fox', number: '123-45-67' },
    ],
    filter: '',
  },
  reducers: {
    
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
    },
    filterContact: (_, action) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addContact, deleteContact, filterContact } = contactSlice.actions;

export default contactSlice.reducer;

// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// export default counterSlice.reducer
