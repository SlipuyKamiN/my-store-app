import { useDispatch, useSelector } from 'react-redux';
import {
  AddToCartButton,
  CardImage,
  CardDescription,
  CardPrice,
  CardTitle,
  ProductCard,
  PurchaseWrapper,
} from './ProductItem.styled';
import { BsCartPlus, BsCartDash } from 'react-icons/bs';
import { addProduct, deleteProduct } from 'redux/shoppingCartSlice';
import { getShoppingCart } from 'redux/selectors';
import { useEffect, useState } from 'react';

export const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector(getShoppingCart);
  const [isProductInCart, setIsProductInCart] = useState(false);

  useEffect(() => {
    const isProductInCart = shoppingCart.find(({ id }) => id === product.id);
    if (isProductInCart) {
      setIsProductInCart(true);
      return;
    }
    setIsProductInCart(false);
  }, [shoppingCart, product.id]);

  const handleButtonClick = product => {
    if (isProductInCart) {
      dispatch(deleteProduct(product.id));
      return;
    }

    dispatch(addProduct(product));
  };

  const { image, title, description, price } = product;

  return (
    <ProductCard>
      <CardImage src={image} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <PurchaseWrapper>
        <span>
          Price: <CardPrice>{Math.round(price)} ₴</CardPrice>
        </span>

        <AddToCartButton
          onClick={() => {
            handleButtonClick(product);
          }}
        >
          {isProductInCart ? (
            <>
              Remove <BsCartDash />
            </>
          ) : (
            <>
              Add to cart <BsCartPlus />
            </>
          )}
        </AddToCartButton>
      </PurchaseWrapper>
    </ProductCard>
  );
};
