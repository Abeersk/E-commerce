import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

import hero from '@/public/hero.jpeg';
import features1 from '@/public/features1.jpeg';
import features2 from '@/public/features2.jpeg';
import pic2 from '@/public/pic2.jpeg';
import allproducts from '@/public/all-products.jpg';

const products = [
  { image: hero, title: 'The Dandy Chair', price: '£250' },
  { image: features1, title: 'Shooting Stars', price: '£155' },
  { image: features2, title: 'The Silky Vase', price: '£125' },
  { image: pic2, title: 'The Lucy Lamp', price: '£399' },
];

const Listings = () => {
  return (
    <div>
      <Header />

      {/* Full-width image with reduced height */}
      <div className="w-full h-64 relative">
        <Image
          src={allproducts}
          alt="All Products"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />

        <h1 className='absolute left-12 font-serif bottom-10 text-4xl  text-white'>Allproducts</h1>
      </div>

      {[...Array(3)].map((_, index) => (
        <section className="text-gray-600 body-font mb-8 m-12" key={index}>
          <div className="flex flex-wrap -m-4">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="lg:w-1/4 md:w-1/2 sm:w-full p-4 w-full group"
              >
                {/* Product container with hover effect */}
                <div className="rounded-lg bg-white shadow group-hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="relative h-80">
                    <Image
                      src={product.image}
                      alt={product.title}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center group-hover:text-gray-700 transition-colors duration-300">
                    <h2 className="text-gray-900 title-font text-lg font-medium group-hover:font-bold">
                      {product.title}
                    </h2>
                    <p className="mt-1">{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
      <Footer />
    </div>
  );
};

export default Listings;
