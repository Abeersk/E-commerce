import React from 'react'

const Email = () => {
  return (
    <div>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
      Join the club and get the benefits
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
      Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
      </p>
    </div>
    <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
    
      <div className="relative flex-grow w-full ml-60">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder='your@email.com'
           className="w-[500px] bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-2 leading-8 transition-colors duration-200 ease-in-out"
    />
      </div>
      <button className="text-white text-center- bg-indigo-500 border-0 py-2 px-8 focus:outline-none  hover:bg-indigo-600 rounded text-[12px]">
        Sign-up 
      </button>
    </div>
  </div>
</section>



    </div>
  )
}

export default Email