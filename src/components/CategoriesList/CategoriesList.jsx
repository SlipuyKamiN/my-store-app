import { useGetCategoriesQuery } from 'redux/productsSlice';
import { CategoryLink, List, ListItem } from './CategoriesList.styled';

export const CategoriesList = () => {
  const { data: allCategories = {}, isFetching } = useGetCategoriesQuery();

  return (
    <List>
      <ListItem key="All">
        <CategoryLink to={`store/allCategories`}>All Categories</CategoryLink>
      </ListItem>
      {!isFetching &&
        allCategories.map(category => (
          <ListItem key={category}>
            <CategoryLink to={`store/${category}`}>{category}</CategoryLink>
          </ListItem>
        ))}
    </List>
  );
};
