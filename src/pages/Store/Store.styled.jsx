import styled from '@emotion/styled';

export const StoreWrapper = styled.main`
  display: flex;
  @media screen and (max-width: 1280px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const SideBar = styled.aside`
  flex-shrink: 0;
  width: 260px;
  padding: 20px;
  border-right: 1px solid var(--primary-white-color);
  border-bottom: 1px solid transparent;
  @media screen and (max-width: 1280px) {
    width: 100%;
    max-width: none;
    border-right: 1px solid transparent;
    border-bottom: 1px solid var(--primary-white-color);
  }
`;
