import { useDispatch } from 'react-redux';
import {
  AddToCartButton,
  CardDescription,
  CardPrice,
  CardTitle,
  ChangeQuantityButton,
  ProductCard,
  PurchaseWrapper,
  QuantityCounter,
} from './ShoppingCartItem.styled';
import { changeQuantity, deleteProduct } from 'redux/shoppingCartSlice';

export const ShoppingCartItem = ({ product }) => {
  const dispatch = useDispatch();

  const { image, title, id, quantity, description, price } = product;

  const isProductOneInCart = quantity === 1;
  const productTotalPrice = quantity * price;

  return (
    <ProductCard>
      <img src={image} alt={title} width="100%" />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <ChangeQuantityButton
        onClick={() => {
          dispatch(changeQuantity(id, 'increment'));
        }}
      >
        +
      </ChangeQuantityButton>
      <QuantityCounter>{quantity}</QuantityCounter>
      <ChangeQuantityButton
        onClick={() => {
          dispatch(changeQuantity(id, 'decrement'));
        }}
        disabled={isProductOneInCart}
      >
        -
      </ChangeQuantityButton>
      <PurchaseWrapper>
        <CardPrice>Price: {productTotalPrice}</CardPrice>
        <AddToCartButton
          onClick={() => {
            dispatch(deleteProduct(id));
          }}
        >
          Delete from my cart
        </AddToCartButton>
      </PurchaseWrapper>
    </ProductCard>
  );
};
