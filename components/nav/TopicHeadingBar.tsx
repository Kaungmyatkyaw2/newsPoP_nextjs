import Link from 'next/link'
import React from 'react'


const links = ["Business", "World", 'Science', "Health", "Sports", "Books", "Lifestyle", "Food", "Travel", "Bitcoin", "Share", "E-Sport", "Burma"]

interface Props {
    className?: string
}

export const TopicHeadingBar = ({ className }: Props) => {
    return (
        <div className={`flex-center md:justify-center justify-start flex-wrap gap-6 py-5 md:border-b ${className}`}>
            {
                links.map(link => <Link key={link} className='text-sm hover:underline' href={link.toLowerCase()} >{link}</Link>)
            }
        </div>
    )
}

