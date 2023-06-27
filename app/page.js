import Image from 'next/image'
import React, { Fragment } from 'react'

export default function Home() {
  return (
    <React.Fragment>
      <header className=' w-screen flex flex-row bg-blue-500'>
        <nav className='w-full h-20 flex items-center justify-center'>
          <ul className='flex justify-evenly w-3/5 text-gray-100'>
            <li className=' cursor-pointer hover:text-gray-300'>Categories</li>
            <li className=' cursor-pointer hover:text-gray-300'>Years</li>
            <li className=' cursor-pointer hover:text-gray-300'>Type</li>
            <li className=' cursor-pointer hover:text-gray-300'>Random</li>
          </ul>
        </nav>
      </header >
      <main className=' w-screen flex flex-col min-h-[calc(100vh-80px)]  bg-gray-100'>
        <section className=' h-32 bg-blue-300'>filter</section>

        <ul className='grid grid-cols-2 gap-6'>
          <li className='flex flex-col bg-blue-100 h-96 w-72 m-4 rounded-2xl shadow-md'>
            <div className='flex justify-between items-center px-6 py-2' >
              <span className='flex gap-3'>

                 <Image src={'/like.svg'} width={20} height={20} alt='like icomn'/>

                puntuacion
              </span>

              <span>18+</span>
            </div>
            <div className=' h-full bg-slate-800'>

            </div>

            <div className='flex justify-center items-center'>
              <span>"title</span>
            </div>
          </li>
        </ul>
      </main>
    </React.Fragment>




    // "adult": false,
    // "backdrop_path": "/e2Jd0sYMCe6qvMbswGQbM0Mzxt0.jpg",
    // "genre_ids": [
    //   28,
    //   80,
    //   53
    // ],
    // "id": 385687,
    // "original_language": "en",
    // "original_title": "Fast X",
    // "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
    // "popularity": 5616.442,
    // "poster_path": "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
    // "release_date": "2023-05-17",
    // "title": "Fast X",
    // "video": false,
    // "vote_average": 7.3,
    // "vote_count": 2050
    // },



  )
}
