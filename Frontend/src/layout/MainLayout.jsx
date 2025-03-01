import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Header/Navbar';
import Footer from '../pages/Footer/Fotter';

const MainLayout = () => {
  return (
    <div className=" ">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <Outlet /> {/* ✅ শুধু Outlet থাকবে, Home থাকবে না */}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
