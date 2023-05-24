import { OrderForm } from 'components/OrderForm/OrderForm';
import { ShoppingCartList } from 'components/ShoppingCartList/ShoppingCartList';
import {
  ShoppingCartWrapper,
  TotalPrice,
  TotalPriceWrapper,
} from './ShoppingCart.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useCreateOrderMutation } from 'redux/ordersSlice';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const [createOrder] = useCreateOrderMutation();
  const orderItems = useSelector(state => state.shoppingCart);

  const isShoppingCartEmpty = orderItems.length === 0;

  const totalPrice = orderItems.reduce(
    (total, product) => total + Number(product.price * product.quantity),
    0
  );

  const handleCreateOrder = customerData => {
    dispatch(createOrder({ customerData, orderItems, totalPrice }));
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
