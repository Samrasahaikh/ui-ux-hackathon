import React from 'react'
import { TfiEmail } from 'react-icons/tfi'

const LatestOffer = () => {
  return (

    <div className='flex flex-col md:flex-row items-center bg-primary md:w-[1240px] w-full h-auto top-[3781px] left-[100px] rounded-xl justify-between pt-[36px] pr-[64px] pb-[36px] pl-[64px] max-w-screen-2xl m-0 mt-10'>
      {/* Heading */}
      <h1 className='font-integral font-extrabold text-5xl leading-[45px] text-white text-start md:text-left md:w-1/2'>
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </h1>

      {/* Input Button */}
      <div className='flex flex-col md:flex-col justify-between items-center md:w-1/2 mt-4 md:mt-0'>
        <button className='flex justify-center items-center gap-2 px-20 rounded-full py-4 bg-white text-gray-400 mb-4 md:mb-0 '>
          <TfiEmail />
          <input
            type="text"
            placeholder='Enter Your Email Address'
            className='outline-none'
          />
        </button>

        {/* Subscription Button */}
        <button className='justify-center items-center gap-2 px-20 md:w-[65%] w-full rounded-full py-4 bg-white text-black cursor-pointer md:mt-6 '>
          Subscribe to Newsletter
        </button>
      </div>
    </div>
  )
}

export default LatestOffer
