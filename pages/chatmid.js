import React from 'react'
import Link from 'next/link'
import {useSelector} from 'react-redux'
import {
    PaperAirplaneIcon,
    PlusCircleIcon ,
    EmojiHappyIcon,
    ArrowLeftIcon
   
  }
  from '@heroicons/react/outline'
function chatmid() {
    const array = useSelector(state => state.cart.a)
    
  return (
    <div className='h-screen  flex flex-col'>
    <div className='  flex justify-between px-7 border-b-2 border-gray-300 p-3 '>
      <div className='flex item-center mt-2 justify-center  '>
          <Link href='/chat' ><a className='mr-3'><ArrowLeftIcon className='navBtn block'/></a></Link>
         <img src={array[0]?.image} alt='' className='w-7 h-7 rounded-full'/>
         <p className='w-32  text-center font-bold '>{array[0]?.name} </p>
      </div>            
      <p className='text-xl'><PlusCircleIcon className='navBtn mt-3 mr-3 block'/></p>
    </div>
    <div className='h-full '> 
      <div className='h-[85%] '>

      </div>
      <div className='h-[15%]  flex items-center justify-center'>
        <div className='w-[100%] text-center relative '>
           <input type='text' className='w-[70%] border-[2px] border-gray-200 h-10 rounded-[10px] pl-10 p-1 ' placeholder='Send Masseg' />
           <EmojiHappyIcon className='w-8 h-8 absolute top-[9%] left-[15.5%] cursor-pointer  pt-1'/>
        </div>

      </div>

    </div>
  </div>
  )
}

export default chatmid