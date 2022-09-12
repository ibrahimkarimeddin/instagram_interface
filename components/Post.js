import React from 'react'
import {
    ChatIcon,
    BookmarkIcon,
    DotsCircleHorizontalIcon,
    HeartIcon,
    PaperAirplaneIcon,
    EmojiHappyIcon
 } 
from '@heroicons/react/outline'
function Post({description , imgpost , userimg , like,username}) {
  return (
    <div className='my-7 bg-white border rounded-sm shadow-sm'>
        {/* header */}
        <div className='flex items-center p-3 border-b-2 border-gray-300  '>
            <img src={userimg} alt='' className='rounded-full h-12 w-12 object-contain border-2 p-1 mr-3' />
            <p className='flex-1 font-bold'>{username}</p>
            <DotsCircleHorizontalIcon className='h-5'/>
        </div>
        {/* image  */}
        <img src={imgpost} alt='' className='w-full h-[350px]' />
        {/* button */}
        <div className='flex justify-between pt-4 px-3 '>
            
            <div className='flex space-x-4 '>
                <HeartIcon className='btn'/>
                <ChatIcon className='btn'/>
                <PaperAirplaneIcon className='btn'/>
            </div>
            <BookmarkIcon className='btn' />
            
        </div>       
        {/* decsription */}
        <p className='p-5 truncate'>

            <span className='font-bold mr-4'>
                {username}
            </span>
            {description}
        </p>
        {/* input */}
        <form className='flex items-center p-4 border-t-2 border-gray-200'>
            <EmojiHappyIcon className='h-7' />
            <input type={`text`} placeholder='Add Comment ..' className='border-none outline-none flex-1 focus:ring-0 p-1 ml-1 ' />
            <button className='font-semibold text-blue-400' >Post</button>
        </form>






    </div>
  )
}

export default Post