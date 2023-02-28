import styled from 'styled-components';

export const Input = styled.input`
  margin: 0 ${input => input.theme.spaces[2]}px
    ${input => input.theme.spaces[2]}px 0;
  padding: ${input => input.theme.spaces[2]}px;
  padding-left: ${input => input.theme.spaces[5]}px;
  width: 130px;

  border: 1px solid ${input => input.theme.colors.text};
  border-radius: 2px;

  &:focus {
    outline: 2px solid ${input => input.theme.colors.accent};
    outline-offset: -2px;
  }

  &:disabled {
    background-color: #efefef;
    border-color: ${input => input.theme.colors.secondary};
  }
`;
export const Label = styled.label`
  position: absolute;
  transform: translate(-7px, 3px);

  margin-left: ${input => input.theme.spaces[4]}px;

  svg {
    width: 14px;
    color: ${input => input.theme.colors.secondary};
  }
`;

export const Search = styled(Label)`
  transform: translate(-8px, 13px);
`;
