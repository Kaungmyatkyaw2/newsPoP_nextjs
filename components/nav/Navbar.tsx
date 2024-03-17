"use client"

import React, { useState } from 'react'
import { NavTopBar, SearchBox, TopicHeadingBar } from '.'

export const Navbar = () => {


    const [openMenu, setOpenMenu] = useState(false)

    const onMenuClick = () => {
        setOpenMenu(prev => !prev)
    }

    return (
        <nav className='lg:px-28 px-5 sticky top-0 left-0 bg-white md:border-b-none border-b'>
            <NavTopBar onMenuClick={onMenuClick} />
            <TopicHeadingBar className='md:!flex !hidden' />
            <div className={`md:hidden pt-5 overflow-hidden ${openMenu ? "block" : "hidden"}`}
            >
                <SearchBox />
                <TopicHeadingBar className='md:flex-row !justify-start' />
            </div>
        </nav>)
}
