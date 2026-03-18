import React from 'react'

const TabPanel = ({ children }) => {
    return (
        <div className='flex justify-center items-center bg-accent-900 p-4'>
            {children}
        </div>
    )
}

export default TabPanel