import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import Store from 'pages/Store/Store';
import ShoppingCart from 'pages/ShoppingCart/ShoppingCart';
import Home from 'pages/Home/Home';
import { ProductsList } from './ProductsList/ProductsList';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/" element={<Store />}>
          <Route path="store/:categoryName" element={<ProductsList />}></Route>
        </Route>
        <Route path="shoppingCart" element={<ShoppingCart />}></Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Route>
    </Routes>
  );
};
