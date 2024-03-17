"use client"

import { LucideBinary } from 'lucide-react'
import React from 'react'

const error = ({ reset }: { reset: any }) => {
    return (
        <div className='py-[30px] flex-center flex-col space-y-[10px]'>
            <LucideBinary size={50} />
            <p className='text-gray-500'>Something went wrong! Please try later!</p>
        </div>
    )
}

export default error