import {
  ContactList,
  ContactForm,
  Section,
  Container,
  Header2,
  Notification,
  Searchbar,
  Header,
} from 'components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

export function App() {
  const contacts = useSelector(selectContacts);
  // const loading = useSelector(selectLoading);
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

          {!contacts.length ? (
            <Notification>
              You don't have contacts yet, add somebody!
            </Notification>
          ) : (
            <ContactList />
          )}
        </Container>
      </Section>
    </>
  );
}
