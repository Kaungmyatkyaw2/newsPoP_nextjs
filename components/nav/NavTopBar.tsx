"use client"

import React from 'react'
import { SearchBox } from '.'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'

interface Props {
    onMenuClick: () => void
}

export const NavTopBar = ({ onMenuClick }: Props) => {
    return (
        <div className='w-full flex justify-between items-center py-5 md:border-b'>
            <h1 className='text-xl font-bold'>NewsPOP</h1>
            <SearchBox className='md:flex hidden' />
            <Button onClick={onMenuClick} className='md:hidden flex' size={"icon"} variant={"outline"}>
                <Menu />
            </Button>

        </div>)
}
