import React from "react";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import { MdCircle, MdKeyboardArrowRight, MdOutlineKeyboardArrowUp } from "react-icons/md";

const Filter = () => {
  return (
    <div className="p-4">
      <div className="flex md:justify-start mt-4">
        {/* left section  */}
        <div className="w-full max-w-[295px] md:w-[295px] h-auto bg-white rounded-[20px] border shadow-md p-6 text-black">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-[20px] leading-[27px]">Filters</h3>
            <div className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 cursor-pointer">
              <HiAdjustmentsVertical className="text-2xl" />
            </div>
          </div>

          {/* Categories */}
          <div className="border-t mt-4">
            {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map((item) => (
              <div
                key={item}
                className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-100 cursor-pointer mt-2"
              >
                <p className="text-gray-500">{item}</p>
                <MdKeyboardArrowRight />
              </div>
            ))}
          </div>

          {/* Price Range */}
          <div className="flex justify-between items-center mt-6">
            <h3 className="font-bold text-[18px] leading-[27px]">Price</h3>
            <MdOutlineKeyboardArrowUp />
          </div>
          <div className="relative mt-6">
  {/* Price points */}
  <div className="flex justify-evenly">
    <div className="flex flex-col items-center">
      <MdCircle className="text-black" />
      <p className="mt-2 text-sm">$50</p>
    </div>
    <div className="flex flex-col items-center">
      <MdCircle className="text-black" />
      <p className="mt-2 text-sm">$200</p>
    </div>
  </div>
  {/* Line with black center */}
  <div className="relative h-2 bg-gray-300 rounded-full mt-4">
    {/* Black segment */}
    <div className="absolute left-1/4 w-1/2 h-full bg-black rounded-full"></div>

  </div>
</div>

          {/* Colors */}
          <h3 className="font-bold text-[18px] mt-6">Colors</h3>
<div className="flex flex-wrap gap-3 mt-3">
  {["green", "red", "yellow", "orange", "cyan", "blue", "purple", "pink", "white", "black"].map((color) => (
    <div
      key={color}
      style={{ backgroundColor: color }}
      className="w-8 h-8 rounded-full border hover:scale-110 transition cursor-pointer"
    ></div>
  ))}
</div>


          {/* Sizes */}
          <h3 className="font-bold text-[18px] mt-6">Sizes</h3>
          <div className="flex flex-wrap gap-3 mt-3">
            {["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-large", "4X-Large"].map((size) => (
              <button
                key={size}
                className="px-4 py-2 rounded-full border border-gray-300 bg-gray-100 hover:bg-gray-200 cursor-pointer"
              >
                {size}
              </button>
            ))}
          </div>

          {/* Dress Style */}
          <h3 className="font-bold text-[18px] mt-6">Dress Style</h3>
          <div className="border-t mt-4">
            {["Casual", "Formal", "Party", "Gym"].map((item) => (
              <div
                key={item}
                className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-100 cursor-pointer mt-2"
              >
                <p className="text-gray-500">{item}</p>
                <MdKeyboardArrowRight />
              </div>
            ))}
          </div>

          {/* Add to Filter */}
          <div className="mt-6 flex justify-center">
            <button className="w-full py-3 bg-black text-white rounded-full hover:text-black hover:bg-secondary2">
              Add to Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
