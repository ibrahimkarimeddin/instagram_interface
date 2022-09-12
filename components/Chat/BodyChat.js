import React , {useState} from 'react'
import ChatPerson from './ChatPerson'
import {
  PaperAirplaneIcon,
  PlusCircleIcon ,
  EmojiHappyIcon
 
}
from '@heroicons/react/outline'
import {useSelector} from 'react-redux' ;

function BodyChat() {
  let array = useSelector( state => state.cart.a)

  return (
<main className='grid grid-cols-1     md:grid-cols-3 md:max-w-3xl xl:grid-cols-3 xl:max-w-5xl mx-auto border-2 border-gray-200 md:shadow-lg my-4   '>
    {/* section */}
    <section className='md:col-span-1   h-[82vh]'>
        <ChatPerson />
    </section>


    {/* section */}
    <section className='hidden  md:inline-grid  md:col-span-2  h-[82] relative'>
        {array.length ===0 ?
        //  
        <div className='absolute top-[50%] left-[50%] transform  translate-x-[-50%] translate-y-[-50%]  w-80 h-80 flex flex-col items-center'>
              <PaperAirplaneIcon className='w-32 h-32 transform rotate-[70deg] border-4 p-3 border-black rounded-full  opacity-90 mt-9'/>
              <div className='text-center mt-3'>
                 <p>
                    Your Messages
                   
                 </p> 
                 <p className='text-gray-400 text-sm mt-3'>
                    Send private photos and messages to a friend or group.
                 </p>
              </div>
        </div>:
        // no body chat 
        <div className='h-full  flex flex-col'>
          <div className='  flex justify-between px-7 border-b-2 border-gray-300 p-3 '>
            <div className='flex item-center mt-2 justify-center  '>
               <img src={array[0].image} alt='' className='w-7 h-7 rounded-full'/>
               <p className='w-32  text-center font-bold '>{array[0].name} </p>
            </div>            
            <p className='text-xl'><PlusCircleIcon className='navBtn mt-3 mr-3 block'/></p>
          </div>
          <div className='h-full '> 
            <div className='h-[85%] '>

            </div>
            <div className='h-[15%]  flex items-center justify-center'>
              <div className='w-[100%] text-center relative '>
                 <input type='text' className='w-[70%] border-[2px] border-gray-200 h-10 rounded-[10px] pl-10 p-1' placeholder='Send Masseg' />
                 <EmojiHappyIcon className='w-8 h-8 absolute top-[9%] left-[15.5%] cursor-pointer  pt-1'/>
              </div>

            </div>

          </div>
        </div>
        }
    </section>

</main>
  )
}

export default BodyChat