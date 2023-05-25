import { MyOrdersForm } from 'components/MyOrders/MyOrdersForm/MyOrdersForm';
import { MyOrdersList } from 'components/MyOrders/MyOrdersList/MyOrdersList';
import { EmptyList } from 'components/ShoppingCart/ShoppingCartList/EmptyList';
import { Info } from 'components/StorePage/ShopsList/ShopsList.styled';
import { MyOrdersWrapper, TryAgainButton } from './MyOrders.styled';
import { useState } from 'react';
import { useGetAllOrdersQuery } from 'redux/ordersSlice';
import { notification } from 'components/SharedLayout/notification';
import { SideBar } from 'pages/Store/Store.styled';

const MyOrders = () => {
  const { data, isError } = useGetAllOrdersQuery();
  const [customerOrders, setCustomerOrders] = useState([]);
  const [customerNumber, setCustomerNumber] = useState(null);

  if (isError) {
    console.warn(isError.message);
    notification();
  }

  const getOrdersByCustomerData = ({ number, email }) => {
    setCustomerNumber(number);
    const customerOrders = data.filter(
      ({ customerData }) =>
        customerData.number === number && customerData.email === email
    );
    setCustomerOrders(customerOrders);
  };

  const isOrders = customerOrders.length !== 0;

  return (
    <MyOrdersWrapper>
      {!isOrders && !customerNumber && (
        <Info>
          Have you ordered burgers before? Let's see your order history. Please
          fill the form below.
        </Info>
      )}
      <SideBar>
        {isOrders || customerNumber ? (
          <>
            <Info>There are your orders</Info>
            <TryAgainButton
              onClick={() => {
                setCustomerNumber(null);
                setCustomerOrders([]);
              }}
            >
              Try another
            </TryAgainButton>
          </>
        ) : (
          !customerNumber && (
            <MyOrdersForm onFormSubmit={getOrdersByCustomerData} />
          )
        )}
      </SideBar>
      {isOrders ? (
        <MyOrdersList ordersList={customerOrders} />
      ) : (
        customerNumber && (
          <EmptyList info="Your order history is empty yet. Let's go shopping..." />
        )
      )}
    </MyOrdersWrapper>
  );
};

export default MyOrders;
