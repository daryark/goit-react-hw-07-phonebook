import styled from 'styled-components';

export const ContactInfo = styled.p`
  font-size: ${p => p.theme.fontSizes.m}px;
  margin-right: ${p => p.theme.spaces[4]}px;
  display: inline-block;
`;

export const ContactItem = styled.li`
  border-bottom: 1px solid ${li => li.theme.colors.secondary};
  padding: 0 ${li => li.theme.spaces[5]}px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DeleteBtn = styled.button`
  padding: ${button => button.theme.spaces[4]}px;
  color: ${button => button.theme.colors.secondary};
  border: none;
  background-color: transparent;

  svg {
    width: ${button => button.theme.fontSizes.m}px;
    height: auto;
    display: block;
    transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:hover svg {
    color: ${button => button.theme.colors.delete};
  }
`;
