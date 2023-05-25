import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 480px;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: 480px) {
    max-width: none;
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 40px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 0 60px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  gap: 20px;
  width: 100%;
  border-bottom: 1px solid var(--primary-white-color);
`;

export const ImageLink = styled(Link)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 50px;
  gap: 10px;
  font-size: 24px;
  &:hover,
  &:focus {
    color: var(--brand-color);
  }
  img {
    flex-shrink: 0;
    animation: rotation 10s infinite linear;
  }

  @media screen and (max-width: 768px) {
    span {
      display: none;
    }
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px 0;
  display: flex;
  align-items: flex-end;
  gap: 10px;

  &.active {
    color: var(--brand-color);
    border-bottom: 3px solid var(--brand-color);
  }
`;
