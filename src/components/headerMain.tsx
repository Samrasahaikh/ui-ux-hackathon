"use client";
import React, { useState } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose, MdKeyboardArrowDown } from "react-icons/md"; 
import { FaRegUserCircle} from "react-icons/fa";

const HeaderMain = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false); // New state for Shop menu

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const toggleShopMenu = () => setIsShopMenuOpen(!isShopMenuOpen); // Toggle Shop menu

  return (
    <header className="bg-white shadow-sm border-b mx-auto flex flex-col max-w-screen-2xl">
      <div className="flex justify-between items-center px-6 sm:px-12 md:px-32 py-4">
        {/* Hamburger Menu */}
        <GiHamburgerMenu
          onClick={toggleMenu}
          className="sm:hidden flex text-2xl hover:text-gray-500 cursor-pointer "
        />

        {/* Logo */}
        <Link href="/">
        <h1 className="text-3xl font-extrabold font-integral text-primary ml-10 mr-5">SHOP.CO</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center relative">
          <div className="relative">
            <button
              onClick={toggleShopMenu}
              className="text-primary hover:text-gray-500 hover:underline flex items-center"
            >
              Shop
              <MdKeyboardArrowDown />
            </button>

            {/* Shop Popup Menu */}
            {isShopMenuOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md p-4 w-48 z-50">
                <ul className="space-y-2">
                  <li className="hover:bg-gray-100 px-2 py-1 rounded-md">
                    <Link href="/shopPage">{`Men's`}</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-2 py-1 rounded-md">
                    <Link href="/casual">Casual</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-2 py-1 rounded-md">
                    <Link href="/Cart">Cart</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Link href="#" className="text-primary hover:text-gray-500 hover:underline">
            On Sale
          </Link>
          <Link href="#" className="text-primary hover:text-gray-500 hover:underline">
            New Arrivals
          </Link>
          <Link href="#" className="text-primary hover:text-gray-500 hover:underline">
            Brands
          </Link>
        </nav>

        {/* Search and Icons */}
        <div className="flex items-center space-x-4 relative mr-16">
          {/* Mobile Search Icon */}
          <CiSearch
            onClick={toggleSearch}
            className="text-2xl lg:hidden hover:text-gray-500 cursor-pointer"
          />

          {/* Mobile Search Bar */}
          {isSearchOpen && (
            <div className="absolute top-14 right-10 w-full rounded-md p-2 flex items-center space-x-2 z-50">
              <CiSearch className="text-2xl text-gray-500" />
              <input
                type="text"
                placeholder="Search For Products"
                className="flex-1 bg-gray-100 outline-none text-sm rounded-full px-8 py-2"
              />
              <MdClose
                onClick={toggleSearch}
                className="text-2xl text-gray-500 hover:text-gray-700 cursor-pointer"
              />
            </div>
          )}

          {/* Desktop Search Bar */}
          <div className="hidden lg:flex items-center bg-slate-100 rounded-full px-4 py-2 gap-2 w-[500px] h-[48px]">
            <CiSearch className="text-2xl" />
            <input
              type="text"
              placeholder="Search For Products"
              className="bg-slate-100 outline-none text-sm"
            />
          </div>

          <IoCartOutline className="text-2xl hover:text-gray-500" />

          {/* User Icon with Popup */}
          <FaRegUserCircle
            onClick={toggleUserMenu}
            className="text-2xl hover:text-gray-500 cursor-pointer"
          />

          {isUserMenuOpen && (
            <div className="absolute right-0 top-12 bg-white shadow-lg rounded-md p-4 w-48 z-50">
              <ul className="space-y-2">
                <li className="hover:bg-gray-100 px-2 py-1 rounded-md">
                  <Link href="#">Manage My Account</Link>
                </li>
                <li className="hover:bg-gray-100 px-2 py-1 rounded-md">
                  <Link href="#">My Orders</Link>
                </li>
                <li className="hover:bg-gray-100 px-2 py-1 rounded-md">
                  <Link href="#">My Cancellations</Link>
                </li>
                <li className="hover:bg-gray-100 px-2 py-1 rounded-md">
                  <Link href="#">My Reviews</Link>
                </li>
                <li className="hover:bg-gray-100 px-2 py-1 rounded-md">
                  <Link href="#">Logout</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;
