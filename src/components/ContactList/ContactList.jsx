import { useDispatch, useSelector } from 'react-redux';
import { FaRegTrashAlt } from 'react-icons/fa';

import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

import { ContactInfo, ContactItem, DeleteBtn } from './ContactList.styled';
import { Notification } from 'components/common/Notification/Notification.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const getFilteredContacts = (contacts, filter) => {
    const filtered =
      filter && contacts.length
        ? contacts.filter(({ name }) =>
            name.trim().toLowerCase().includes(filter.trim().toLowerCase())
          )
        : contacts;

    return filtered;
    // return (
    //   Boolean(contacts.length) &&
    //   filtered.sort((a, b) => a.name.localeCompare(b.name))
    // );
  };

  const handleClickDelete = id => {
    console.log(id);
    dispatch(deleteContact(id));
  };

  const filtered = getFilteredContacts(contacts, filter);
  return (
    <ul>
      {Boolean(filtered.length) ? (
        filtered.map(({ name, phone, id }) => (
          <ContactItem key={id}>
            <div>
              <ContactInfo>{name}</ContactInfo>
              <ContactInfo>{phone}</ContactInfo>
            </div>
            <DeleteBtn type="button" onClick={() => handleClickDelete(id)}>
              <FaRegTrashAlt />
            </DeleteBtn>
          </ContactItem>
        ))
      ) : (
        <Notification>Sorry, no matches found</Notification>
      )}
    </ul>
  );
};
