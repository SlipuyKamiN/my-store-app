import { ShopsList } from 'components/StorePage/ShopsList/ShopsList';
import { StoreWrapper } from 'pages/Store/Store.styled';

import { ProductsList } from 'components/StorePage/ProductsList/ProductsList';

const Home = () => {
  return (
    <StoreWrapper>
      <ShopsList />
      <ProductsList />
    </StoreWrapper>
  );
};

export default Home;
