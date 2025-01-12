import React from 'react';
import Image from 'next/image';
import hero from '@/public/hero.jpeg';
import features1 from '@/public/features1.jpeg';
import features2 from '@/public/features2.jpeg';
import pic2 from '@/public/pic2.jpeg';

const imageData = [
  {
    src: hero,
    alt: 'Hero Image',
    title: 'The Dandy Chair',
    price: '£250',
  },
  {
    src: features1,
    alt: 'Feature 1 Image',
    title: 'Shooting Stars',
    price: '£155',
  },
  {
    src: features2,
    alt: 'Feature 2 Image',
    title: 'The Silky Vase',
    price: '£125',
  },
  {
    src: pic2,
    alt: 'Pic 2 Image',
    title: 'The Lucy Lamp',
    price: '£399',
  },
];

const Listings = () => {
  return (
    <div>
      <section className="text-gray-600 body-font mb-8">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-4xl pl-7 pb-8">New Ceramics</h1>
          <div className="flex flex-wrap -m-4">
            {imageData.map((item, index) => (
              <div
                key={index}
                className="lg:w-1/4 md:w-1/2 sm:w-full p-4 w-full group"
              >
                {/* Box-like container with hover effect */}
                <div className="rounded-lg bg-white shadow group-hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="relative h-80">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center group-hover:text-gray-700 transition-colors duration-300">
                    <h2 className="text-gray-900 title-font text-lg font-medium group-hover:font-bold">
                      {item.title}
                    </h2>
                    <p className="mt-1">{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Listings;
  