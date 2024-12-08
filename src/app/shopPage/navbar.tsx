import React from 'react'
import Link from 'next/link'
import { MdKeyboardArrowRight } from 'react-icons/md'

const Navbar = () => {
  return (
    <div className="flex justify-start items-start max-w-screen-2xl m-auto w-[300px] h-[22px] top-[158px] gap-[12px]">
        <Link href="/" className=" flex items-center font-satoshi font-bold text-black leading-[21.6px] gap-1">
        Home
        <MdKeyboardArrowRight />
        </Link>
        <Link href="/shop" className=" flex items-center font-satoshi font-bold text-black leading-[21.6px] gap-1">
        Shop
        <MdKeyboardArrowRight />
        </Link>
        <Link href="#" className=" flex items-center font-satoshi font-bold text-black leading-[21.6px] gap-1">
        {`Men's`}
        <MdKeyboardArrowRight />
        </Link>
        <Link href="#" className=" flex items-center font-satoshi text-black leading-[21.6px] gap-1">
        {`T-Shart's`}
        
        </Link>
    </div>
  )
}

export default Navbar