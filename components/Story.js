import React from 'react'

function Story({username , img}) {
  return (
    <div className=''>
      <img src={img} alt='' className='h-12 p-1 w-12  rounded-[50%]  border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transform transition-all ease-out duration-200'/>
      <p className='text-sm w-14 truncate text-center'>{username}</p>
    </div>
  )
}

export default Story