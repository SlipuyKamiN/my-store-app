import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const List = styled.ul`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  gap: 10px;
  width: 200px;
  list-style: none;
  padding: 20px;
`;

export const ListItem = styled.li`
  padding: 10px;
  width: 100%;
`;
export const CategoryLink = styled(NavLink)`
  text-transform: uppercase;
  text-decoration: none;
`;
