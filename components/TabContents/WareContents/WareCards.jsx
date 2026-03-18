import React from 'react'

const WareCards = ({filename, download_link, category }) => {
    return (
        <li className="min-h-30 min-w-full p-2 rounded-md bg-linear-to-br from-black/20 to-accent-900">
            <span className='text-shadow-md tracking-widest wrap-break-word'>
                {filename}
            </span>
        </li>
    )
}

export default WareCards