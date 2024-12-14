"use client";
import React, { useState } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose, MdKeyboardArrowDown } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

const HeaderMain = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);
  const toggleShopMenu = () => setIsShopMenuOpen(!isShopMenuOpen);

  const menuLinks = [
    { href: "/", label: "Home" },
    { href: "/casual", label: "On Sale" },
    { href: "/shopPage", label: "New Arrivals" },
    { href: "/brand", label: "Brands" },
  ];

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="flex justify-between items-center p-4 max-w-screen-2xl mx-auto">
        {/* Hamburger Menu for Mobile */}
        <GiHamburgerMenu
          onClick={toggleMenu}
          className="md:hidden text-2xl cursor-pointer z-50"
        />

        {/* Logo */}
        <Link href="/">
          <h1 className="text-3xl font-bold text-primary">SHOP.CO</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <div className="relative">
            <button
              onClick={toggleShopMenu}
              className="flex items-center text-primary hover:text-gray-500"
            >
              Shop <MdKeyboardArrowDown />
            </button>
            {isShopMenuOpen && (
              <div className="absolute top-full left-0 bg-white shadow rounded-md p-2 w-[150px]">
                <ul className="space-y-2">
                  {menuLinks.map((link, index) => (
                    <li key={index} className="hover:bg-gray-100 rounded-md px-2 py-1">
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {menuLinks.slice(1).map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-primary hover:text-gray-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Icons Section */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2">
            <CiSearch className="text-2xl" />
            <input
              type="text"
              placeholder="Search For Products"
              className="bg-gray-100 outline-none text-sm w-full"
            />
          </div>
          <Link href="/cart">
            <IoCartOutline className="text-2xl hover:text-gray-500" />
          </Link>
          <FaRegUserCircle
            onClick={toggleUserMenu}
            className="text-2xl cursor-pointer hover:text-gray-500"
          />
          {isUserMenuOpen && (
            <div className="absolute top-full right-0 bg-white shadow rounded-md p-2 w-40">
              <ul className="space-y-2">
                {["Manage My Account", "My Orders", "Logout"].map((item, idx) => (
                  <li key={idx} className="hover:bg-gray-100 px-2 py-1 rounded-md">
                    <Link href="#">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-3/4 h-full bg-white shadow z-50">
          <div className="flex justify-between items-center p-4">
            <h2 className="text-2xl font-bold">Menu</h2>
            <MdClose onClick={toggleMenu} className="text-2xl cursor-pointer" />
          </div>
          <nav className="flex flex-col space-y-4 p-4">
            {menuLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-primary hover:text-gray-500"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default HeaderMain;
