import React from 'react'
import './Pagination.css'

const Pagination = ({currentPage,totalPages,goToPage,goToPreviousPage,goToNextPage}) => {

    const pageNumbers = []
    for(let i=1; i<= totalPages; i++){
        pageNumbers.push(i)
    }
    
  return (
    <div className='pagination-container mb-5'>
        {/* Previous Button */}
        <button className='pagination-button' disabled={currentPage === 1} onClick={goToPreviousPage}>Previous</button>

        {/* Page Number */}
        {pageNumbers.map((pageNumber)=>(
            <button key={pageNumber} className={`pagination-button ${
                pageNumber === currentPage ? 'active-number' : ''
            }`}>{pageNumber}</button>
        ))}

        {/* Next Button */}
        <button className='pagination-button' disabled={currentPage === totalPages} onClick={goToNextPage}>Next</button>
    </div>
  )
}

export default Pagination