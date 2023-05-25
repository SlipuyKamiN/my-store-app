import styled from '@emotion/styled';

export const ProductCard = styled.li`
  box-shadow: black 0px 0px 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 280px;
  border-radius: 15px;
  border: 2px solid var(--brand-color);
  overflow: hidden;
  &:hover p {
    cursor: pointer;
    transform: translateY(0%);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 250px;
  margin-bottom: 10px;
`;

export const CardTitle = styled.h3`
  padding: 0 10px;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const CardDescription = styled.p`
  padding: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  position: absolute;
  top: 0;
  transform: translateY(-100%);
  transition: transform 250ms linear;

  background-color: #000000cc;
`;

export const PurchaseWrapper = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  margin-top: auto;
`;

export const CardPrice = styled.p`
  font-size: 24px;
  color: #00d000;
`;

export const AddToCartButton = styled.button`
  border-radius: 15px;
  padding: 10px;
  font-size: 20px;
  text-align: center;
  color: var(--brand-color);
  border: 2px solid var(--brand-color);
  background-color: transparent;
  transition: color 200ms linear, background-color 200ms linear;

  &:hover,
  &:focus {
    color: var(--primary-white-color);
    border: 2px solid var(--primary-white-color);
  }
`;
