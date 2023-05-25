import { useDispatch } from 'react-redux';
import {
  AddToCartButton,
  CardDescription,
  CardImage,
  CardPrice,
  CardTitle,
  ProductCard,
  PurchaseWrapper,
} from './ShoppingCartItem.styled';
import { BsCartX } from 'react-icons/bs';
import { deleteProduct } from 'redux/shoppingCartSlice';
import { QuantityCounter } from '../QuantityCounter/QuantityCounter';

export const ShoppingCartItem = ({ product }) => {
  const dispatch = useDispatch();

  const { image, title, id, quantity, description, price } = product;

  const productTotalPrice = Math.round(quantity * price);

  return (
    <ProductCard>
      <CardImage src={image} alt={title} width="100%" />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <QuantityCounter quantity={quantity} id={id} />
      <PurchaseWrapper>
        <span>
          Price: <CardPrice>{Math.round(productTotalPrice)} ₴</CardPrice>
        </span>
        <AddToCartButton
          onClick={() => {
            dispatch(deleteProduct(id));
          }}
        >
          Remove <BsCartX />
        </AddToCartButton>
      </PurchaseWrapper>
    </ProductCard>
  );
};
