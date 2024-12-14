"use client";
import React, { useEffect } from "react";
import products from "@/utils/productData";
import Image from "next/image"; 
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";

// Utility function to display ratings
const renderRating = (rating: number) => {

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    } else if (rating > i - 1 && rating < i) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-gray-400" />);
    }
  }
  return stars;

  
};

const BrandPage = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1 second
      }, []);
  return (
    <div className="bg-gray-50 min-h-screen p-6 lg:p-12 max-w-screen-2xl m-auto">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"  data-aos="fade-down" >
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-lg  transform transition-transform duration-700 group-hover:scale-110"
          >
            {/* Product Image */}
            <Image
              src={product.image}
              alt={product.title}
              className="w-full h-60 object-cover rounded-t-lg "
            />
            <div className="p-4 space-y-2">
              {/* Product Title */}
              <h2 className="text-lg font-semibold">{product.title}</h2>
              
              {/* Product Price */}
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">{product.price}</span>
                {product.oldPrice && (
                  <span className="text-gray-500 line-through">
                    {product.oldPrice}
                  </span>
                )}
              </div>

              {/* Product Rating */}
              <div className="flex gap-1">{renderRating(product.rating)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandPage;
