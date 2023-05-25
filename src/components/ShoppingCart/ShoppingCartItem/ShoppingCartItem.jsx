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

export const ShoppingCartItem = ({ burger }) => {
  const dispatch = useDispatch();

  const { images, name, id, quantity, desc, price } = burger;

  const productTotalPrice = Math.round(quantity * price);

  return (
    <ProductCard>
      <CardImage src={images[0].sm} alt={name} width="100%" />
      <CardTitle>{name}</CardTitle>
      <CardDescription>{desc}</CardDescription>
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
