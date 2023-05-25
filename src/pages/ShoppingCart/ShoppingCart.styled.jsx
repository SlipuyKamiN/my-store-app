import styled from '@emotion/styled';

export const ShoppingCartWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TotalPriceWrapper = styled.div`
  flex-shrink: 0;
  width: 100%;
  text-align: left;
  padding: 0 10px;
`;

export const TotalPrice = styled.p`
  font-size: 32px;
  color: var(--primary-white-color);
  span {
    color: #00d000;
  }
`;
