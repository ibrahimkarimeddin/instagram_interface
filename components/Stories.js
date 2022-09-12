import React, { useState } from 'react'
import Story from './Story'
function Stories() {
    const[story]=useState([
        {id:1 , name:'ibrahim' ,image:'/ibrahim.png',},
        {id:2,  name:'suliman' ,image:'/suliman.png',},
        {id:3,  name:'mhmad' ,image:'/mhmad.png',},
      
        
       
    ])
  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border-2 border-gray-200 rounded-sm overflow-x-scroll '>
        {story.map(function(s){
            return(
                <Story key={s.id}  img={s.image} username="Person"/>
            )
        })}
    </div>
  )
}

export default Stories