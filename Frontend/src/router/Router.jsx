import { Route, Routes } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import Shop from '../pages/Shop/Shop';
import ProductDetails from '../components/ProductDetails/ProductDetails';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="/producat/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};

export default Router;
