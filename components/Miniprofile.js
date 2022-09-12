import React from 'react'

function Miniprofile() {
  return (
    <div className='flex items-center justify-between '>
        <img className='rounded-full border p-[2px] w-16 h-16' src='/ibrahim.png' alt='' />
        <div className='mx-4 flex-1'>
            <h2 className='font-bold '>
              Ibrahim Karim 
            </h2>
            <h3 className='text-sm text-gray-400 '>
                Welcome to Instagram
            </h3>

        </div>
        <button className='text-blue-400 text-sm font-semibold' >Sign Out</button>
    </div>
  )
}

export default Miniprofile