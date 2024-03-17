
import { ArticlePage } from '@/components/article'
import { fetchTopHeadlines } from '@/utils'
import React from 'react'

const Home = async () => {

  const res: { status: string, totalResults: 35, articles: Article[] } = await fetchTopHeadlines()



  return (
    <ArticlePage title='Top Headlines News' data={res.articles} />
  )
}

export default Home