import {
  Container,
  Header,
  NavList,
  NavigationLink,
  ImageLogo,
} from './SharedLayout.styled';
import { Outlet, Link } from 'react-router-dom';
import imgPath from 'images/storeLogo.png';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Link to="/">
          <ImageLogo src={imgPath} />
        </Link>
        <nav>
          <NavList>
            <li>
              <NavigationLink to="/">My Store</NavigationLink>
            </li>
            <li>
              <NavigationLink to="shoppingCart">Shopping cart</NavigationLink>
            </li>
          </NavList>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
