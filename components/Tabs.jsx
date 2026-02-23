"use client";

import React, { useState } from 'react'
import TabPanel from './TabPanel';

const tabData = [
    { title: "Wares", content: <div>Wares content here</div> },
    { title: "Guides", content: <div>Guides content here</div> },
    { title: "About", content: <div>About content here</div> },
];

const Tabs = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0)
    return (
        <>
            <div className='flex justify-center border gap-10 p-2'>
                {
                    tabData.map((tab, index) => (
                        <div key={index}>
                            <button onClick={() => {
                                setActiveTabIndex(index)
                            }} className={`${activeTabIndex === index ? 'border' : ''}`}>
                                {tab.title}
                            </button>
                        </div>
                    ))
                }
            </div>
            <div>
                {
                    tabData.map((tab, index) => (
                        activeTabIndex === index ? (
                            <TabPanel key={index}>
                                {tab.content}
                            </TabPanel>
                        ) : null
                    ))
                }
            </div>
        </>
    )
}

export default Tabs