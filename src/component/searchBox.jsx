import Image from 'next/image'
import React from 'react'

const SearchBox = () => {
  return (
    <div className=' w-full absolute top-16 left-0 border-t border-solid border-[rgba(227,227,227,1)] border-b '>
      <section className="w-full bg-white h-11 flex items-center justify-center">
        <div className="justify-between p-[0_40px] max-w-350 w-full flex "> 
          <form className="block w-full ">
            <label>
              <span className="shadow-none border-0 text-[#212529] bg-white text-base m-0 p-0 w-full min-w-0 font-normal text-start items-stretch relative truncate outline-0 inline-flex flex-row flex-nowrap align-middle rounded-md">
                <span className="flex items-center w-full! border-0! transition-[all_0s] !important bg-transparent! shadow-none py-1.5 text-inherit outline-0 whitespace-nowrap flex-row flex-nowrap">
                  <Image
                  width={20}
                  height={20}
                  src="./search-black.svg"
                  alt='search'
                  />
                  <input type="text" placeholder='search for a movie,tv show, person...' className="w-full h-11 border-0! outline-0 italic text-[100%] text-[#acacac] indent-0 pl-7.5 pr-0 py-1.5  px-3 inherit flex-1 relative z-1 truncate appearance-none margin-0 "/>
                  <span className="w-aut0 py-1.5 px-1.5 outline-0 flex-none self-center items-center cursor-pointer opacity-5 hidden! border-0 border-solid border-[#efefef] 
                  "></span>
                </span>
              </span>
            </label>

           
          </form>
        </div>
      </section>
   
  
     </div>     
    
  )
}

export default SearchBox