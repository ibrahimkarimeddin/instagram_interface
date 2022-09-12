import {
    SearchIcon ,
    PlusCircleIcon,
   
  
}

from '@heroicons/react/outline'
import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {addChat} from '../Redux/reducer'
import {useRouter} from 'next/router'
function ChatPerson() {
    const router = useRouter()
       
        
    
    const dispatch = useDispatch()
    const [chats] = useState([
        {id:1 , name:'ibrahim' ,image:'/ibrahim.png',lastactive:'now'},
        {id:2,  name:'suliman' ,image:'/suliman.png',lastactive:'2day'},
        {id:3,  name:'mhmad' ,image:'/mhmad.png',lastactive:'20min'},
        {id:4 , name:'ibrahim' ,image:'/ibrahim.png',lastactive:'now'},
        
       
       ])
const add = function(person){
     dispatch(addChat(person))
        if(window.innerWidth < 767){
            router.push('/chatmid')
        }
       
      }
  return (
    <div className='h-full flex flex-col md:overflow-y-auto   scroll  border-r-2'>
        <div className='  flex justify-between border-b-2 border-gray-300 p-3'>
            <p className='w-32  text-center font-bold  mt-3'>Ibrahim Karim Eddin </p>
            <p className='text-xl'><PlusCircleIcon className='navBtn mt-3 mr-3 block'/></p>
        </div>
        {chats.map(function(person){
            return(
                <div key={person.id} className='flex items-center p-2 cursor-pointer mb-2' onClick={()=> add(person)}>
                    <img src={person.image} alt='' className='h-16 w-16 rounded-full p-2 '/>
                    <div>
                         <p>{person.name}</p>
                         <p className='text-gray-400 text-sm'>{person.lastactive}</p>

                    </div>
                </div>
            )
        })}

    </div>
  )
}

export default ChatPerson