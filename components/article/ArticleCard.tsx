"use client";

import { CircleUser, Timer } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

interface Props {
    article: Article
    className?: string
}


function formatDate(dateString: string) {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')

    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
}

export const ArticleCard = ({ article, className }: Props) => {

    const router = useRouter()




    return (
        <div className={`max-w-full w-full rounded-[10px] h-fit p-5 shadow-sm border ${className}`}>
            <img src={article.urlToImage} alt='Content-Image' />
            <div>
                <h1 className='font-bold text-2xl pt-[15px]'>{article.title}</h1>
                <p className='text-gray-500 pt-[15px]'>{article.description}</p>
                <div className='flex-center flex-wrap !justify-start gap-5 pt-5'>
                    <div className='text-sm flex-center text-gray-950 space-x-2'>
                        <CircleUser size={20} /><span>
                            {article.author || "Unknown"}</span></div>
                    <div className='text-sm flex-center text-gray-950 space-x-2'>
                        <Timer size={20} /><span>
                            {formatDate(article.publishedAt)}</span></div>

                    <div className='text-sm flex-center flex-1 !justify-end text-gray-950 space-x-2'>
                        <Button variant='outline' asChild>
                            <a target='_blank' href={article.url}>Read</a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>)
}
