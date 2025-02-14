import { Outlet, useLocation } from 'react-router-dom';
import { DefaultSidebar } from '../Sidebar/Sidebar';
import { MdMenu } from 'react-icons/md';
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [isOpen, setOpen] = useState(true);

  const location = useLocation(); // Detect route change

  // Close sidebar when the route changes
  useEffect(() => {
    setOpen(false); // Auto-close sidebar when clicking a route
  }, [location]);
  // Toggle function for sidebar
  const handleMenu = () => setOpen(!isOpen);

  return (
    <section className="relative">
      {/* Menu Icons */}
      <div className="p-4">
        <MdMenu
          onClick={handleMenu}
          className={`text-2xl text-start cursor-pointer ${
            isOpen ? 'hidden' : 'block'
          }`}
        />
      </div>

      <div className="flex">
        {/* Sidebar that opens/closes based on 'isOpen' */}
        {isOpen && (
          <div className="absolute z-10 transition-all duration-300 ease-in-out transform">
            <DefaultSidebar handleMenu={() => setOpen(false)} isOpen={isOpen} />
          </div>
        )}

        {/* Main content area */}
        <div
          className={`flex-1 w-full min-h-[calc(100vh)] py-12 container mx-auto p-4 transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-30' : ''
          }`}
        >
          {/* Outlet for nested routes */}
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
