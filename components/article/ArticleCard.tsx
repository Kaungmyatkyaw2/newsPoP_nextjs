import { CircleUser, Timer } from 'lucide-react'
import React from 'react'

interface Props {
    article: Article
}

export const ArticleCard = ({ article }: Props) => {


    function formatDate(dateString: string) {
        const date = new Date(dateString);

        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        const day = date.getDate().toString().padStart(2, '0')

        const formattedDate = `${year}-${month}-${day}`;

        return formattedDate;
    }

    return (
        <div className='max-w-full w-[500px] rounded-[10px] p-5 shadow-sm border'>
            <img src={article.urlToImage} alt='Content-Image' />
            <div className=''>
                <h1 className='font-bold text-2xl'>{article.title}</h1>
                <p className='text-gray-500 pt-[5px]'>{article.description}</p>
                <div className='flex-center flex-wrap !justify-start gap-5 pt-5'>
                    <div className='text-sm flex-center text-gray-950 space-x-2'>
                        <CircleUser size={20} /><span>
                            {article.author || "Unknown"}</span></div>
                    <div className='text-sm flex-center text-gray-950 space-x-2'>
                        <Timer size={20} /><span>
                            {formatDate(article.publishedAt)}</span></div>
                </div>
            </div>
        </div>)
}
