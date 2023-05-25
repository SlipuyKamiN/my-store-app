import { OrderForm } from 'components/ShoppingCart/OrderForm/OrderForm';
import { ShoppingCartList } from 'components/ShoppingCart/ShoppingCartList/ShoppingCartList';
import {
  ShoppingCartWrapper,
  TotalPrice,
  TotalPriceWrapper,
} from './ShoppingCart.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useCreateOrderMutation } from 'redux/ordersSlice';
import { clearShoppingCart } from 'redux/shoppingCartSlice';
import { getShoppingCart } from 'redux/selectors';

const ShoppingCart = () => {
  const [createOrder] = useCreateOrderMutation();
  const dispatch = useDispatch();
  const orderItems = useSelector(getShoppingCart);

  const isShoppingCartEmpty = orderItems.length === 0;

  const totalPrice = orderItems.reduce(
    (total, product) => total + Number(product.price * product.quantity),
    0
  );

  const handleCreateOrder = customerData => {
    createOrder({ customerData, orderItems, totalPrice });
    dispatch(clearShoppingCart());
  };

  return (
    <ShoppingCartWrapper>
      <OrderForm
        isShoppingCartEmpty={isShoppingCartEmpty}
        onFormSubmit={handleCreateOrder}
      />
      {!isShoppingCartEmpty && <ShoppingCartList />}
      <TotalPriceWrapper>
        <TotalPrice>Total price: {Math.round(totalPrice)} ₴</TotalPrice>
      </TotalPriceWrapper>
    </ShoppingCartWrapper>
  );
};
export default ShoppingCart;
