import React from 'react'
import Miniprofile from './Miniprofile'
import Posts from './Posts'
import Stories from './Stories'
import Sugg from './Sugg'

function Feed() {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 md:max-w-2xl xl:grid-cols-3 xl:max-w-4xl mx-auto '>
        {/* section */}
        <section className='col-span-2'>
            <Stories />
            <Posts />
        </section>


        {/* section */}
        <section className='hidden md:col-span-1 xl:inline-grid'>
            <div className='fixed  top-24 ml-5'>
                <Miniprofile />
                <Sugg/>
            </div>
        </section>

    </main>
  )
}

export default Feed