import React from 'react'

const TabPanel = ({ children }) => {
    return (
        <div className='flex justify-center items-center border border-red-400 '>
            {children}
        </div>
    )
}

export default TabPanel