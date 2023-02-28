import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContacts } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: true,
    error: null,
  },
  filter: '',
};

const extraActions = [getContacts, addContact, deleteContact];
const getActions = type => extraActions.map(action => action[type]);

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
      .addCase(getContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
        state.contacts.isLoading = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items = [...state.contacts.items, action.payload];
        state.contacts.isLoading = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== action.payload.id
        );
        state.contacts.isLoading = false;
      })

      .addMatcher(isAnyOf(...getActions('pending')), pendingHandler)
      .addMatcher(isAnyOf(...getActions('rejected')), rejectedHandler);
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
