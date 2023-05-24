import { useDispatch, useSelector } from 'react-redux';
import {
  AddToCartButton,
  CardDescription,
  CardPrice,
  CardTitle,
  ProductCard,
  PurchaseWrapper,
} from './ProductItem.styled';
import { addProduct, changeQuantity } from 'redux/shoppingCartSlice';

export const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector(state => state.shoppingCart);
  const handleAddProduct = product => {
    const isProductInCart = shoppingCart.find(({ id }) => id === product.id);
    if (isProductInCart) {
      dispatch(changeQuantity(product.id, 'increment'));
      return;
    }

    dispatch(addProduct(product));
  };
  const { image, title, description, price } = product;

  return (
    <ProductCard>
      <img src={image} alt={title} width="100%" />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <PurchaseWrapper>
        <CardPrice>Price: {Math.round(price)} ₴</CardPrice>
        <AddToCartButton
          onClick={() => {
            handleAddProduct(product);
          }}
        >
          Add to my cart
        </AddToCartButton>
      </PurchaseWrapper>
    </ProductCard>
  );
};
