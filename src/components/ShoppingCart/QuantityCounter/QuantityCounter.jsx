import { useDispatch } from 'react-redux';
import { Counter, ChangeQuantityButton } from './QuantityCounter.styled';
import { changeQuantity } from 'redux/shoppingCartSlice';
import { useEffect, useRef, useState } from 'react';

export const QuantityCounter = ({ id, quantity }) => {
  const [counterValue, setCounterValue] = useState(quantity);
  const isFirstRender = useRef(true);
  const dispatch = useDispatch();
  const isProductOneInCart = counterValue === 1;

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender.current = false;
      return;
    }

    dispatch(changeQuantity(id, counterValue));
  }, [counterValue, dispatch, id]);

  return (
    <>
      <ChangeQuantityButton
        onClick={() => {
          setCounterValue(counterValue + 1);
        }}
      >
        +
      </ChangeQuantityButton>
      <Counter>{counterValue}</Counter>
      <ChangeQuantityButton
        onClick={() => {
          setCounterValue(counterValue - 1);
        }}
        disabled={isProductOneInCart}
      >
        -
      </ChangeQuantityButton>
    </>
  );
};
