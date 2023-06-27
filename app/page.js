import React from 'react'
import useMovies from '@/components/ useMovies'
import MovieCard from '@/components/movieCard';
export default async function Home() {
  const { getMovies } = useMovies();
  let movies = await getMovies();
  
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
      <main className=' w-screen flex flex-col min-h-[calc(100vh-80px)]  bg-gray-100 '>
        {/* <section className=' h-32 bg-blue-300'>filter</section> */}

        <ul className='flex flex-wrap md:justify-start gap-6 justify-center items-center p-9 max-w-[1320px] mx-auto'>

          {movies.map(movie => (
            <MovieCard
              key={movie.id}
              isForAdults={movie.adult}
              title = {movie.title}
              votes = {movie.vote_average}
              bgImg = {movie.backdrop_path}
            />
          ))}


        </ul>
      </main>
    </React.Fragment> 

  )
}
