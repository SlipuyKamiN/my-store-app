import { useSelector } from 'react-redux';
import { List } from './ShoppingCartList.styled';
import { ShoppingCartItem } from 'components/ShoppingCartItem/ShoppingCartItem';

export const ShoppingCartList = () => {
  const products = useSelector(state => state.shoppingCart);

  return (
    <List>
      {products.map(product => (
        <ShoppingCartItem key={product.id} product={product} />
      ))}
    </List>
  );
};
