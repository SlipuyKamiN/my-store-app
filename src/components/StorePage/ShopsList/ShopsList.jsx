import { useGetShopsQuery } from 'redux/productsSlice';
import { CategoryLink, Info, List, ListItem } from './ShopsList.styled';
import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getShoppingCart } from 'redux/selectors';
import { SideBar } from 'pages/Store/Store.styled';

export const ShopsList = () => {
  const { data: allShops, isFetching } = useGetShopsQuery();
  const [availableShops, setAvailableShops] = useState([]);
  const shoppingCart = useSelector(getShoppingCart);
  const navigate = useNavigate();

  useEffect(() => {
    if (shoppingCart.length !== 0) {
      const selectedShop = shoppingCart.find(
        ({ category }) => category
      ).category;

      navigate(`store/${selectedShop}`, { replace: true });
      setAvailableShops([selectedShop]);
      return;
    }

    setAvailableShops(allShops || []);
  }, [setAvailableShops, navigate, shoppingCart, allShops]);

  return (
    <SideBar>
      <List>
        {availableShops.length > 1 && (
          <ListItem key="All">
            <CategoryLink to={`store/allShops`}>All shops</CategoryLink>
          </ListItem>
        )}
        {!isFetching &&
          availableShops.map(category => (
            <ListItem key={category}>
              <CategoryLink to={`store/${category}`}>
                "{category}" shop
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
