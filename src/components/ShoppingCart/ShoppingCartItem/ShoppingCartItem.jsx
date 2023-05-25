import { useDispatch } from 'react-redux';
import {
  AddToCartButton,
  CardDescription,
  CardPrice,
  CardTitle,
  ProductCard,
  PurchaseWrapper,
} from './ShoppingCartItem.styled';
import { deleteProduct } from 'redux/shoppingCartSlice';
import { QuantityCounter } from '../QuantityCounter/QuantityCounter';

export const ShoppingCartItem = ({ product }) => {
  const dispatch = useDispatch();

  const { image, title, id, quantity, description, price } = product;

  const productTotalPrice = Math.round(quantity * price);

  return (
    <ProductCard>
      <img src={image} alt={title} width="100%" />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <QuantityCounter quantity={quantity} id={id} />
      <PurchaseWrapper>
        <CardPrice>Price: {productTotalPrice} ₴</CardPrice>
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
