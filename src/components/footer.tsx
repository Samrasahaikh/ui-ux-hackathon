import React from 'react';
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import { VscTwitter } from 'react-icons/vsc';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-[#F0F0F0] text-black py-12">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-evenly items-center">
          
          {/* Left Section: Logos and Description */}
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 ">
            <h1 className="font-integral font-extrabold text-3xl mb-4">SHOP.CO</h1>
            <p className="text-[18px] text-center md:text-left mb-4 md:max-w-xs">
              We have clothes that suit your style and which you’re proud to wear. From women to men.
            </p>
            <div className="flex space-x-4">
              <VscTwitter  className="text-2xl cursor-pointer hover:bg-black hover:text-white" />
              <FaFacebook className="text-2xl cursor-pointer hover:bg-black hover:text-white" />
              <FaInstagram className="text-2xl cursor-pointer hover:bg-black hover:text-white" />
              <FaGithub className="text-2xl cursor-pointer hover:bg-black hover:text-white" />
            </div>
          </div>

          {/* Center Section: Links */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 font-satoshi">
            <div className="text-left">
              <h3 className="font-bold text-lg mb-2">COMPANY</h3>
              <ul>
                <li><a href="#" className="text-gray-400 hover:text-black">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-black">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-black">Works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-black">Career</a></li>
              </ul>
            </div>
            <div className="text-left">
              <h3 className="font-bold text-lg mb-2">HELP</h3>
              <ul>
                <li><a href="#" className="text-gray-400 hover:text-black">Customer Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-black">Delivery Details</a></li>
                <li><a href="#" className="text-gray-400 hover:text-black">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-black">Privacy Policy</a></li>
              </ul>
            </div>

            <div className="text-left">
              <h3 className="font-bold text-lg mb-2">FAQ</h3>
              <ul>
                <li><a href="#" className="text-gray-400 hover:text-black">Account</a></li>
                <li><a href="#" className="text-gray-400 hover:text-black">Manage Deliveries</a></li>
                <li><a href="#" className="text-gray-400 hover:text-black">Orders</a></li>
                <li><a href="#" className="text-gray-400 hover:text-black">Payments</a></li>
              </ul>
            </div>

            <div className="text-left">
              <h3 className="font-bold text-lg mb-2">RESOURCES</h3>
              <ul>
                <li><a href="#" className="text-gray-400 hover:text-black">Free eBooks</a></li>
                <li><a href="#" className="text-gray-400 hover:text-black">Development Tutorials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-black">How-to Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-black">YouTube Playlist</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright and Images */}
        <div className="flex justify-between items-center mt-8 text-gray-500 border-t-2 pt-4">
          {/* Text Section */}
          <div className="flex justify-start w-1/2">
            <p>&copy; {new Date().getFullYear()} SHOP.CO. All Rights Reserved.</p>
          </div>

          {/* Image Section */}
          <div className="flex space-x-4 w-1/2 justify-end">
            <Image src="/img1.png" alt="logo" width={100} height={100} />
            <Image src="/img2.png" alt="logo" width={100} height={100} />
            <Image src="/img3.png" alt="logo" width={100} height={100} />
            <Image src="/img4.png" alt="logo" width={100} height={100} />
            <Image src="/img5.png" alt="logo" width={100} height={100} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
