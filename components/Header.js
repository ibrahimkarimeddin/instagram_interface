import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
    SearchIcon ,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon
}
from '@heroicons/react/outline'
import {HomeIcon} from '@heroicons/react/solid'
function Header() {
  return (
    <div className='shadow-sm border-b bg-white top-0 z-50 p-3 sticky px-10'>
        
        <div className='flex justify-between  max-w-6xl lg:justify-around mx-3 lg:mx-auto '>
           {/* <Left/> */}
          <div className='relative w-28 cursor-pointer hidden lg:inline-grid mt-3 '>
             <Image src='/insta.png' alt=''  layout='fill' objectFit='contain'/>

         </div>
         <div className='relative w-10 h-10 flex-shrink-0 cursor-pointer lg:hidden  mt-3'>
             <Image src='/1/1.jpg' alt=''  layout='fill' objectFit='contain'/>

         </div>
           {/* {/ <Middle/> } */}
          <div className='max-w-sm h-7 mb-5'>
                <div className='relative  p-3 rounded-md '>
                    <div className='absolute pl-3 flex inset-y-0 items-center  pointer-events-none'>
                            <SearchIcon className='h-5 w-5 text-gray-500 ' />
                    </div>
                    <input type='text' placeholder='Search' className=' h-9 bg-gray-200 block focus:ring-black w-full pl-10 sm:text-sm border-gray-300 focus:border-black rounded-md pb-0' />
                </div>
          </div>
           {/* { <Right/> /} */}
          <div className='flex items-center justify-end space-x-4'>
              <Link href='/'><a><HomeIcon className='navBtn'/></a></Link>
              <MenuIcon className='h-6 md:hidden cursor-pointer '/>
              <Link href='/chat'>
                <a>
                  <div className='navBtn relative'>
                    <PaperAirplaneIcon className='navBtn rotate-45'/> 
                      <div className='absolute -top-1 -right-2 bg-red-500 rounded-full flex items-center justify-center animate-pulse w-5 h-5 text-xs text-white '>4</div>
                  </div>
                </a>
              </Link>
              
              <HeartIcon className='navBtn'/>  
              <UserGroupIcon className='navBtn'/> 
              <PlusCircleIcon className='navBtn'/>  
              <img src='/me.jpg' alt='' className='h-10 w-10 rounded-full cursor-pointer' />
          </div>

        </div>
       
    </div>
  )
}

export default Header