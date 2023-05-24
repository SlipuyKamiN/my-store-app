import { OrderForm } from 'components/OrderForm/OrderForm';
import { ShoppingCartList } from 'components/ShoppingCartList/ShoppingCartList';
import {
  ShoppingCartWrapper,
  TotalPrice,
  TotalPriceWrapper,
} from './ShoppingCart.styled';
import { useSelector } from 'react-redux';

const ShoppingCart = () => {
  const shoppingCartProducts = useSelector(state => state.shoppingCart);

  const isShoppingCartEmpty = shoppingCartProducts.length === 0;

  const totalPrice = shoppingCartProducts.reduce(
    (total, product) => total + Number(product.price * product.quantity),
    0
  );
  return (
    <ShoppingCartWrapper>
      <OrderForm isShoppingCartEmpty={isShoppingCartEmpty} />
      {!isShoppingCartEmpty && <ShoppingCartList />}
      <TotalPriceWrapper>
        <TotalPrice>Total price: {Math.round(totalPrice)} ₴</TotalPrice>
      </TotalPriceWrapper>
    </ShoppingCartWrapper>
  );
};
export default ShoppingCart;
