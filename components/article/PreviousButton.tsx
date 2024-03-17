"use client"

import React from 'react'
import { Button } from '../ui/button'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

const PreviousButton = () => {

    const pathname = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()

    const page = Number(searchParams.get("page")) || 1

    const onNavigate = () => {
        router.push(`${pathname}?page=${page - 1}`)
    }

    return (
        <Button disabled={page == 1} onClick={onNavigate} variant={'ghost'}>Previous</Button>
    )
}

export default PreviousButton