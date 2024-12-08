import React from 'react';
import Image from 'next/image';
import hero from '@/public/hero.jpeg'; // Importing the image correctly

const Hero = () => {
  return (
    <div>
      <section className="body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-[90%] mx-auto flex flex-wrap">
            <div id="hero" className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h1 className="text-2xl p-6 title-font font-medium mb-4">
              The furniture brand for the future, with timeless designs 
              </h1>
             
              <p className="leading-relaxed mb-4">
             
              </p>
             
              <div className="flex">
                <button className="flex bg-slate-500 p-10 border-0 py-2 px-6 rounded">View collection</button>
               
                <button className="rounded-full w-10 h-10 p-0 border-0 inline-flex items-center justify-center">
                 
                </button>
                
              </div>
            </div>
            {/* Using the imported `hero` variable here */}
            <Image
              alt="hero"
              src={hero}
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
