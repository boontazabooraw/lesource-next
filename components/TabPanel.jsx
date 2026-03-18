import React from 'react'

const TabPanel = ({ children }) => {
    return (
        <div className='bg-deep-700 p-4 h-full grow'>
            {children}
        </div>
    )
}

export default TabPanel