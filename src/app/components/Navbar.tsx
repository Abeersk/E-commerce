import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { IoSearch } from 'react-icons/io5'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { TbTruckDelivery } from 'react-icons/tb'
import  Link  from 'next/link'

function Navbar() {
  return (
    <div>





<header className='flex text-slate-100 p-3 items-center justify-center  gap-2 text-xl bg-indigo-950' >              <TbTruckDelivery />
 Free delivery on all orders over £50 with code easter checkout</header>


<nav className='flex justify-between mt-6'>
<h1 className="text-[#22202E] text-2xl pl-7">
        <Link href="/">
          Avion
        </Link>
      </h1>

      {/* Navbar links */}
      <ul className="flex justify-center gap-8 items-center pr-6">
        <li>
          <Link href="/all-products">
            All products
          </Link>
        </li>
        <li>
          <Link href="/">
            ant pots
          </Link>
        </li>
        <li>
          <Link href="/">
    Ceramics
          </Link>
        </li>
        <li>
          <Link href="/">
Tables
          </Link>
        </li>
        <li>
          <Link href="/">
Chairs
          </Link>
        </li>
        <li>
          <Link href="/">
    Crockery
          </Link>
        </li>
        <li>
          <Link href="/">
        Tableware
          </Link>
        </li>
      </ul>




<span className="flex text-xl pt-1 gap-3 items-center pr-4">
<Link href='/shopping-baskets'>
    <MdOutlineShoppingCart  />
</Link>
    <CgProfile />
</span>

</nav>
















    </div>
  )
}

export default Navbar