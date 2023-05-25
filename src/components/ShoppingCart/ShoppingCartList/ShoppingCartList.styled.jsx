import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  margin: 0 auto;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  gap: 15px;
  flex-wrap: wrap;
  height: 80vh;
  width: 77%;
  overflow-y: scroll;
`;

export const EmptyListWrapper = styled.div`
  padding: 40px;
  margin: auto;
  text-align: center;
`;

export const LinkToHome = styled(Link)`
  border: none;
  background-color: transparent;
  display: block;
  margin-bottom: 20px;
  &:hover,
  &:focus {
    color: var(--brand-color);
  }
`;
export const EmptyInfo = styled.p`
  font-size: 24px;
`;
