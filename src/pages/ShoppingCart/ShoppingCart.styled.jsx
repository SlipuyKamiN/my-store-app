import styled from '@emotion/styled';

export const ShoppingCartWrapper = styled.main`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 1280px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const TotalPriceWrapper = styled.section`
  flex-shrink: 0;
  width: 100%;
  text-align: left;
  padding: 20px;
`;

export const TotalPrice = styled.p`
  font-size: 32px;
  color: var(--primary-white-color);
  span {
    color: #00d000;
  }
`;
