import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-30 w-full border-b border-gray-300 backdrop-blur-lg'>
        <div className="w-[1300px] m-auto flex justify-between items-center py-4">
            <Link to={'/'} className="w-[150px]">
                <img src="https://www.watch24.bg/templates/watch24/images/designer/de0bdb30c64278be5192f8c99e7bc3c0_logo_black.png" alt="" />
            </Link>
            <form className='flex items-center gap-2'>
                <input type="text" placeholder='Search...' className='w-[400px] backdrop-blur-lg bg-transparent border border-gray-300 rounded-md py-2 px-3' />
                <button className='bg-black text-white px-4 py-2 rounded-md'>Search</button>
            </form>
            <div className="flex items-center gap-2">
                <button className='bg-black text-white px-4 py-2 rounded-md'>My Favorites</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar