import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import { ProductsList } from './components/StorePage/ProductsList/ProductsList';
const Home = lazy(() => import('./pages/Home/Home'));
const Store = lazy(() => import('pages/Store/Store'));
const ShoppingCart = lazy(() => import('pages/ShoppingCart/ShoppingCart'));
const MyOrders = lazy(() => import('pages/MyOrders/MyOrders'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/" element={<Store />}>
          <Route path="store/:shopName" element={<ProductsList />}></Route>
        </Route>
        <Route path="shoppingCart" element={<ShoppingCart />}></Route>
        <Route path="myOrders" element={<MyOrders />}></Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Route>
    </Routes>
  );
};
