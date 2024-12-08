import React from 'react';
import Image from 'next/image';
import hero from '@/public/hero.jpeg'; // Ensure this path is correct
import features1 from '@/public/features1.jpeg'; // Ensure this path is correct
import features2 from '@/public/features2.jpeg'; // Ensure this path is correct
import pic2 from '@/public/pic2.jpeg'; // Ensure this path and filename are correct

const Listings = () => {
  return (
    <div>
      <section className="text-gray-600 body-font mb-8 ">
        <div className="container px-5 py-24 mx-auto">
      <h1 className='text-4xl  pl-7 pb-8 '>New ceramics </h1>
          <div className="flex flex-wrap -m-4">
            {/* Card 1 */}
            <div className="lg:w-1/4 md:w-1/2 sm:w-full p-4 w-full">
              <a className="block relative h-80 rounded overflow-hidden">
                <Image
                  src={hero}
                  alt="Hero Image"
                  layout="fill"
                  objectFit="cover" // Ensures the image fills the container
                  className="absolute"
                />
              </a>
              <div className="mt-4">
               
                <h2 className="text-gray-900 title-font text-lg font-medium">
                The Dandy chair
                </h2>
                <p className="mt-1">£250</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="lg:w-1/4 md:w-1/2 sm:w-full p-4 w-full">
              <a className="block relative h-80 rounded overflow-hidden">
                <Image
                  src={features1}
                  alt="Feature 1 Image"
                  layout="fill"
                  objectFit="cover"
                  className="absolute"
                />
              </a>
              <div className="mt-4">
             
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Shooting Stars
                </h2>
                <p className="mt-1">£155</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="lg:w-1/4 md:w-1/2 sm:w-full p-4 w-full">
              <a className="block relative h-80 rounded overflow-hidden">
                <Image
                  src={features2}
                  alt="Feature 2 Image"
                  layout="fill"
                  objectFit="cover"
                  className="absolute"
                />
              </a>
              <div className="mt-4">
                
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Silky Vase
                </h2>
                <p className="mt-1">£125</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="lg:w-1/4 md:w-1/2 sm:w-full p-4 w-full">
              <a className="block relative h-80 rounded overflow-hidden">
                <Image
                  src={pic2}
                  alt="Pic 2 Image"
                  layout="fill"
                  objectFit="cover"
                  className="absolute"
                />
              </a>
              <div className="mt-4">
                
                <h2 className="text-gray-900 title-font text-lg font-medium">
                
                The Lucy Lamp                
                </h2>
                <p className="mt-1">£399</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      


    </div>
  );
};

export default Listings;
