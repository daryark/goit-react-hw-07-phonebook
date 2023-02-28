import { useDispatch, useSelector } from 'react-redux';
import { FaRegTrashAlt } from 'react-icons/fa';

import { selectFilteredContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

import { ContactInfo, ContactItem, DeleteBtn } from './ContactList.styled';
import { Notification } from 'components/common/Notification/Notification.styled';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleClickDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {Boolean(filteredContacts.length) ? (
        <ul>
          {filteredContacts.map(({ name, phone, id }) => (
            <ContactItem key={id}>
              <div>
                <ContactInfo>{name}</ContactInfo>
                <ContactInfo>{phone}</ContactInfo>
              </div>
              <DeleteBtn type="button" onClick={() => handleClickDelete(id)}>
                <FaRegTrashAlt />
              </DeleteBtn>
            </ContactItem>
          ))}
        </ul>
      ) : (
        <Notification>Sorry, no matches found</Notification>
      )}
    </>
  );
};
