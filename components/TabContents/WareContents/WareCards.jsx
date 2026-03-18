import React from 'react'

const WareCards = ({ filename, download_link, category }) => {
    return (
        <li className="min-h-25 p-2 rounded-md flex flex-col border-accent-900 border hover:border-accent-700 transition-all duration-300 gap-1">
            <a
                href={download_link}
                rel="noopener noreferrer"
                target='_blank'
                className='text-shadow-md wrap-break-word font-sans'>
                {filename}
            </a>
            <div className='pointer-events-none'>
                <span className='text-xs text-shadow-md tracking-widest wrap-break-word bg-accent-900 rounded-full px-2 py-1'>
                    {category}
                </span>
            </div>
        </li>
    )
}

export default WareCards