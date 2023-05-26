import { ShopsList } from 'components/StorePage/ShopsList/ShopsList';
import { StoreWrapper } from './Store.styled';

import { ProductsList } from 'components/StorePage/ProductsList/ProductsList';

const Store = () => {
  return (
    <StoreWrapper>
      <ShopsList />
      <ProductsList />
    </StoreWrapper>
  );
};

export default Store;
