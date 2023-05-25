import styled from '@emotion/styled';
import { ImSpinner3 } from 'react-icons/im';

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  gap: 10px;
  flex-wrap: wrap;

  @media screen and (max-width: 1280px) {
    justify-content: center;
  }
`;

export const Loader = styled(ImSpinner3)`
  margin: 0 auto;
  animation: rotation 3s linear;
  color: var(--brand-color);
`;
