
import React from 'react'
import { RxCross2 } from 'react-icons/rx'

const HeaderTop = () => {
  return (
    <header className="bg-black text-white py-2 px-20 sm:w-[100%] max-w-screen-2xl m-auto">
      <div className="flex justify-between items-center">
        <div className="text-sm text-center flex-grow">
          Sign up and get 20% off to your first oredr.          
          
          {/* Sign Up Now Button */}
          <button className="text-white hover:text-slate-400 py-1  rounded-md font-semibold transition">
            <u>Sign Up Now</u>
          </button>
        </div>
        <div className="flex text-xl hover:cursor-pointer hover:text-slate-400">
        <RxCross2 />
        </div>
      </div>
    </header>
  )
}

export default HeaderTop
