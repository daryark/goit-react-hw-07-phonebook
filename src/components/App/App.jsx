import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  ContactList,
  ContactForm,
  Section,
  Container,
  Header2,
  Notification,
  Searchbar,
  Header,
  Loader,
} from 'components';

import { getContacts } from 'redux/contacts/operations';
import { selectContacts, selectLoading } from 'redux/contacts/selectors';

export function App() {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return (
    <>
      <Header />

      <Section>
        <Container>
          <ContactForm />
          <Header2>Contacts</Header2>
          <Searchbar />

          {!contacts.length && !loading && (
            <Notification>
              You don't have contacts yet, add somebody!
            </Notification>
          )}
          {Boolean(contacts.length) && <ContactList />}
        </Container>
      </Section>
      {loading && <Loader />}
    </>
  );
}
