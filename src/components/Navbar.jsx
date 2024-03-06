import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import WebLogo from './WebLogo'
import '../styles/navBar.css'

const Navbar = ({ user, handleLogOut, cart }) => {
  const [showDropdown, setShowDropdown] = useState(false)
  useEffect(() => {
    return
  }, [cart])

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed w-full mb-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {user ? (
          <Link
            to="/landing"
            className="flex items-center space-x-3 rtl:space-x-reverse md:w-auto"
          >
            <WebLogo className="h-10 md:h-10 !important" />
            <span className="self-center text-lg md:text-2xl font-semibold whitespace-nowrap dark:text-white">
              COOKED
            </span>
          </Link>
        ) : (
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse md:w-auto"
          >
            <WebLogo className="h-10 md:h-10 !important" />
            <span className="self-center text-lg md:text-2xl font-semibold whitespace-nowrap dark:text-white">
              COOKED™
            </span>
          </Link>
        )}
        <div className="hidden md:flex md:flex-grow justify-end">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/team"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Devs
              </Link>
            </li>
            <li>
              <Link
                to="/landing"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Home
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link
                    to="/profile"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Profile
                  </Link>
                </li>
                {user?.type === 'restaurant' && user.restId.menu && (
                  <li>
                    <Link
                      to={`/menu/${user.restId._id}`}
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Menu
                    </Link>
                  </li>
                )}
                <li>
                  <Link
                    to="/orders"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Orders
                  </Link>
                </li>
                {user?.type === 'customer' && cart.length > 0 && (
                  <li>
                    <Link
                      to={`/cart`}
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Cart
                    </Link>
                  </li>
                )}
                <li>
                  <Link
                    onClick={handleLogOut}
                    to="/"
                    className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Sign Out
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/register"
                    className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signin"
                    className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Sign In
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="flex items-center">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
