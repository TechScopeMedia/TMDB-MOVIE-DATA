import Link from 'next/link'
import React from 'react'

const Backdrops
 = () => {
  return (
   <section className="h-112.5 max-h-112.5 max-w-350 min-w-auto min-h-75 bg-[rgba (0,0,0.2)] bg-cover bg-no-repeat text-white box-border w-full flex justify-center flex-wrap items-start content-start border-0 border-solid border-[#efefef] ">
    <div className='h-112.5 w-full max-w-350 absolute z-1 flex flex-wrap lg:flex-nowrap justify-between overflow-hidden border-box border-0 border-solid border-[#efefef] '>

      <div className="lg:w-full w-1/2 bg-cover bg-no-repeat box-border  border-0  border-solid border-[#efefef] display-block" style={{
        backgroundImage: `image-set(
        url("/bg-1.webp") 1x,
        url("/bg1.webp") 2x
      )`
      }}>
      </div>
      
      <div className="lg:w-full w-1/2 bg-cover bg-no-repeat box-border  border-0  border-solid border-[#efefef] display-block" style={{
        backgroundImage: `image-set(
        url("/bg-2.webp") 1x,
        url("/bg2.webp") 2x
      )`
      }}>
      </div>
      
      <div className="lg:w-full w-1/2 bg-cover bg-no-repeat box-border  border-0  border-solid border-[#efefef] display-block" style={{
        backgroundImage: `image-set(
        url("/bg-3.webp") 1x,
        url("/bg3.webp") 2x
      )`
      }}>
      </div>
      
      <div className="lg:w-full w-1/2 bg-cover bg-no-repeat box-border  border-0  border-solid border-[#efefef] display-block" style={{
        backgroundImage: `image-set(
        url("/bg-4.webp") 1x,
        url("/bg4.webp") 2x
      )`
      }}>
      </div>
      
      <div className="lg:w-full w-1/2 bg-cover bg-no-repeat box-border  border-0  border-solid border-[#efefef] display-block" style={{
        backgroundImage: `image-set(
        url("/bg-5.webp") 1x,
        url("/bg5.webp") 2x
      )`
      }}>
      </div>
      
      <div className="block lg:hidden lg:w-full w-1/2 bg-cover bg-no-repeat box-border  border-0  border-solid border-[#efefef] display-block" style={{
        backgroundImage: `image-set(
        url("/bg-6.webp") 1x,
        url("/bg6.webp") 2x
      )`
      }}>
      </div>
    
    </div>
    <div className="bg-[rgba(0,0,0,0.7)] relative z-2 h-full flex content-center items-center justify-center w-screen min-w-full flex-wrap box-border border-0 border-solid  border-[#efefef]">
      <div className="w-full flex items-start content-center min-w-full box-border border-0 border-solid border-[#efefef] ">
      <div className="flex-col flex-wrap max-w-350 w-full py-7.5 px-10 flexitems-start content-start box-border border-0 border-solid border-[#efefef] ">
        <div>
          <div className="bg-linear-to-br from-[#b18bf5] to-[#efafbb] bg-size-[100%] bg-clip-text text-transparent box-border border-0 border-solid border-[#efefef]">
            <h2 className="font-['Barlow'] font-bold text-[60px] m-0 p-0 box-border leading-none border-0 border-solid border-[#efefef] ">
               That&apos;s a <br/> Wrap 2025</h2>
          </div>
        </div>
       <div className="mt-2.5 box-border border-0 border-solid border-[#efefef] ">
        <p className="text-[20px] mb-5 m-[0_0_16px] p-0 box-border border-0 border-solid border-[#efefef] block my-4 mx-0 [unicode-bidi:isolate]">The best (and worst) of the year from TMDB. </p>
        <h4 className="m-0 p-0  box-border leading-none font-[inherit] text-inherit border-0 border-solid border-[#efefef] ">
          <Link href="/" className='inline-flex items-center m-0 rounded-[30px] text-white border-2 border-solid border-white px-4 py-2 transition-all duration-100 ease-linear box-border bg-transparent no-underline   ring-pink-50'>Check it out</Link>
        <div className=" "></div>
      
        </h4>
       </div>
      </div>
      </div>
    </div>
    </section>
    
  )
}

export default Backdrops  