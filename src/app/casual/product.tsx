"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import products from "@/utils/productData";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";
import { Select, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { SelectTrigger } from "@radix-ui/react-select";
import { MdKeyboardArrowDown } from "react-icons/md";

// Define the Product Type
type Product = {
    title: string;
    price: string;
    oldPrice: string | null;
    image: string;
    rating: number;
  };
// Product Box Component
const ProductBox = ({ product }: { product: Product }) => {
  const fullStars = Math.floor(product.rating); // Full stars
  const hasHalfStar = product.rating % 1 !== 0; // Check if there is a half star


  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1 second
  }, []);

  return (
    <div className="w-full md:w-[30%] flex flex-col items-center"
    data-aos="fade-left">
      <div className="group shadow-md bg-[#F0EEED] w-full h-[250px] flex justify-center items-center relative cursor-pointer rounded-md overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={100}
          className="object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <button className="w-full absolute bottom-0 bg-primary text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Add To Cart
        </button>
      </div>
      <h1 className="font-bold font-sans pt-2 text-sm sm:text-md text-center">
        {product.title}
      </h1>
      <div className="flex items-center space-x-2">
        <span className="text-black font-bold">{product.price}</span>
        {product.oldPrice && (
          <>
            <span className="text-gray-400 font-bold line-through">
              {product.oldPrice}
            </span>
            <span className="text-red-500 border-2 outline-none rounded-full bg-red-200 px-2">
              -$
              {(
                parseFloat(product.oldPrice.replace("$", "")) -
                parseFloat(product.price.replace("$", ""))
              ).toFixed(0)}
            </span>
          </>
        )}
      </div>
      <div className="flex items-center space-x-1 text-yellow-400 text-md pt-1">
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} />
        ))}
        {hasHalfStar && <FaStarHalf />}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map(
          (_, index) => (
            <FaRegStar key={index + fullStars + (hasHalfStar ? 1 : 0)} />
          )
        )}
        <p className="text-gray-400 text-sm pt-1 font-bold">
          {product.rating}/5
        </p>
      </div>
    </div>
  );
};

const NewArrivalsWithFilter = () => {
  return (
    <main>
       <div className="w-full flex justify-center items-start mt-10 mb-1 max-w-screen-2xl m-auto">
        <div className="w-[90%] md:w-[80%]">
          {/* Header Section */}
          <div className="flex flex-col ">
            <div className="flex justify-center items-center mt-4">
              <h1 className="text-gray-800 font-integral font-extrabold text-2xl md:text-5xl md:-mt-48" data-aos="fade-down">
                Casual
              </h1>
              <span className=" flex text-sm md:text-base text-black/60 ml-36 md:-mt-48">
                Showing 1-10 of 100 Products
              </span>
              <div className="hidden md:flex items-center md:-mt-48">
                Sort by:{" "}
                <Select defaultValue="most-popular">
                  <SelectTrigger className="font-medium text-sm px-1.5 sm:text-base w-fit text-black bg-transparent shadow-none border-none">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="most-popular">Most Popular </SelectItem>
                    <SelectItem value="low-price">Low Price</SelectItem>
                    <SelectItem value="high-price">High Price</SelectItem>
                  </SelectContent>
                </Select>
                    <MdKeyboardArrowDown className="flex text-lg" />
            </div>
            </div>
          </div>

          {/* Product Section */}
          <div className="flex flex-wrap justify-center sm:justify-between gap-5 mt-8 md:-mt-10" >
            {products.map((product, index) => (
              <ProductBox key={index} product={product} />
            ))}
          </div>

          {/* View All Button */}
          <div className="flex justify-center mt-6">
            <button className="text-black border-2 shadow-sm px-20 py-3 rounded-full font-satoshi text-[18px] hover:bg-black hover:text-white" data-aos="fade-down">
              View All
            </button>
          </div>
        </div>
      </div>
  
    </main>
  );
};

export default NewArrivalsWithFilter;
