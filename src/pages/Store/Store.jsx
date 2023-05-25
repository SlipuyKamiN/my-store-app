import { ShopsList } from 'components/StorePage/ShopsList/ShopsList';
import { StoreWrapper } from './Store.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/StorePage/ProductsList/ProductsList.styled';

const Store = () => {
  return (
    <StoreWrapper>
      <ShopsList />
      <Suspense fallback={<Loader size="25px" />}>
        <Outlet />
      </Suspense>
    </StoreWrapper>
  );
};

export default Store;
