import React from 'react'
import FlashCard from './FlashCard'

const FlashDeals = () => {
  return (
    <div className='flash my-5'>
        <div className="container-fluid d-flex align-items-center">
            <i className="fa fa-bolt my-auto me-1 text-danger"></i>
            <h5 className='my-auto'>Flash Deals</h5>
        </div>
        <FlashCard/>
    </div>
  )
}

export default FlashDeals