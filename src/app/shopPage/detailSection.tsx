"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsDash } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";

const DetailSection = () => {
  const [selectedColor, setSelectedColor] = useState("Olive Brown");

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto p-4 gap-8">


      {/* Smaller Images */}
      <div className="order-2 md:order-none flex md:flex-col items-center md:items-start gap-4 md:w-1/3 overflow-x-auto md:overflow-visible ml-4 ">
        <Image
          src="/detail/detail2.png"
          alt="Shirt Detail"
          width={130}
          height={100}
          className="rounded-md md:w-[150] md:h-[170]"
        />
        <Image
          src="/detail/detail3.png"
          alt="Shirt Detail"
          width={130}
          height={100}
          className="rounded-md md:w-[150] md:h-[170]"
        />
        <Image
          src="/detail/detail4.png"
          alt="Shirt Detail"
          width={130}
          height={100}
          className="rounded-md md:w-[150] md:h-[170]"
        />
      </div>
            {/* Large Image */}
            <div className="order-1 md:order-none flex justify-center md:justify-start md:-ml-28">
        <Image
          src="/detail/detail1.png"
          alt="Shirt Image"
          width={600}
          height={400}
          className="rounded-md md:h-[530] md:w-[700]"
        />
      </div>

      {/* Text Content */}
      <div className="order-3 md:order-none flex flex-col gap-4 md:w-2/3">
        <h1 className="text-3xl font-bold">One Life Graphic T-shirt</h1>
        <div className="flex items-center text-yellow-500">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <p className="text-gray-400 text-sm ml-2 hover:text-accent cursor-pointer">
            (4.5/5)
          </p>
        </div>
        <p className="text-4xl font-bold flex font-satoshi items-center gap-5">
          $260
          <del className="text-gray-400 line-through font-normal">$300</del>
          <span className="text-red-500 border-2 outline-none rounded-full bg-red-200 px-4 text-[18px] font-normal">
            - 45%
          </span>
        </p>
        <p className="text-gray-400 leading-relaxed font-satoshi">
          This graphic t-shirt is perfect for any occasion. Crafted from a soft
          and breathable fabric, it offers superior comfort and style.
        </p>

        {/* Color Options */}
        <div className="flex flex-col gap-2 border-t-2 pt-4">
          <h3 className="text-lg text-gray-500 font-satoshi">Select Colors</h3>
          <div className="flex gap-4">
            <button
              onClick={() => handleColorSelect("Olive Brown")}
              className={`w-8 h-8 rounded-full bg-[#4F4631] ${
                selectedColor === "Olive Brown" ? "ring-4 ring-[#4F4631]" : ""
              }`}
            />
            <button
              onClick={() => handleColorSelect("Deep Teal")}
              className={`w-8 h-8 rounded-full bg-[#314F4A] ${
                selectedColor === "Deep Teal" ? "ring-4 ring-[#314F4A]" : ""
              }`}
            />
            <button
              onClick={() => handleColorSelect("Charcoal")}
              className={`w-8 h-8 rounded-full bg-[#31344F] ${
                selectedColor === "Charcoal" ? "ring-4 ring-[#31344F]" : ""
              }`}
            />
          </div>
        </div>

        {/* Size Options */}
        <div className="flex flex-col gap-4 border-t-2 pt-4">
          <h3 className="text-lg  text-gray-500 font-satoshi">Choose Size</h3>
          <div className="flex flex-wrap gap-4">
            {["Small", "Medium", "Large", "X-Large"].map((size) => (
              <button
                key={size}
                className="bg-[#F0F0F0] text-black px-4 md:px-8 py-2 rounded-full hover:bg-black hover:text-white border transition"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity and Add to Cart */}
        <div className="flex flex-wrap gap-4 border-t-2 pt-4">
          <button className="flex items-center justify-between w-32 bg-[#F0F0F0] px-4 py-2 rounded-full hover:bg-black hover:text-white border transition">
            <BsDash />
            1
            <FiPlus />
          </button>
          <button className="bg-primary text-white px-24 md:px-36 py-3 rounded-full hover:bg-transparent hover:text-primary border transition">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
