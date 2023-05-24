// import {
//   useGetAllProductsQuery,
//   useGetCategoriesQuery,
//   useGetProductsByCategoryQuery,
// } from 'redux/productsSlice';

import { CategoriesList } from 'components/CategoriesList/CategoriesList';
import { StoreWrapper } from './Store.styled';
import { Outlet } from 'react-router-dom';

const Store = () => {
  // const { data: allProducts } = useGetAllProductsQuery();
  // console.log(allProducts);
  // const { data: allCategories } = useGetCategoriesQuery();
  // console.log(allCategories);
  // const { data: productsByCategory } =
  //   useGetProductsByCategoryQuery('electronics');
  // console.log(productsByCategory);

  return (
    <StoreWrapper>
      <CategoriesList />
      <Outlet />
    </StoreWrapper>
  );
};

export default Store;
