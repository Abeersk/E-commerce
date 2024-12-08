import React from 'react'
import Image from 'next/image'

import pic3 from '@/public/pic3.jpeg'; // Ensure this path is correct
    import features2 from '@/public/features2.jpeg'; // Ensure this path is correct
import pic2 from '@/public/pic2.jpeg'; // Ensure this pat
const Listings2 = () => {
  return (
    <div>


        





<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      {/* Adjusted Left Section with Single Larger Image */}
      <div className="lg:w-1/2 md:w-full sm:w-full w-full p-4">
        <div className="p-2">
          <a className="block relative h-80 md:h-96 rounded overflow-hidden">
            <Image
              src={pic3}
              alt="Hero Image"
              layout="fill"
              objectFit="cover"
              className="absolute"
            />
          </a>
          <div className="mt-4">
            <h2 className="text-gray-900 title-font text-lg font-medium">
              The Dandy Chair
            </h2>
            <p className="mt-1">£250</p>
          </div>
        </div>
      </div>

      {/* Right Section with 2 Images */}
      <div className="lg:w-1/4 md:w-1/2 sm:w-full w-full p-4">
        <a className="block relative h-96 rounded overflow-hidden">
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
      <div className="lg:w-1/4 md:w-1/2 sm:w-full w-full p-4">
        <a className="block relative h-96 rounded overflow-hidden">
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
  )
}

export default Listings2