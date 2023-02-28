import { Triangle } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <Wrapper>
      <Triangle height="80" width="80" color="#4a7aff" />
    </Wrapper>
  );
};
