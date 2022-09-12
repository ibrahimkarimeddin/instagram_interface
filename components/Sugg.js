import React, { useState } from 'react'

function sugg() {
    const [sugg]= useState([
        {id:1, name:'jawad' , company:'computer sen',img:'/jawad.png'},
        {id:2, name:"read", company:'computer sen',img:'/read.png'},
        {id:3, name:'goerge', company:'computer sen',img:'/george.png'}] )
  return (
    <div className='ml-10 mt-4 '>
        <div>
            <h3 className='text-sm font-bold text-gray-400 '>Suggestion for You </h3>
        </div>
        
        {sugg.map(function(e){
        return(

            <div key={e.id} className='flex mt-3 items-center justify-between'>
                <img className='w-10 h-10 rounded-full border p-[2px]' alt='' src={e.img}/>
                <div className='flex-1 ml-4'>
                   <h2  className='font-semibold text-sm '>
                        {e.name}
                   </h2>
                   <h3  className='text-xs flex justify-between'>
                    <span> Work At :{e.company}</span> <span className='text-blue-400 text-sm font-semibold  cursor-pointer'>Add</span>

                   </h3>
                </div>
            </div>
        )
    })}</div>
  )
}

export default sugg