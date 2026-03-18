import React from 'react'

const Filters = ({ handleSearchChange, value }) => {
  return (
    <div>
      <input
        className='border border-white/20 px-2 py-1 rounded-md w-full focus:outline-none'
        onChange={handleSearchChange} type='text' placeholder='Search...' value={value} />
    </div>
  )
}

export default Filters