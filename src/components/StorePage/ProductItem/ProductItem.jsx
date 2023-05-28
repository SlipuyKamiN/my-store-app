import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
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

export const ProductItem = ({ burger }) => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector(getShoppingCart);
  const [isProductInCart, setIsProductInCart] = useState(false);

  useEffect(() => {
    const isProductInCart = shoppingCart.find(({ id }) => id === burger.id);
    if (isProductInCart) {
      setIsProductInCart(true);
      return;
    }
    setIsProductInCart(false);
  }, [shoppingCart, burger.id]);

  const handleButtonClick = burger => {
    if (isProductInCart) {
      dispatch(deleteProduct(burger.id));
      return;
    }
    dispatch(addProduct(burger));
  };

  const { images, name, desc, price } = burger;

  return (
    <ProductCard>
      <CardImage src={images[0].sm} alt={name} />
      <CardTitle>{name}</CardTitle>
      <CardDescription>{desc}</CardDescription>
      <PurchaseWrapper>
        <span>
          Price: <CardPrice>{Math.round(price)} ₴</CardPrice>
        </span>

        <AddToCartButton
          onClick={() => {
            handleButtonClick(burger);
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

ProductItem.propTypes = {
  burger: PropTypes.object.isRequired,
};
