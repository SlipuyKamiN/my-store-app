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
            <ItemImage src={orderItem.image} alt={orderItem.title} />
            <CardTitle>{orderItem.title}</CardTitle>
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
