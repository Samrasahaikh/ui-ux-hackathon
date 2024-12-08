import React from "react";
import Image from "next/image";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";

// Define the Product Type
type Product = {
  title: string;
  price: string;
  oldPrice: string | null;
  image: string;
  rating: number;
};

// Product Data
const products: Product[] = [
  {
    title: "T-SHIRT WITH TAPE DETAILS",
    price: "$120",
    oldPrice: null,
    image: "/newArrivals/arrival1.png",
    rating: 4.5,
  },
  {
    title: "SKINNY FIT JEANS",
    price: "$240",
    oldPrice: "$260",
    image: "/newArrivals/arrival2.png",
    rating: 3.5,
  },
  {
    title: "CHECKERED SHIRT",
    price: "$180",
    oldPrice: null,
    image: "/newArrivals/arrival3.png",
    rating: 4.5,
  },
  {
    title: "SLEEVE STRIPED T-SHIRT",
    price: "$130",
    oldPrice: "$160",
    image: "/newArrivals/arrival4.png",
    rating: 4.5,
  },
];

// Product Box Component
const ProductBox = ({ product }: { product: Product }) => {
  const fullStars = Math.floor(product.rating); // Full stars
  const hasHalfStar = product.rating % 1 !== 0; // Check if there is a half star

  return (
    <div className="w-full sm:w-[48%] md:w-[22%] flex flex-col items-center">
      <div className="group shadow-md bg-[#F0EEED] w-[270px] h-[250px] flex justify-center items-center relative cursor-pointer rounded-md overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={100}
          className="object-cover"
        />
        <button className="w-full absolute bottom-0 bg-primary text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Add To Cart
        </button>
      </div>
      <h1 className="font-bold font-sans pt-2 text-sm sm:text-md ">
        {product.title}
      </h1>
      <div className="flex items-center space-x-2">
        <span className="text-secondary font-bold">{product.price}</span>
        {product.oldPrice && (
          <>
            <span className="text-gray-400 font-bold line-through">
              {product.oldPrice}
            </span>
            {/* Price reduction */}
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
        {/* Displaying rating number */}
        <p className="text-gray-400 text-sm pt-1 font-bold">
          {product.rating}/5
        </p>
      </div>
    </div>
  );
};

const NewArrivals = () => {
  return (
    <main>
      <div className="w-full flex justify-center items-start mt-10 mb-1 max-w-screen-2xl m-auto">
        <div className="w-[90%] md:w-[80%]">
          {/* Header Section */}
          <div className="flex flex-col ">
            <div className="flex justify-center items-center mt-4">
              <h1 className="text-gray-800 font-integral font-extrabold text-lg sm:text-2xl md:text-5xl">
                NEW ARRIVALS
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
            <button className="text-black border-2 shadow-sm px-20 py-3 rounded-full font-satoshi text-[18px] hover:bg-black hover:text-white">
              View All
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewArrivals;
