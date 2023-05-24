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

  return (
    <ProductCard>
      <img src={product.image} alt={product.title} width="100%" />
      <CardTitle>{product.title}</CardTitle>
      <CardDescription>{product.description}</CardDescription>
      <PurchaseWrapper>
        <CardPrice>Price: {product.price}</CardPrice>
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
