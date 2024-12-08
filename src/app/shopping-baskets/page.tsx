import React from 'react'

const page = () => {
  return (
    <div>


<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      {/* First section: Left side image, Right side text */}
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
            src="https://dummyimage.com/200x200"
          />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">
              Holden Caulfield
            </h2>
            <h3 className="text-gray-500 mb-3">UI Developer</h3>
            <p className="mb-4">
              DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.
            </p>
          </div>
        </div>
      </div>
      {/* Right side text (£85) */}
      <div className="p-4 lg:w-1/2 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">£85</h1>
        </div>
      </div>
    </div>

    <div className="flex flex-wrap -m-4 mt-12">
      {/* Second section: Left side image, Right side text */}
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
            src="https://dummyimage.com/200x200"
          />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">
              Alper Kamu
            </h2>
            <h3 className="text-gray-500 mb-3">Designer</h3>
            <p className="mb-4">
              DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.
            </p>
          </div>
        </div>
      </div>
      {/* Right side text (£85) */}
      <div className="p-4 lg:w-1/2 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">£85</h1>
        </div>
      </div>
    </div>
  </div>
</section>







    </div>
  )
}

export default page