import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { IoMenu } from 'react-icons/io5';
import { FaPlus } from 'react-icons/fa6';
import { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <header className="bg-orange-400 shadow-md relative z-20 px-6">
      <div className="container mx-auto ">
        <nav className="flex justify-between items-center py-4 relative">
          {/* Brand logo */}
          <div className="text-2xl font-bold italic">
            <span className="text-emerald-600">Shop</span>
            <span className="text-sky-600">Ease</span>
          </div>

          {/* Shopping Cart Icon */}
          <div className="flex items-center gap-4">
            {/* navlinks */}
            <ul
              className={`${
                isOpen ? 'block' : 'hidden'
              } md:flex gap-6 items-center md:block absolute md:static top-14 left-0 w-full md:w-auto bg-white opacity-70 md:bg-transparent z-20 md:z-auto`}
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-black text-xl px-6 py-4'
                      : 'py-4 px-6 block text-xl hover:text-gray-800'
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-black text-xl px-6 py-4'
                      : 'py-4 px-6 block text-xl hover:text-gray-800'
                  }
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'text-black text-xl px-6 py-4'
                      : 'py-4 px-6 block text-xl hover:text-gray-800'
                  }
                >
                  Account
                </NavLink>
              </li>
            </ul>
            <FiShoppingCart className="text-xl text-gray-900 cursor-pointer" />

            {/* Mobile Menu Toggle Icons */}
            <div className="block md:hidden">
              <IoMenu
                onClick={handleMenu}
                className={`text-2xl cursor-pointer ${
                  isOpen ? 'hidden' : 'block'
                } hover:text-gray-900 `}
              />
              <FaPlus
                onClick={handleMenu}
                className={`text-xl cursor-pointer ${
                  isOpen ? 'block' : 'hidden'
                } hover:text-gray-900 `}
              />
            </div>
          </div>
        </nav>
        {/* Search Bar */}
        <div className="flex justify-center items-center gap-4 py-4">
          <div className="relative w-2/4">
            <input
              type="text"
              placeholder="Search for products"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none bg-white text-gray-700 pr-10"
            />

            <IoIosSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500  text-2xl" />
          </div>
        </div>
      </div>
    </header>
  );
}
