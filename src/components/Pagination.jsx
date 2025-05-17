import React from 'react'

const Pagination = ({currentPage, totalPages, setCurrentPage, setTotalPages}) => {
  return (
    <div className="flex justify-center items-center gap-4 mt-10">
        <button onClick={()=> setCurrentPage(currentPage - 1)} disabled={currentPage === 1} className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:opacity-50">Previous</button>
        <span>Page {currentPage} of {totalPages} Pages</span>
        <button onClick={()=> setCurrentPage(currentPage + 1)} className="bg-blue-500 text-white px-4 py-2 rounded-md">Next</button>
    </div>
  )
}

export default Pagination