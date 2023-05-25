import { useSelector } from 'react-redux';
import { List } from './ShoppingCartList.styled';
import { ShoppingCartItem } from 'components/ShoppingCart/ShoppingCartItem/ShoppingCartItem';
import { getShoppingCart } from 'redux/selectors';

export const ShoppingCartList = () => {
  const products = useSelector(getShoppingCart);

  return (
    <List>
      {products.map(burger => (
        <ShoppingCartItem key={burger.id} burger={burger} />
      ))}
    </List>
  );
};
