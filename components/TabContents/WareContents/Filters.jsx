import React from 'react'

const Filters = ({handleSearchChange, value}) => {
  return (
    <div>
        <input onChange={handleSearchChange} type='text' placeholder='Search...' value={value}/>
    </div>
  )
}

export default Filters