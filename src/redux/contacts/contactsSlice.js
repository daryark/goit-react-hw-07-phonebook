import { createSlice, nanoid } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContacts } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: true,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilterValue(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getContacts.pending, pendingHandler)
      .addCase(getContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
        state.contacts.isLoading = false;
      })
      .addCase(getContacts.rejected, rejectedHandler)
      .addCase(addContact.pending, pendingHandler)
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items = [...state.contacts.items, action.payload];
        state.contacts.isLoading = false;
      })
      .addCase(addContact.rejected, rejectedHandler)
      .addCase(deleteContact.pending, pendingHandler)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== action.payload.id
        );
        state.contacts.isLoading = false;
      })
      .addCase(deleteContact.rejected, rejectedHandler);
  },
});

function pendingHandler(state) {
  state.contacts.isLoading = true;
  state.error = null;
}

function rejectedHandler(state, action) {
  state.contacts.isLoading = false;
  state.error = action.payload;
}

// Генератори екшенів
export const { setFilterValue } = contactsSlice.actions;
//Експорт налаштованого редюсеру слайсу
export const contactsReducer = contactsSlice.reducer;
