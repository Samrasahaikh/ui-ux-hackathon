"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";
import Link from "next/link";
import "aos/dist/aos.css";
import AOS from "aos";


// Define the Product Type
type Product = {
  title: string;
  price: string;
  oldPrice: string | null;
  image: string;
  rating: number;
};
// Product Data
const products = [
  {
    title: "VERTICAL STRIPED SHIRT",
    price: "$212",
    oldPrice: "$232",
    image: "/topSelling/top1.png",
    rating: 5.0,
  },
  {
    title: "COURAGE GRAPHIC T-SHIRT",
    price: "$145",
    oldPrice: null,
    image: "/topSelling/top2.png",
    rating: 4,
  },
  {
    title: "LOOSE FIT BERMUDA SHORTS",
    price: "$80",
    oldPrice: null,
    image: "/topSelling/top3.png",
    rating: 3,
  },
  {
    title: "FADED SKINNY JEANS",
    price: "$210",
    oldPrice: null,
    image: "/topSelling/top4.png",
    rating: 4.5,
  },
];

// Product Box Component
const ProductBox = ({ product }: { product: Product }) => {
  const fullStars = Math.floor(product.rating); // Full stars
  const hasHalfStar = product.rating % 1 !== 0; // Check if there is a half star

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1 second
  }, []);

  return (
    <div className="w-full sm:w-[48%] md:w-[22%] flex flex-col items-center"
    data-aos="fade-down">
      <Link href="/shopPage">
      <div className="group shadow-md bg-[#F0EEED] w-[270px] h-[250px] flex justify-center items-center relative cursor-pointer rounded-md overflow-hidden">
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
      </Link>
      <h1 className="font-bold font-sans pt-2 text-sm sm:text-md text-left ">{product.title}</h1>
      <div className="flex items-center space-x-2">
        <span className="text-secondary font-bold">{product.price}</span>
        {product.oldPrice && (
          <>
            <span className="text-gray-400 font-bold line-through">
              {product.oldPrice}
            </span>
            {/* Price reduction */}
            <span className="text-red-500 border-2 outline-none rounded-full bg-red-200 px-2">
              -${(parseFloat(product.oldPrice.replace('$', '')) - parseFloat(product.price.replace('$', ''))).toFixed(0)}
            </span>
          </>
        )}
      </div>
      <div className="flex items-center space-x-1 text-yellow-400 text-md pt-1">
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} />
        ))}
        {hasHalfStar && <FaStarHalf />}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
          <FaRegStar key={index + fullStars + (hasHalfStar ? 1 : 0)} />
        ))}
        {/* Displaying rating number */}
        <p className="text-gray-400 text-sm pt-1 font-bold">
          {product.rating}/5
        </p>
      </div>
    </div>
  );
};

const TopSelling = () => {

  useEffect(() => {
    AOS.init(); // Initialize AOS here as well
  }, []);

  return (
    <main>
      <div className="w-full flex justify-center items-start mt-10 mb-1 max-w-screen-2xl m-auto border-t-2">
        <div className="w-[90%] md:w-[80%]">
          {/* Header Section */}
          <div className="flex flex-col ">
            <div className="flex justify-center items-center mt-4">
              <h1 className="text-gray-800 font-integral font-extrabold text-lg sm:text-2xl md:text-5xl" data-aos="fade-down">
              TOP SELLING
              </h1>
            </div>
          </div>

          {/* Product Section */}
          <div className="flex flex-wrap justify-center sm:justify-between gap-5 mt-8">
            {products.map((product, index) => (
              <ProductBox key={index} product={product} />
            ))}
          </div>
          {/* View All Button */}
          <div className="flex justify-center mt-6">
            <button className="text-black border-2 shadow-sm px-20 py-3 rounded-full font-satoshi text-[18px] hover:bg-black hover:text-white" data-aos="fade-down">
              <Link href="/casual">
              View All
              </Link>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TopSelling;
