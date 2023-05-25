import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  gap: 10px;
`;

export const ListItem = styled.li`
  padding: 10px 0;
  width: 100%;
`;

export const CategoryLink = styled(NavLink)`
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  gap: 10px;
  padding-bottom: 5px;
  align-items: center;
  border-bottom: 3px solid transparent;
  &.active {
    color: var(--brand-color);
    border-bottom: 3px solid var(--brand-color);
  }
`;

export const Info = styled.div`
  border-radius: 15px;
  width: 100%;
  padding: 15px;
  background-color: #61dbfb44;
`;
