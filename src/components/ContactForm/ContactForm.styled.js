import styled from 'styled-components';

export const AddContactForm = styled.form`
  padding: 0 ${form => form.theme.spaces[5]}px ${form => form.theme.spaces[5]}px;
  position: relative;
`;

export const FormBtn = styled.button`
  padding: ${input => input.theme.spaces[1]}px
    ${input => input.theme.spaces[3]}px;
  padding-bottom: ${input => input.theme.spaces[2]}px;

  font-size: ${input => input.theme.fontSizes.s}px;
  color: ${input => input.theme.colors.inverse};
  background-color: ${input => input.theme.colors.accent};

  border: none;
  border-radius: 3px;
  box-shadow: none;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0px -20px 15px inset rgba(14, 16, 21, 0.1);
  }
`;
