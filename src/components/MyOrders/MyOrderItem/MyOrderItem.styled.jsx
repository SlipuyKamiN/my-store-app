import styled from '@emotion/styled';

export const ProductCard = styled.li`
  width: 100%;
  border: 1px solid var(--brand-color);
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  gap: 10;
`;

export const ItemsList = styled.ul`
  display: flex;
  padding: 20px;
  gap: 20px;
  @media screen and (max-width: 1280px) {
    /* flex-direction: column; */
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const OrderItem = styled.li`
  position: relative;
  overflow: hidden;
  border-radius: 15px;

  &:hover div {
    cursor: pointer;
    transform: translateY(0%);
  }
`;

export const ItemImage = styled.img`
  width: 100px;
  height: 100px;
`;

export const CardTitle = styled.h3`
  padding: 10px;
  font-size: 12px;
  width: 100px;
`;

export const PurchaseWrapper = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100px;
  padding: 15px;
  font-size: 12px;
  background-color: #000000cc;
  transform: translateY(-100%);
  transition: transform 250ms linear;
`;

export const CardPrice = styled.p`
  color: #00d000;
`;

export const DateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  font-size: 24px;
  @media screen and (max-width: 1280px) {
    font-size: 16px;
  }
`;

export const OrderTotalPrice = styled.span`
  font-size: 32px;
  color: #00d000;
  text-align: right;
`;
