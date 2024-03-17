
import { ArticleCard, RandomNews } from '@/components/article'
import { fetchTopHeadlines } from '@/utils'
import React from 'react'

const Home = async () => {

  const res: { status: string, totalResults: 35, articles: Article[] } = await fetchTopHeadlines()

  if (res.status !== "ok") {
    return <></>
  }

  return (
    <div className='grid grid-cols-12 md:gap-7'>
      <div className='md:col-span-7 col-span-12 space-y-10'>
        <h1 className='text-3xl font-bold'>Top Headlines News</h1>
        {
          res.articles.map((el) => <ArticleCard key={el.title} article={el} />)
        }
      </div>
      <RandomNews />
    </div>
  )
}

export default Home