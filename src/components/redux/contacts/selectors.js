import { createSelector } from '@reduxjs/toolkit';

const getContactsState = state => state.contacts.items;
const selectIsLoading = state => state.contacts.isLoading;
const selectError = state => state.contacts.error;
const selectFilter = state => state.contacts.filter;

const selectFilteredContacts = createSelector(
  [getContactsState, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export {
  getContactsState,
  selectIsLoading,
  selectError,
  selectFilter,
  selectFilteredContacts,
};
