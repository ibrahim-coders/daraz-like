import { Link, NavLink } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { IoMenu } from 'react-icons/io5';
import { FaPlus } from 'react-icons/fa6';
import { useContext, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import Login from '../../Authentication/Login';
import Signup from '../../Authentication/Signup';
import { AuthContext } from '../../AuthContext/AuthProviters';
import toast from 'react-hot-toast';

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { user, signOuts } = useContext(AuthContext);

  const handleMenu = () => setOpen(!isOpen);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

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

  const handleLogout = async () => {
    try {
      await signOuts();
      toast.success('Logged out successfully');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <header className="bg-orange-500 shadow-md relative z-20 px-4">
        <div className="container mx-auto">
          <nav className="flex justify-between items-center py-2 relative">
            <Link to="/" className="text-2xl font-bold italic">
              <span className="text-white">Daraz</span>
              <span className="text-black">Like</span>
            </Link>
            <div className="flex items-center gap-4">
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
                  <NavLink to="/dashboard" className={navLinkStyles}>
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  {user && user.email ? (
                    <div className="relative">
                      <button
                        onClick={toggleDropdown}
                        className="flex items-center gap-2 focus:outline-none"
                      >
                        <img
                          className="w-8 h-8 rounded-full"
                          src={
                            user?.photoURL || 'https://via.placeholder.com/40'
                          }
                          alt="User Avatar"
                        />
                        <span className="text-white">
                          {user?.displayName || 'User'}
                        </span>
                      </button>
                      {showDropdown && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg py-2">
                          <p className="px-4 py-2 text-gray-700">
                            {user?.email}
                          </p>
                          <button
                            onClick={handleLogout}
                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
                          >
                            Logout
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <NavLink onClick={openLoginModal} className={navLinkStyles}>
                      LOGIN
                    </NavLink>
                  )}
                </li>
              </ul>
              <button aria-label="Shopping Cart">
                <FiShoppingCart className="text-xl text-gray-900 cursor-pointer" />
              </button>
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
          <div className="flex justify-center items-center gap-4 pb-4">
            <div className="relative w-2/4">
              <input
                type="text"
                placeholder="Search for products"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none bg-white text-gray-700 pr-10"
              />
              <button aria-label="Search">
                <IoIosSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto">
        {showLogin && (
          <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-30 mt-10">
            <Login openRegisterModal={openRegisterModal} />
          </div>
        )}

        {showRegister && (
          <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-30">
            <Signup openLoginModal={openLoginModal} />
          </div>
        )}
      </div>
    </>
  );
}
