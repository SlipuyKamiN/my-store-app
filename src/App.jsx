import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import { ProductsList } from './components/StorePage/ProductsList/ProductsList';
const Store = lazy(() => import('pages/Store/Store'));
const ShoppingCart = lazy(() => import('pages/ShoppingCart/ShoppingCart'));
const MyOrders = lazy(() => import('pages/MyOrders/MyOrders'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Store />}>
          <Route path="store/:restaurantName" element={<ProductsList />} />
        </Route>
        <Route path="shoppingCart" element={<ShoppingCart />} />
        <Route path="myOrders" element={<MyOrders />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
