export const selectContacts = state => state.contactsData.contacts.items;
export const selectFilter = state => state.contactsData.filter;
export const selectLoading = state => state.contactsData.contacts.isLoading;
