import { useDispatch } from 'react-redux';
import {
  Counter,
  ChangeQuantityButton,
  CounterWrapper,
} from './QuantityCounter.styled';
import { BsCartPlus, BsCartDash } from 'react-icons/bs';

import { changeQuantity } from 'redux/shoppingCartSlice';
import { useEffect, useState } from 'react';

export const QuantityCounter = ({ id, quantity }) => {
  const [counterValue, setCounterValue] = useState(quantity);
  const dispatch = useDispatch();
  const isProductOneInCart = counterValue === 1;

  useEffect(() => {
    dispatch(changeQuantity(id, counterValue));
  }, [counterValue, dispatch, id]);

  return (
    <CounterWrapper>
      <ChangeQuantityButton
        onClick={() => {
          setCounterValue(counterValue + 1);
        }}
      >
        <BsCartPlus />
      </ChangeQuantityButton>
      <Counter>{counterValue}</Counter>
      <ChangeQuantityButton
        onClick={() => {
          setCounterValue(counterValue - 1);
        }}
        disabled={isProductOneInCart}
      >
        <BsCartDash />
      </ChangeQuantityButton>
    </CounterWrapper>
  );
};
