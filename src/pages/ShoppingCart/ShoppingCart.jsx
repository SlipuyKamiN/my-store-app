import { OrderForm } from 'components/OrderForm/OrderForm';
import { ShoppingCartList } from 'components/ShoppingCartList/ShoppingCartList';
import {
  ShoppingCartWrapper,
  TotalPrice,
  TotalPriceWrapper,
} from './ShoppingCart.styled';
import { useSelector } from 'react-redux';

const ShoppingCart = () => {
  const products = useSelector(state => state.shoppingCart);

  const totalPrice = products.reduce(
    (total, product) => total + Number(product.price * product.quantity),
    0
  );
  return (
    <ShoppingCartWrapper>
      <OrderForm />
      <ShoppingCartList />
      <TotalPriceWrapper>
        <TotalPrice>Total price: {Math.round(totalPrice)} $</TotalPrice>
      </TotalPriceWrapper>
    </ShoppingCartWrapper>
  );
};
export default ShoppingCart;
