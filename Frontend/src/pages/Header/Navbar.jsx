import { Link, NavLink } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { IoMenu } from 'react-icons/io5';
import { FaPlus } from 'react-icons/fa6';
import { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import Login from '../../Authentication/Login';
import Signup from '../../Authentication/Signup';

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleMenu = () => {
    setOpen(!isOpen);
  };

  const navLinkStyles = ({ isActive }) =>
    `p-3 block hover:text-gray-800 ${isActive ? 'text-white' : ''}`;

  const openLoginModal = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const openRegisterModal = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  // const closeModals = () => {
  //   setShowLogin(false);
  //   setShowRegister(false);
  // };

  return (
    <>
      <header className="bg-orange-500 shadow-md relative z-20 px-4">
        <div className="container mx-auto">
          <nav className="flex justify-between items-center py-2 relative">
            {/* Brand logo */}
            <Link to="/" className="text-2xl font-bold italic">
              <span className="text-white">Daraz</span>
              <span className="text-black">Like</span>
            </Link>

            {/* Shopping Cart Icon */}
            <div className="flex items-center gap-4">
              {/* Navigation Links */}
              <ul
                className={`${
                  isOpen ? 'block' : 'hidden'
                } md:flex gap-6 items-center md:block absolute md:static top-14 left-0 w-full md:w-auto bg-white md:bg-transparent z-20 md:z-auto transition-all duration-300 ease-in-out`}
              >
                <li>
                  <NavLink to="/shop" className={navLinkStyles}>
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/account" className={navLinkStyles}>
                    BECOME A SELLER
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={openLoginModal} className={navLinkStyles}>
                    LOGIN
                  </NavLink>
                </li>
              </ul>

              {/* Shopping Cart Icon */}
              <button aria-label="Shopping Cart">
                <FiShoppingCart className="text-xl text-gray-900 cursor-pointer" />
              </button>

              {/* Mobile Menu Toggle Icons */}
              <div className="block md:hidden">
                <button
                  onClick={handleMenu}
                  aria-label="Toggle Menu"
                  className="hover:text-gray-900"
                >
                  <IoMenu
                    className={`text-2xl cursor-pointer ${
                      isOpen ? 'hidden' : 'block'
                    }`}
                  />
                  <FaPlus
                    className={`text-xl cursor-pointer ${
                      isOpen ? 'block' : 'hidden'
                    }`}
                  />
                </button>
              </div>
            </div>
          </nav>

          {/* Search Bar */}
          <div className="flex justify-center items-center gap-4 py-4 ">
            <div className="relative w-2/4">
              <input
                type="text"
                placeholder="Search for products"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none bg-white text-gray-700 pr-10"
              />
              <button aria-label="Search">
                <IoIosSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto ">
        {/* Modals */}
        {showLogin && (
          <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-30">
            <Login openRegisterModal={openRegisterModal} />
          </div>
        )}

        {showRegister && (
          <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-30 ">
            <Signup openLoginModal={openLoginModal} />
          </div>
        )}
      </div>
    </>
  );
}
