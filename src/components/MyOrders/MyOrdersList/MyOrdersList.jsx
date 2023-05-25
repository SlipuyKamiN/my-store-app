import { List } from './MyOrdersList.styled';
import { MyOrderItem } from 'components/MyOrders/MyOrderItem/MyOrderItem';

export const MyOrdersList = ({ ordersList }) => {
  return (
    <List>
      {ordersList.map(order => (
        <MyOrderItem key={order.id} order={order} />
      ))}
    </List>
  );
};
