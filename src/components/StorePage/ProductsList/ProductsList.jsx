import { List } from './ProductsList.styled';
import { ProductItem } from 'components/StorePage/ProductItem/ProductItem';
import { useParams } from 'react-router-dom';
import {
  useGetAllProductsQuery,
  useGetProductsByShopQuery,
} from 'redux/productsSlice';

export const ProductsList = () => {
  const { shopName } = useParams();
  const { data: allProducts, isFetching: isAllFetching } =
    useGetAllProductsQuery();
  const { data: categoryProducts, isFetching: isByShopFetching } =
    useGetProductsByShopQuery(shopName);

  const isFetching = isAllFetching || isByShopFetching;

  const productsToRender =
    shopName === 'allShops' || !shopName ? allProducts : categoryProducts;

  return (
    <List>
      {isFetching
        ? 'Loading'
        : productsToRender.map(product => {
            return <ProductItem key={product.id} product={product} />;
          })}
    </List>
  );
};
