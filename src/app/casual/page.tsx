import React from "react";
import BreadcrumbProduct from '@/components/product-page/BreadcrumbProduct'
import Filter from "@/app/casual/filter"; 
import NewArrivalsWithFilter from "@/app/casual/product"; 


const MainPage = () => {
  return (
<div >
<BreadcrumbProduct />
    <main className="w-full flex justify-center items-center md:p-10 mt-10 mb-1 max-w-screen-2xl mx-auto">
      {/* Left Section - Filter */}
      <div className="w-[30%] hidden md:block">
        <Filter />
      </div>

      {/* Right Section - New Arrivals */}
      <div className="w-full md:w-full">
        <NewArrivalsWithFilter />
      </div>
    </main>
    </div>
  );
};

export default MainPage;
