import React from "react";
import Image from "next/image";


const Hero = () => {
  return (
    <div className="relative flex flex-col-reverse sm:flex-row-reverse justify-between items-center w-full h-auto bg-[#F2F0F1] max-w-screen-2xl m-auto">
      {/* Text Section */}
      <div className="order-2 sm:order-1 w-full max-w-[600px] p-4 md:p-8 text-center sm:text-left sm:absolute sm:top-[100px] sm:left-[50px] lg:left-[100px]">
        <h1 className="text-5xl md:text-6xl text-left font-extrabold font-integral leading-[64px] text-primary">
          FIND CLOTHES THAT MATCH YOUR STYLE
        </h1>
        <p className="mt-4 text-[20px] md:text-base text-gray-600 text-left">
          Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
        </p>
        <button className="mt-6 bg-primary text-sm md:text-base text-white px-40 py-4 md:px-12 rounded-full hover:text-primary hover:bg-transparent border hover:border-primary transition">
          Shop Now
        </button>
        
        
        
        
        
        <div className="md:hidden flex flex-col w-full sm:w-[278px] md:w-[80%] h-auto mt-10">
  {/* First Line */}
  <div className="flex justify-between items-center w-full pb-4 px-10">
    
    {/* First Section */}
    <div className="flex flex-col border-r-2 items-center w-[160px] h-[48px] pr-4">
      <h1 className="font-satoshi font-bold text-[35px] leading-[32.4px] text-black">200+</h1>
      <p className="font-satoshi font-normal text-[18px] text-center leading-[22px] text-gray-600 mt-2">International Brands</p>
    </div>

    {/* Second Section */}
    <div className="flex flex-col items-center w-[160px] h-[48px] pl-4">
      <h1 className="font-satoshi font-bold text-[35px] leading-[32.4px] text-black">2,000+</h1>
      <p className="font-satoshi font-normal text-[18px] text-center leading-[22px] text-gray-600 mt-2">High-Quality Products</p>
    </div>
  </div>


  {/* Second Line */}
  <div className="flex justify-center items-center w-full mt-10">
    {/* Third Section */}
    <div className="flex flex-col items-center w-[160px] h-[48px]">
      <h1 className="font-satoshi font-bold text-[35px] leading-[32.4px] text-black">30,000+</h1>
      <p className="font-satoshi font-normal text-[18px] mt-2 leading-[22px] text-gray-600">Happy Customers</p>
    </div>
  </div>
</div>



      </div>

      {/* Hero Image */}
      <div className="order-1 sm:order-2 relative sm:w-1/2 sm:h-auto mt-[5%] ">
        <Image
          src="/hero3.webp"
          alt="hero image"
          width={400}
          height={500}
          className="w-[390px] sm:w-[600px] h-auto object-contain"
        />
      </div>

      {/* Vector Image 1 */}
      <div className="hidden sm:block absolute top-[130px] right-[120px]">
        <Image
          src="/Vector1.png"
          alt="vector"
          width={104}
          height={104}
          className="w-auto h-auto"
        />
      </div>

      {/* Vector Image 2 */}
      <div className="hidden sm:block absolute top-[330px] left-[750px]">
        <Image
          src="/vector2.png"
          alt="vector 2"
          width={56}
          height={56}
          className="w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
