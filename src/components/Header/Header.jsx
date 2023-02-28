import { Container, HeaderSection } from 'components/App/App.styled';
import { Header1 } from 'components/common/Header/Header.styled';
import React from 'react';
import { FaRegAddressBook } from 'react-icons/fa';

export function Header() {
  return (
    <HeaderSection>
      <Container>
        <Header1>
          <FaRegAddressBook /> Phonebook
        </Header1>
      </Container>
    </HeaderSection>
  );
}
