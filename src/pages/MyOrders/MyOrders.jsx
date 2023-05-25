import { MyOrdersForm } from 'components/MyOrders/MyOrdersForm/MyOrdersForm';
import { MyOrdersList } from 'components/MyOrders/MyOrdersList/MyOrdersList';
import { StoreWrapper } from 'pages/Store/Store.styled';
import { useState } from 'react';
import { useGetAllOrdersQuery } from 'redux/ordersSlice';

const MyOrders = () => {
  const { data } = useGetAllOrdersQuery();
  const [customerOrders, setCustomerOrders] = useState([]);

  const getOrdersByCustomerData = ({ number, email }) => {
    const customerOrders = data.filter(
      ({ customerData }) =>
        customerData.number === number && customerData.email === email
    );
    setCustomerOrders(customerOrders);
  };

  return (
    <StoreWrapper>
      <MyOrdersForm onFormSubmit={getOrdersByCustomerData} />
      {customerOrders.length !== 0 && (
        <MyOrdersList ordersList={customerOrders} />
      )}
    </StoreWrapper>
  );
};

export default MyOrders;
