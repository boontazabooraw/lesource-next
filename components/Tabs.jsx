"use client";

import React, { useState } from 'react'

const tabData = ['Wares', 'Guides', 'About']

const Tabs = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0)
    return (
        <div className='flex'>
            {
                tabData.map((tab, index) => (
                    <div key={index}>
                        <h1>
                            {tab}
                        </h1>
                    </div>
                ))
            }
        </div>
    )
}

export default Tabs