import { List } from './ProductsList.styled';
import { ProductItem } from 'components/ProductItem/ProductItem';
import { useParams } from 'react-router-dom';
import {
  useGetAllProductsQuery,
  useGetProductsByCategoryQuery,
} from 'redux/productsSlice';

export const ProductsList = () => {
  const { categoryName } = useParams();
  const { data: allProducts } = useGetAllProductsQuery();
  const { data: categoryProducts } =
    useGetProductsByCategoryQuery(categoryName);

  const productsToRender =
    categoryName === 'allCategories' || !categoryName
      ? allProducts
      : categoryProducts;

  return (
    <List>
      {productsToRender &&
        productsToRender.map(product => {
          return <ProductItem key={product.id} product={product} />;
        })}
    </List>
  );
};
