import React from 'react'
import Link from 'next/link'; 
import Image from 'next/image';
import { Bell, Menu, Plus } from 'lucide-react';


const NavBar = () => {
  return (
     <div className='w-full items-center fixed top-0 left-0  bg-[#0d253f] h-16 z-50 max-w-[100vw] transition'>
     <div className="max-w-350 w-full flex justify-center items-center">
        <div className='max-w-350 w-full h-16 flex justify-between px-10 items-center'>
         <div className=" hidden justify-start flex-nowrap items-center overflow-visible  md:flex">
      <Link href="/">
        <Image
        width={154}
        height={20} 
        src="./yegyevevye.svg"
        alt="Logo"
        className='mr-4'
       />
      </Link>

      <ul className='flex flex-nowrap items-stretch text-base font-semibold flex-row py-2 text-white'>
        <li><Link href="/movie" className='px-4'>Movies</Link></li>
        <li><Link href="/tv" className='px-4'>TV Shows</Link></li>
        <li><Link href="/person" className='px-4'>People</Link></li>
        <li><Link href="/more" className='px-4'>More</Link></li>
       </ul>
    </div>
       <div className ="block  md:hidden text-white">
         <Menu size={22.40}/>
       </div>
    <Link href="/"> 
      <Image
        width={55}
        height={39.64}

        src="./blue_square_2.svg"
        alt="Logo"
        className='block md:hidden'
       />   
    </Link>   
    <div className="justify-end flex flex-nowrap items-center ">
     <ul className="justify-end flex flex-nowrap items-center">
        <li className="ml-7.5 items-center hidden md:flex"><Link href="/" className='h-full inline-flex items-center text-white font-semibold'><Plus strokeWidth={4} size={22.4}/></Link></li>
        <li className="ml-7.5 py-1 items-center content-center hidden md:flex"><div className="flex justify-center items-center w-7 h-6.5 border border-white rounded-[3px] py-0.75 px-1.25 transition text-white font-semibold text-[14.4px] uppercase bg-transparent hover:bg-white hover:text-[#0d253f] cursor-pointer">en</div></li>
        <li className="ml-7.5 relative top-0 left-0 flex items-center">
        <Link href="/" className='h-full inline-flex items-center text-white font-semibold'><Bell size={22.4}/></Link>
         <div className="absolute -right-1.25 w-3.75  h-3.75 rounded-full z-0 justify-center items-center bg-red-500 -top-1 font-bold">
         <div className=" flex items-center justify-center text-[9.6px] font-semibold text-white">7</div>
         <div className="flex items-center padding"></div>

        </div>
        </li>
        <li className="ml-7.5 flex items-center ">
          <Link className='block py-1 items-center content-center font-semibold text-white ' href="/"><span className="min-w-8 w-8 min-h-8 h-8 text-center uppercase rounded-[50%] text-white text-[14.4px] font-semibold flex items-center justify-center bg-[rgba(210,144,1,1)]">o</span></Link>
        </li>
       <li className="ml-7.5 flex items-center"> 
          <Link className='text-[20.8px] h-full inline-flex items-center' href="/"><span className="bg-transparent text[29.12px] relative top-0 left-0 inline-flex min-w-[29.12px] w-[29.12px] min-h-[29.12px] h-[29.12px] leading-[inherit] bg-center bg-no-repeat text-inherit items-center justify-center ">
            <Image
            width={29.11}
            height={29.11}
           src="/search.svg"
            alt="search"
            />
            </span></Link>
       </li>

      


     </ul>
    </div>
    </div>
    </div>
</div>

  )
};
export default NavBar;