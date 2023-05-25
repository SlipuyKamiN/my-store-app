import { notification } from 'components/SharedLayout/notification';
import { List, Loader } from './ProductsList.styled';
import { ProductItem } from 'components/StorePage/ProductItem/ProductItem';
import { useParams } from 'react-router-dom';
import { useGetProductsByShopQuery } from 'redux/productsSlice';

export const ProductsList = () => {
  const { restaurantName } = useParams();

  const {
    data: burgers,
    isFetching,
    isError,
  } = useGetProductsByShopQuery(restaurantName || 'all');

  if (isError) {
    console.warn(isError.message);
    notification();
  }

  return (
    <List>
      {isFetching ? (
        <Loader size="25px" />
      ) : (
        burgers?.map(burger => {
          return <ProductItem key={burger.name} burger={burger} />;
        })
      )}
    </List>
  );
};
