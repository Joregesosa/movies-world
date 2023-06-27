
import React from 'react'
import Image from 'next/image'
const MovieCard = ({ isForAdults,
    title,
    votes,
    bgImg }) => {
    return (
        <li className='flex flex-col h-96 w-72  rounded-2xl shadow-md mx-auto  bg-slate-950 text-gray-300'>
            <div className='flex justify-between items-center px-6 py-2' >
                <span className='flex gap-3'>

                    <Image src={'/like.svg'} width={'20'} height={'20'} alt='like icomn' />

                    {votes}
                </span>

                {isForAdults && <span>18+</span>}
            </div>

            <div className=' h-full bg-slate-800'>
                <img src={'https://image.tmdb.org/t/p/w500/' + bgImg} 
                className=' w-full h-full object-cover'
                />
            </div>

            <div className='flex justify-center items-center'>
                <span>{title}</span>
            </div>
        </li>
    )
}

export default MovieCard