import { useState } from 'react';
// import PropTypes from 'prop-types';

import { FaPhoneAlt, FaUserAlt } from 'react-icons/fa';

import { AddContactForm, FormBtn } from './ContactForm.styled';
import { Input, Label } from 'components/common/Input/Input.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    if (target.name === 'name') {
      setName(target.value);
    }
    if (target.name === 'number') {
      setNumber(target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in your contacts! Try to find in search.`);
      return;
    }
    dispatch(addContact({ name, phone: number }));
    reset();
  };

  function reset() {
    setName('');
    setNumber('');
  }

  return (
    <AddContactForm onSubmit={handleSubmit}>
      <Label htmlFor="name">
        <FaUserAlt />
      </Label>
      <Input
        onChange={handleChange}
        value={name}
        type="text"
        name="name"
        id="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Label htmlFor="number">
        <FaPhoneAlt />
      </Label>
      <Input
        onChange={handleChange}
        value={number}
        type="tel"
        name="number"
        id="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <FormBtn type="submit">Add contact</FormBtn>
    </AddContactForm>
  );
}
