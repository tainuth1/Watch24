import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className='group w-full border rounded-lg overflow-hidden border-gray-300 cursor-pointer'>
        <div className="h-[340px] overflow-hidden relative">
            <button className='absolute z-10 top-2 right-2 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm border border-gray-500'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                </svg>
            </button>
            <img className='group-hover:scale-105 transition-all duration-150 w-full h-full object-cover' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
        </div>
        <div className="flex justify-between items-end p-3">
            <div className="">
                <h2 className='text-[16px] font-bold truncate'>{movie.original_title}</h2>
                <p className='text-[14px] text-gray-500'>{movie.release_date}</p>
            </div>
            <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellowgreen" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                {movie.vote_average.toFixed(1)}
            </div>
        </div>
    </Link>
  )
}

export default MovieCard