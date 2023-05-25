import {
  Container,
  Header,
  NavList,
  NavigationLink,
  ImageLogo,
} from './SharedLayout.styled';
import { Outlet, Link } from 'react-router-dom';
import { Suspense } from 'react';
import imgPath from 'images/storeLogo.png';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Link to="/">
          <ImageLogo src={imgPath} />
          My React Store
        </Link>
        <nav>
          <NavList>
            <li>
              <NavigationLink to="/">My Store</NavigationLink>
            </li>
            <li>
              <NavigationLink to="shoppingCart">Shopping cart</NavigationLink>
            </li>
            <li>
              <NavigationLink to="myOrders">myOrders</NavigationLink>
            </li>
          </NavList>
        </nav>
      </Header>
      <Suspense fallback={<div>Please wait...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
