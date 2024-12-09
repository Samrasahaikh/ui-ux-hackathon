import React from "react";
import Filter from "@/app/casual/filter"; // Update the path as per your project structure
import NewArrivalsWithFilter from "@/app/casual/product"; // Update the path as per your project structure

const MainPage = () => {
  return (
    <main className="w-full flex justify-center items-start mt-10 mb-1 max-w-screen-2xl mx-auto">
      {/* Left Section - Filter */}
      <div className="w-[30%] hidden md:block">
        <Filter />
      </div>

      {/* Right Section - New Arrivals */}
      <div className="w-full md:w-[100%]">
        <NewArrivalsWithFilter />
      </div>
    </main>
  );
};

export default MainPage;
