import React from 'react'
import Image from 'next/image'

const BrandLogo = () => {
  return (
    <div className="flex sm:justify-center md:justify-evenly items-center bg-black md:w-full md:h-[100px] sm:w-full sm:h-[146px] max-w-screen-2xl m-auto py-4">
      
      {/* Logo 1 */}
      <div className="flex justify-center items-center w-[33%] sm:w-[33%] p-2">
        <Image 
          src="/brand1.jpg"
          alt="brand logo"
          width={200}
          height={100}
          className="sm:w-[116.74px] sm:h-[23.25px]"
        />
      </div>

      {/* Logo 2 */}
      <div className="flex justify-center items-center w-[33%] sm:w-[33%] p-2">
        <Image 
          src="/brand2.png"
          alt="brand logo"
          width={200}
          height={200}
          className="w-[63.81px] h-[26.65px] "
        />
      </div>

      {/* Logo 3 */}
      <div className="flex justify-center items-center w-[33%] sm:w-[33%] p-2">
        <Image 
          src="/brand3.png"
          alt="brand logo"
          width={200}
          height={100}
          className="sm:w-[109.39px] sm:h-[25.24px]"
        />
      </div>

      {/* Logo 4 */}
      <div className="flex justify-center items-center w-[33%] sm:w-[33%] p-2">
        <Image 
          src="/brand4.png"
          alt="brand logo"
          width={200}
          height={150}
          className="sm:w-[127px] sm:h-[12px]"
        />
      </div>

      {/* Logo 5 */}
      <div className="flex justify-center items-center w-[33%] sm:w-[33%] p-2">
        <Image 
          src="/brand5.png"
          alt="brand logo"
          width={200}
          height={100}
          className="sm:w-[134.84px] sm:h-[21.75px]"
        />
      </div>
    </div>
  )
}

export default BrandLogo;
