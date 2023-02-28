import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contactsData.contacts.items;
export const selectFilter = state => state.contactsData.filter;
export const selectLoading = state => state.contactsData.contacts.isLoading;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts
      .filter(({ name }) =>
        name.trim().toLowerCase().includes(filter.trim().toLowerCase())
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  }
);
