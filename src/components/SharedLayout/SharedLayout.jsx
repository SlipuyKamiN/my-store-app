import {
  Container,
  Header,
  NavList,
  NavigationLink,
  ImageLink,
} from './SharedLayout.styled';
import { BsShop, BsCart3, BsListColumns } from 'react-icons/bs';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import imgPath from 'images/storeLogo.png';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <ImageLink to="/">
          <img src={imgPath} alt="main logo" width="50px" />
          <span>My React Store</span>
        </ImageLink>
        <nav>
          <NavList>
            <li>
              <NavigationLink to="/">
                <BsShop />
                My Store
              </NavigationLink>
            </li>
            <li>
              <NavigationLink to="shoppingCart">
                <BsCart3 />
                Shopping cart
              </NavigationLink>
            </li>
            <li>
              <NavigationLink to="myOrders">
                <BsListColumns />
                See my orders
              </NavigationLink>
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
