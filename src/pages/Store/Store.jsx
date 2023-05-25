import { ShopsList } from 'components/StorePage/ShopsList/ShopsList';
import { StoreWrapper } from './Store.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const Store = () => {
  return (
    <StoreWrapper>
      <ShopsList />
      <Suspense fallback={<div>Please wait...</div>}>
        <Outlet />
      </Suspense>
    </StoreWrapper>
  );
};

export default Store;
