import { Input, Search } from 'components/common/Input/Input.styled';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue } from 'redux/contacts/contactsSlice';
import { selectContacts } from 'redux/contacts/selectors';

export function Searchbar() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChangeFilter = e => dispatch(setFilterValue(e.target.value));

  return (
    <>
      <Search htmlFor="filter">
        <FaSearch />
      </Search>
      <Input
        type="text"
        name="filter"
        id="filter"
        onChange={handleChangeFilter}
        disabled={!contacts.length}
      />
    </>
  );
}
