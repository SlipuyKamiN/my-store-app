import { useGetCategoriesQuery } from 'redux/productsSlice';
import { CategoryLink, List, ListItem } from './CategoriesList.styled';
import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const CategoriesList = () => {
  const { data: allCategories, isFetching } = useGetCategoriesQuery();
  const [availableCategories, setAvailableCategories] = useState([]);
  const shoppingCart = useSelector(state => state.shoppingCart);
  const navigate = useNavigate();

  useEffect(() => {
    if (shoppingCart.length !== 0) {
      const selectedCategory = shoppingCart.find(
        ({ category }) => category
      ).category;
      navigate(`store/${selectedCategory}`, { replace: true });
      setAvailableCategories([selectedCategory]);
      return;
    }
    setAvailableCategories(allCategories || []);
  }, [setAvailableCategories, navigate, shoppingCart, allCategories]);

  return (
    <List>
      {availableCategories.length > 1 && (
        <ListItem key="All">
          <CategoryLink to={`store/allCategories`}>All Categories</CategoryLink>
        </ListItem>
      )}
      {!isFetching &&
        availableCategories.map(category => (
          <ListItem key={category}>
            <CategoryLink to={`store/${category}`}>{category}</CategoryLink>
          </ListItem>
        ))}
    </List>
  );
};
