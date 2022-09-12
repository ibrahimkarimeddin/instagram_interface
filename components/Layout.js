import Image from 'next/image'
import Header from './Header'
import Feed from './Feed'


export default function Layout(){
  return(
   <div className='h-screen bg-gray-50 overflow-y-auto'>
     
     <Feed/>
    <div className='h-[200px] '>
    
    </div>
     
   </div>

)
}