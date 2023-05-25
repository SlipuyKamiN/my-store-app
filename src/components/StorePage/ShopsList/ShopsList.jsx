import { useGetShopsQuery } from 'redux/productsSlice';
import { CategoryLink, Info, List, ListItem } from './ShopsList.styled';
import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getShoppingCart } from 'redux/selectors';
import { SideBar } from 'pages/Store/Store.styled';
import { notification } from 'components/SharedLayout/notification';

export const ShopsList = () => {
  const { data: allShops, isFetching, isError } = useGetShopsQuery();
  const [availableShops, setAvailableShops] = useState([]);
  const shoppingCart = useSelector(getShoppingCart);
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      console.warn(isError.message);
      notification();
    }

    if (shoppingCart.length !== 0) {
      const selectedRestaurant = shoppingCart.find(
        ({ restaurant }) => restaurant
      ).restaurant;

      navigate(`store/${selectedRestaurant.replaceAll(' ', '-')}`, {
        replace: true,
      });
      setAvailableShops([selectedRestaurant]);
      return;
    }

    setAvailableShops(allShops || []);
  }, [setAvailableShops, navigate, shoppingCart, allShops, isError]);

  return (
    <SideBar>
      <List>
        {availableShops.length > 1 && (
          <ListItem key="All">
            <CategoryLink to={`store/all`}>All restaurants</CategoryLink>
          </ListItem>
        )}
        {!isFetching &&
          !isError &&
          availableShops.map(restaurantName => (
            <ListItem key={restaurantName}>
              <CategoryLink to={`store/${restaurantName.replaceAll(' ', '-')}`}>
                {restaurantName}
              </CategoryLink>
            </ListItem>
          ))}
      </List>
      {availableShops.length === 1 && (
        <Info>
          You can buy products only from the one shop at the same time.
        </Info>
      )}
    </SideBar>
  );
};
