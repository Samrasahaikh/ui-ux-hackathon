"use client"
import React, { useState } from "react";
import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const DetailSection = () => {
  const [selectedColor, setSelectedColor] = useState("Black");

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto p-4 gap-8">
      {/* Left Side (Vertical Images) */}
      <div className="flex flex-col items-center md:items-start gap-4 md:w-1/3">
        <Image
          src="/detail/detail2.png"
          alt="Shart"
          width={150}
          height={100}
          className="rounded-md"
        />
        <Image
          src="/detail/detail3.png"
          alt="Shart"
          width={150}
          height={100}
          className="rounded-md"
        />
        <Image
          src="/detail/detail4.png"
          alt="Shart"
          width={150}
          height={100}
          className="rounded-md"
        />
        </div>
      {/* Right Side (Main Image and Text Content) */}
      <div className="flex flex-col gap-8 md:w-2/3">
        {/* Main Image */}
        <div className="flex justify-center md:justify-start ">
          <Image
            src="/detail/detail1.png"
            alt="Shart Image"
            width={500}
            height={500}
            className="rounded-md"
          />
        </div>
      </div>


        {/* Text Content */}
        <div className="flex flex-col gap-4">
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
          <p className="text-4xl font-semibold">$25.00</p>
          <p className="text-lg text-gray-500">
            <del>$300</del> <span className="text-red-500">-45%</span>
          </p>
          <p className="text-gray-600 leading-relaxed">
            This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
          </p>

          {/* Color Options */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold">Choose a Color:</h3>
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
            <p className="text-sm text-gray-500">Selected Color: {selectedColor}</p>
          </div>
        </div>
      </div>
  );
};

export default DetailSection;
