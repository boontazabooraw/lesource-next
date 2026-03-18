"use client";

import React, { useState } from 'react'
import TabPanel from './TabPanel';

const Tabs = ({ tabData }) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    return (
        <div className='flex flex-col flex-wrap min-h-screen'>
            <div className='flex justify-center'>
                {
                    /* TAB GROUP (Wares, Guides, About) */

                    tabData.map((tab, index) => (
                        <div key={index} className='pt-4'>
                            <button
                                onClick={() => {
                                    setActiveTabIndex(index)
                                }}
                                className={`${activeTabIndex === index ? 'bg-deep-700 outline-deep-700 outline-1' : 'bg-transparent'} px-6 py-2 rounded-t-md`}>
                                <span>
                                    {tab.title}
                                </span>
                            </button>
                        </div>
                    ))
                }
            </div>

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
    )
}

export default Tabs