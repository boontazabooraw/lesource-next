"use client";

import React, { useState } from 'react'
import TabPanel from './TabPanel';

const Tabs = ({ tabData }) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    return (
        <>
            <div className='flex justify-center border gap-10 p-2'>
                {
                    /* TAB GROUP (Wares, Guides, About) */

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
                    /* TAB CONTENT */

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