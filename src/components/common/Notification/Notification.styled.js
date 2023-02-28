import styled from 'styled-components';

export const Notification = styled.p`
  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  margin-top: ${p => p.theme.spaces[5]}px;
  padding-left: ${p => p.theme.spaces[5]}px;
  color: ${p => p.theme.colors.delete};
`;
