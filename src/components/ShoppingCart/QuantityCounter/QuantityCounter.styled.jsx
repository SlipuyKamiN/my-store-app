import styled from '@emotion/styled';

export const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  gap: 10px;
  width: 120px;
  border-radius: 20px;
  background-color: #61dbfb44;
`;

export const ChangeQuantityButton = styled.button`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding-top: 7px;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  background-color: transparent;
  color: var(--primary-white-color);
  border: 1px solid var(--primary-white-color);
  transition: background-color 250ms linear, border-color 250ms linear,
    color 250ms linear;

  &:hover,
  &:focus {
    color: var(--brand-color);
  }
  &:disabled {
    background-color: #00000066;
    color: #00000066;
    border: 1px solid #00000066;
  }
`;

export const Counter = styled.p`
  font-size: 22px;
  color: var(--primart-white-color);
`;
