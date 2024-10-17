import React, { useState, Fragment } from "react";
import { Link, Navigate } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { connect } from "react-redux";
import Alert from "../alert";

import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

import { logout } from "../../redux/actions/auth";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = ({ isAuthenticated, user, logout, total_items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [redirect, setRedirect] = useState(false);

  const logoutHandler = () => {
    logout();
    setRedirect(true);
  };

  if (redirect) return <Navigate to="/" />;

  const authLinks = (
    <Menu as="div" className="relative inline-block text-left z-50">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md px-4 py-2 text-sm font-medium text-gray-700">
          <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
            <svg
              className="h-full w-full text-gray-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </span>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Configuración
                </a>
              )}
            </Menu.Item>

            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={logoutHandler}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full text-left px-4 py-2 text-sm"
                    )}
                  >
                    Cerrar sesión
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );

  const guestLinks = (
    <Fragment>
      <Link
        to="/login"
        className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent rounded-full shadow-lg text-base font-semibold text-white bg-purple-500 hover:bg-purple-600 transition duration-200 ease-in-out transform hover:scale-105"
      >
        Iniciar sesión
      </Link>
    </Fragment>
  );

  return (
    <>
      <div>
        {/* Navbar Principal */}
        <nav className="bg-white shadow py-4 rounded top-10 right-0 left-0 z-50">
          <div className="flex flex-wrap justify-between items-center mx-auto px-6 sm:px-4 lg:px-48">
            <a href="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                CHUN
              </span>
            </a>
            {/* Menú principal centrado */}
            <div className="hidden lg:flex lg:items-center lg:w-auto lg:flex-1 lg:justify-center">
              <ul className="font-medium flex p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                <li>
                  <a
                    href="/"
                    className="block py-2 px-3 text-lg text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-400 md:p-0"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="/shop"
                    className="block py-2 px-3 text-lg text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-400 md:p-0"
                  >
                    Productos
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block py-2 px-3 text-lg text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-400 md:p-0"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:hidden flex items-center space-x-2">
              {/* Botón del carrito de compras en móviles */}
              <Link
                to="/cart"
                className="flex items-center text-gray-900 hover:text-purple-400"
              >
                <FaShoppingCart className="text-3xl" />
                <span className="text-xs absolute top-1 mt-3 ml-5 bg-red-500 text-white font-bold rounded-full px-2 p-1 text-center">
                  {total_items}
                </span>
              </Link>
              {isAuthenticated ? authLinks : guestLinks}
              {isOpen ? (
                <FaTimes
                  className="text-xl cursor-pointer"
                  onClick={toggleMenu}
                />
              ) : (
                <FaBars
                  className="text-xl cursor-pointer"
                  onClick={toggleMenu}
                />
              )}
            </div>

            {/* Botón del carrito de compras y auth en pantallas grandes */}
            <div className="hidden lg:flex items-center ml-auto gap-4">
              <Link
                to="/cart"
                className="flex items-center text-gray-900 hover:text-purple-400"
              >
                <FaShoppingCart className="text-3xl" />
                <span className="text-xs absolute top-1 mt-3 ml-5 bg-red-500 text-white font-bold rounded-full px-2 p-1 text-center">
                  {total_items}
                </span>
              </Link>
              {isAuthenticated ? authLinks : guestLinks}
            </div>
          </div>

          {/* Menú desplegable en pantallas móviles */}
          <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="/shop"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Productos
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Alert />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user,
    total_items: state.Cart.total_items,
  };
};

export default connect(mapStateToProps, { logout })(Navbar);
