"use client"

import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

interface Props {
    className?: string
}

export const SearchBox = ({ className }: Props) => {

    const [searchText, setSearchText] = useState("")
    const router = useRouter();

    const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (searchText) {
            router.push(`/search/${searchText}`)
        }
    }

    return (
        <form onSubmit={onSearch} className={`flex w-full max-w-sm items-center space-x-2 ${className}`}>
            <Input value={searchText} onChange={e => setSearchText(e.target.value)} type="text" placeholder="Search" />
            <Button type="submit">Search</Button>
        </form>)
}
