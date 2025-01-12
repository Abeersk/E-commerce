    import React from 'react'
    import Image from 'next/image'
    import feature3 from "@/public/feature3.png"
    import pic1 from '@/public/pic1.png'
    import Features from '../components/Features'
    import Footer from '../components/Footer'
import Features1 from '../components/Features1'
import Email from '../components/Email'
import { IoSearch } from 'react-icons/io5'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { TbTruckDelivery } from 'react-icons/tb'


    function page() {
    return (
        <div>

<header className='flex text-slate-100 p-3 items-center justify-center  gap-2 text-xl bg-indigo-950' >              <TbTruckDelivery />
 Free delivery on all orders over £50 with code easter checkout</header>

<nav className='flex justify-end gap-8 justify-between  '>

<h1 className="text-[#22202E] text-4xl font-semibold ">Avion</h1>
<div className='flex gap-8 pt-3 '>
    <ul className='flex gap-8 text-lg'>
    <li>About us</li>
    <li>Contact</li>
    <li>Blog</li>

    </ul>




<span className="flex text-xl pt-1 gap-3">
    <IoSearch  />
    <MdOutlineShoppingCart />
    <CgProfile />
</span>




</div>

</nav>






    <ul className='flex  justify-center gap-8 bg-slate-100 p-4 mt-4'>
            <li>All products</li>
            <li>Plant pots </li>
            <li> Ceramics</li>
            <li> Tables</li>
            <li> Chairs</li>
            <li>Crockery </li>
            <li>Tableware </li>
        </ul>


        <section className='flex justify-between m-14 '>


            <h1 className='text-justify text-3xl  ' > A brand built on the love of craftmanship,<br />
            quality and outstanding customer service</h1>

            <button className='bg-slate-100 p-6   '>  View our products</button>
        </section>

        <section className='flex justify-center gap-6  '>

            <div className='bg-indigo-950	h-[400px] w-[550px]'>
            <h1 className='px-10 text-bolder text-2xl pt-8 text-white'>It started with a small idea</h1>
            <p className='px-10 text-bolder pt-8 text-white '>A global brand with local beginnings, our story begain in a <br /> small studio in South London in early 2014</p>
            </div>

            <Image src={feature3} width={520} height={300} alt='' />


        </section>




        <div className='mt-8 flex'>

            <Image className='pb-8' src={pic1} height={720} width={700} alt=';' />

            <div className='items-start m-8 mx-9 p-8 '>

            <h1 className='text-xl font-normal	'>Our service isn't just personal, it's actually <br />
                hyper personally exquisite</h1>

            <br />
            <p className='text-slate-600'>


                When we started Avion, the idea was simple. Make high quality furniture <br />
                affordable and available for the mass market. <br />
                <br /> Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.





            </p>

            <button className='bg-slate-50    h-[56px] w-[150px]   mt-52'> Get in touch</button>
            </div> 
        </div>




    <Features/>
<Email/>    
    <Footer/>

        </div>
    )
    }

    export default page