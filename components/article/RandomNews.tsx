import React from 'react'
import { ArticleCard } from '.'
import { fetchNews } from '@/utils'

export const RandomNews = async () => {
    const res: { status: string, totalResults: 35, articles: Article[] } = await fetchNews("random news")

    return (
        <div className='md:block hidden col-span-5 space-y-5'>
            <h1 className='text-xl font-bold'>Random News</h1>
            {
                res.articles.map((el) => <ArticleCard className='border-none' key={el.title} article={el} />)
            }
        </div>)
}
