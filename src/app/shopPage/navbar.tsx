import React from "react";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex justify-start items-center w-full max-w-screen-2xl mx-auto gap-[12px] px-4">
      <Link href="/" className="flex items-center font-satoshi text-black leading-[21.6px] gap-1">
        Home
        <MdKeyboardArrowRight />
      </Link>
      <Link href="/casual" className="flex items-center font-satoshi  text-black leading-[21.6px] gap-1">
        Casual
        <MdKeyboardArrowRight />
      </Link>
      <Link href="#" className="flex items-center font-satoshi  text-black leading-[21.6px] gap-1">
        {`Men's`}
        <MdKeyboardArrowRight />
      </Link>
      <Link href="#" className="flex items-center font-satoshi text-black leading-[21.6px] gap-1">
        {`T-Shirts`}
      </Link>
    </div>
  );
};

export default Navbar;
