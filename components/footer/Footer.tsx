import React from 'react'

export const Footer = () => {
    return (
        <div className='border-t py-[20px] lg:px-28 px-5 flex justify-between items-center md:!flex-row !flex-col md:space-y-0 space-y-[15px]'>
            <h1 className='text-xl font-bold flex-1'>NewsPOP</h1>
            <p className='text-sm text-gray-500 flex-2 text-center'>&copy; 2024 Your Company. All rights reserved.</p>

            <p className='text-sm flex-1 text-end'>This app is createdy by <a className='underline' href="https://github.com/Kaungmyatkyaw2">Kaung Myat Kyaw</a></p>
        </div>
    )
}
