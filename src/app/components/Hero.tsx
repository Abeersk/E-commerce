import React from 'react';
import Image from 'next/image';
import hero1 from '@/public/hero1.jpg'; // Importing the image correctly
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative">
      {/* Div with specific size, and image as background */}
      <div 
        className="relative w-full h-[80vh]" 
        style={{ backgroundImage: `url(${hero1.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* No overlay, just text and button on the right */}
        <div className="absolute inset-1 flex justify-end items-center">
          <div className="text-[#22202E] px-20 py-16 bg-[#FFFFFF] bg-opacity-90 rounded-md shadow-lg mr-20">
            {/* Text content */}
            <h1 className="text-2xl font-serif text-left mb-4">
              Luxury homeware for people
              <br />
              who love timeless design quality
            </h1>
            <p className="text-lg mb-16 text-[#5B5676]">
              Shop the new Spring 2022 collection today
            </p>
            {/* Button */}
            <div className="flex justify-start mt-4">
              <Link href="/all-products">
                <button className="bg-[#F9F9F9] group flex items-center text-[#2A254B] py-3 px-8 rounded-md shadow hover:bg-gray-100 transition duration-300">
                  View Collection
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
