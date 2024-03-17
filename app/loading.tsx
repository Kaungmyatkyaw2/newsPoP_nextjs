import { Loader } from 'lucide-react'
import React from 'react'

const loading = () => {
    return (
        <div className='flex-center py-[30px] w-full'><Loader size={50} className='animate-spin' /></div>
    )
}

export default loading