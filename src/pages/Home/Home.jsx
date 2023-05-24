import { CategoriesList } from 'components/CategoriesList/CategoriesList';
import { StoreWrapper } from 'pages/Store/Store.styled';

import { ProductsList } from 'components/ProductsList/ProductsList';

const Home = () => {
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
      <ProductsList />
    </StoreWrapper>
  );
};

export default Home;
