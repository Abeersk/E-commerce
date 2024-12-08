import React from 'react'
import { CiCircleCheck } from 'react-icons/ci'
import { MdOutlinePriceChange } from 'react-icons/md'
import { PiPlantLight } from 'react-icons/pi'
import { TbTruckDelivery } from 'react-icons/tb'

const Features = () => {
  return (
    <div>



<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
        Raw Denim Heirloom Man Braid
      </h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
        Blue bottle crucifix vinyl post-ironic four dollar toast vegan
        taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
        pug.
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
      <TbTruckDelivery />
        <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
        Next day as standard
        </h2>
        <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
         <p>Order before 3pm and get your order
         the next day as standard</p>
        </nav>
      </div>
      <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
      <CiCircleCheck />
        <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
        Made by true artisans
        </h2>
        <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
         

         <p>Handmade crafted goods made with
         real passion and craftmanship</p>
        </nav>
      </div>
      <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
      <MdOutlinePriceChange />
        <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
        Unbeatable prices
        </h2>
        <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
          <p>
          For our materials and quality you won’t find better prices anywhere
          </p>
        </nav>
      </div>
      <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
      <PiPlantLight />
        <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
        Recycled packaging
        </h2>
        <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
          <p>
          We use 100% recycled packaging to ensure our footprint is manageable  
          </p>
        </nav>
      </div>
    </div>
    <button className="flex mx-auto mt-16 text-white bg-slate-500 border-0 py-2 px-8 focus:outline-none  rounded text-lg">
    View collection
    </button>
  </div>
</section>


    </div>
  )
}

export default Features