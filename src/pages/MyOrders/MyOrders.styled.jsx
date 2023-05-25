import styled from '@emotion/styled';

export const MyOrdersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 1280px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const TryAgainButton = styled.button`
  border-radius: 15px;
  padding: 10px;
  margin-top: 10px;
  width: 100%;
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
  &:disabled {
    cursor: not-allowed;
    border: 2px solid #000000cc;
    color: #000000cc;
    background-color: #00000011;
  }
`;
