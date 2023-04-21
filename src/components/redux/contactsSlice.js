import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactSlice = createSlice({
  name: 'contacs',
  initialState: { items: [], filter: '' },
  reducers: {
    addContact: (state, action) => {
      const contact = {
        name: action.payload.name,
        number: action.payload.number,
        id: nanoid(),
      };
      state.items.push(contact);
    },
    deleteContact: (state, action) => {
      const filteredArr = state.items.filter(e => {
        return e.id !== action.payload;
      });
      return { ...state, items: filteredArr };
    },
    addFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, addFilter } = contactSlice.actions;
export default contactSlice.reducer;

export const getContactsState = state => state.contacts.items;
export const getFilterState = state => state.contacts.filter;
