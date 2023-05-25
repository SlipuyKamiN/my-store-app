import {
  CardPrice,
  CardTitle,
  OrderItem,
  ProductCard,
  PurchaseWrapper,
} from './MyOrderItem.styled';

export const MyOrderItem = ({ order }) => {
  const { orderItems, totalPrice } = order;

  return (
    <ProductCard>
      <ul>
        {orderItems.map(orderItem => (
          <OrderItem key={orderItem.id}>
            <img src={orderItem.image} alt={orderItem.title} width="100px" />
            <CardTitle>{orderItem.title}</CardTitle>
            <PurchaseWrapper>
              <CardPrice>Price: {orderItem.price} ₴</CardPrice>
              <CardPrice>Quantity: {orderItem.quantity} pcs.</CardPrice>
            </PurchaseWrapper>
          </OrderItem>
        ))}
      </ul>
      <p>{totalPrice}</p>
    </ProductCard>
  );
};
