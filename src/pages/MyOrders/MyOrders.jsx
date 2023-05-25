import { MyOrdersForm } from 'components/MyOrders/MyOrdersForm/MyOrdersForm';
import { MyOrdersList } from 'components/MyOrders/MyOrdersList/MyOrdersList';
import { EmptyList } from 'components/ShoppingCart/ShoppingCartList/EmptyList';
import { Info } from 'components/StorePage/ShopsList/ShopsList.styled';
import { MyOrdersWrapper } from './MyOrders.styled';
import { useState } from 'react';
import { useGetAllOrdersQuery } from 'redux/ordersSlice';

const MyOrders = () => {
  const { data, isSuccess } = useGetAllOrdersQuery();
  const [customerOrders, setCustomerOrders] = useState([]);

  const getOrdersByCustomerData = ({ number, email }) => {
    const customerOrders = data.filter(
      ({ customerData }) =>
        customerData.number === number && customerData.email === email
    );
    setCustomerOrders(customerOrders);
  };

  const isOrders = customerOrders.length !== 0;

  return (
    <MyOrdersWrapper>
      {!isOrders && (
        <Info>
          Have you ordered burgers before? Let's see your order history. Please
          fill the form below.
        </Info>
      )}
      <MyOrdersForm onFormSubmit={getOrdersByCustomerData} />
      {isSuccess && !isOrders ? (
        <MyOrdersList ordersList={customerOrders} />
      ) : (
        <EmptyList info="Your order history is empty yet. Let's go shopping..." />
      )}
    </MyOrdersWrapper>
  );
};

export default MyOrders;
