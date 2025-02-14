import { Route, Routes } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import Shop from '../pages/Shop/Shop';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import Signup from '../Authentication/Signup';
import Login from '../Authentication/Login';
import Dashboard from '../pages/Dashboard/Dashboard';
import AddProducat from '../pages/Sidebar/AddProducat/AddProducat';
import MyProducat from '../pages/Sidebar/MyProducat/MyProducat';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/producat/:id" element={<ProductDetails />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<AddProducat />} />{' '}
          {/* Default route inside dashboard */}
          <Route path="addProducat" element={<AddProducat />} />
          <Route path="producats" element={<MyProducat />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  );
};

export default Router;
