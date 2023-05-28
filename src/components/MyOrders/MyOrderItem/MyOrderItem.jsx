import PropTypes from 'prop-types';
import {
  CardPrice,
  CardTitle,
  ItemImage,
  ItemsList,
  OrderItem,
  ProductCard,
  PurchaseWrapper,
  OrderTotalPrice,
  DateWrapper,
} from './MyOrderItem.styled';

export const MyOrderItem = ({ order }) => {
  const { orderItems, totalPrice, createdAt } = order;
  const date = new Date(createdAt);

  return (
    <ProductCard>
      <ItemsList>
        {orderItems.map(orderItem => (
          <OrderItem key={orderItem.id}>
            <ItemImage
              src={orderItem.images[0].sm}
              alt={orderItem.name}
              width="100px"
            />
            <CardTitle>{orderItem.name}</CardTitle>
            <PurchaseWrapper>
              <CardPrice>Price: {orderItem.price} ₴</CardPrice>
              <CardPrice>Quantity: {orderItem.quantity} pcs.</CardPrice>
            </PurchaseWrapper>
          </OrderItem>
        ))}
      </ItemsList>
      <DateWrapper>
        <p>{date.toLocaleDateString()}</p>
        <p>
          Total order price: <OrderTotalPrice>{totalPrice}₴</OrderTotalPrice>
        </p>
      </DateWrapper>
    </ProductCard>
  );
};

MyOrderItem.propTypes = {
  order: PropTypes.object.isRequired,
};
