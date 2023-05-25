import { List, Loader } from './ProductsList.styled';
import { ProductItem } from 'components/StorePage/ProductItem/ProductItem';
import { useParams } from 'react-router-dom';
import {
  useGetAllProductsQuery,
  useGetProductsByShopQuery,
} from 'redux/productsSlice';

export const ProductsList = () => {
  const { shopName } = useParams();

  const { data: burgers, isFetching } = useGetProductsByShopQuery(
    shopName || 'all'
  );

  return (
    <List>
      {isFetching ? (
        <Loader size="25px" />
      ) : (
        burgers.map(burger => {
          return <ProductItem key={burger.name} burger={burger} />;
        })
      )}
    </List>
  );
};
