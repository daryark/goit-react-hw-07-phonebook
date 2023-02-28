import styled from 'styled-components';

export const Header1 = styled.h1`
  display: flex;
  align-items: center;

  padding: ${h1 => h1.theme.spaces[4]}px 0;
  margin-bottom: ${h1 => h1.theme.spaces[4]}px;

  font-size: ${h1 => h1.theme.fontSizes.xl}px;

  svg {
    text-align: end;
  }
`;

export const Header2 = styled.h2`
  padding: 0 ${h2 => h2.theme.spaces[5]}px ${h2 => h2.theme.spaces[4]}px;
  font-size: ${h2 => h2.theme.fontSizes.l}px;

  font-weight: ${h2 => h2.theme.fontWeights.semiBold};
  display: inline-block;
`;
