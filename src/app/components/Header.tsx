import Link from "next/link"
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";


const Header = () => {
  return (
    < >
    
    
    
   <header className="max-w-[1440px] h-[132px] flex flex-col items-center FFFFFF px-10 lg:w-full mx-auto">
    
    
    
    <div className="border-b-[0.5px] border-[#0000004f] h-1/2 w-full mx-auto flex justify-between items-center">
<div className="text-left size-xl">

    <IoSearch  />
</div>

<Link href='/' className="text-[#22202E] text-2xl font-semibold">Avion</Link>


<div className="flex text-xl gap-3">
<Link href='/shopping-baskets'>
    <MdOutlineShoppingCart  />
</Link>
   
   <Link href='#email'>
   
    <CgProfile />
   </Link>
</div>

    </div>
    

    <nav className="flex w-[675px] justify-between items-center h-1/2 text-[#726E8D]">
    <Link href="/shopping-baskets" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Plant pots</Link>
    <Link href="/product-list" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Ceramics</Link>
    <Link href="/product-list " className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Tables</Link>
    <Link href="#listings2" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Chairs</Link>
    <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Crockery</Link>
    <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Tableware</Link>
    <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Cutlery</Link>
</nav>

    
    
    </header> 
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Header


