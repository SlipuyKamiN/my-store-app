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
import { Info } from 'components/StorePage/ShopsList/ShopsList.styled';
import { EmptyList } from 'components/ShoppingCart/ShoppingCartList/EmptyList';
import { notification } from 'components/SharedLayout/notification';

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
    createOrder({ customerData, orderItems, totalPrice })
      .then(response => {
        if (response.error) {
          throw new Error(response.error.data);
        }
        notification(
          `${customerData.name}, your order is succesfully created`,
          'success'
        );
        dispatch(clearShoppingCart());
      })
      .catch(error => {
        console.warn(error);
        notification();
      });
  };

  return (
    <ShoppingCartWrapper>
      {!isShoppingCartEmpty && (
        <Info>
          We can deliver your order right to your home, please fill the form
          below
        </Info>
      )}
      <OrderForm
        isShoppingCartEmpty={isShoppingCartEmpty}
        onFormSubmit={handleCreateOrder}
      />
      {isShoppingCartEmpty ? (
        <EmptyList info="Oops, your cart is empty yet. Let's go shopping..." />
      ) : (
        <ShoppingCartList />
      )}
      <TotalPriceWrapper>
        <TotalPrice>
          Total price: <span>{Math.round(totalPrice)} ₴</span>
        </TotalPrice>
      </TotalPriceWrapper>
    </ShoppingCartWrapper>
  );
};
export default ShoppingCart;
