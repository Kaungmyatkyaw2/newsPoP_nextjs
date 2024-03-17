"use client"

import React from 'react'
import { Button } from '../ui/button'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

const NextButton = () => {

    const pathname = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()
    const page = Number(searchParams.get("page")) || 1


    const onNavigate = () => {
        router.push(`${pathname}?page=${page + 1}`)
    }

    return (
        <Button aria-label='go_next_page' type='button' onClick={onNavigate} variant={'ghost'}>Next</Button>
    )
}

export default NextButton