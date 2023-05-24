import styled from '@emotion/styled';

export const ProductCard = styled.li`
  border-radius: 15px;
  padding: 15px;
  border: 1px solid black;
  overflow: hidden;
  margin-bottom: 10px;
  width: 45%;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

export const PurchaseWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  align-items: center;
`;

export const CardPrice = styled.p`
  font-size: 20px;
  color: green;
`;

export const AddToCartButton = styled.button`
  border-radius: 15px;
  padding: 15px;
  font-size: 20px;
  text-align: center;
`;

export const ChangeQuantityButton = styled.button`
  border-radius: 50%;
  font-size: 20px;
  text-align: center;
`;

export const QuantityCounter = styled.p`
  font-size: 18px;
  color: red;
`;
