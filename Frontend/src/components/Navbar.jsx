import React, { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import { Popover, Transition } from '@headlessui/react';
import { UserIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const user = false;

  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-2xl font-bold">Price Predictor</h2>

        <div className="flex items-center gap-6">
          <ul className="flex space-x-4 items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400 font-bold" : "hover:text-gray-400"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/items"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400 font-bold" : "hover:text-gray-400"
                }
              >
                Items
              </NavLink>
            </li>
          </ul>

          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <button className="bg-purple-700 hover:bg-purple-500 px-4 py-2 rounded-full text-white">
                  Login
                </button>
              </Link>
              <Link to="/Register">
                <button className="bg-purple-700 hover:bg-purple-500 px-4 py-2 rounded-full text-white">
                  Register
                </button>
              </Link>
            </div>
          ) : (
            <Popover className="relative">
              <Popover.Button className="focus:outline-none">
                <img
                  className="h-10 w-10 rounded-full cursor-pointer"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7_VWfnn-Og-PDMer1tvNSM4U2T_r3zjb5OA&s"
                  alt="avatar"
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 mt-2 w-64 bg-black text-white rounded-lg shadow-lg p-4 z-10">
                  <div className="flex gap-3">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7_VWfnn-Og-PDMer1tvNSM4U2T_r3zjb5OA&s"
                      alt="avatar"
                    />
                    <div>
                      <h3 className="font-medium">Alyvia Biswas</h3>
                      <p className="text-sm text-gray-400">Web Developer</p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 cursor-pointer hover:text-purple-400">
                      <UserIcon className="h-5 w-5 text-purple-600" />
                      <span>View Profile</span>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer hover:text-purple-400">
                      <ArrowRightOnRectangleIcon className="h-5 w-5 text-purple-600" />
                      <span>Logout</span>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
