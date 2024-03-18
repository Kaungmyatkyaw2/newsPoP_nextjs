
import { ArticlePage } from '@/components/article'
import { fetchTopHeadlines } from '@/utils'
import React from 'react'

const Home = async ({ searchParams }: { searchParams: { page: number } }) => {

  const res: NewsApiResponse = await fetchTopHeadlines(searchParams.page)



  return (
    <ArticlePage title='Top Headlines News' data={res.articles} />
  )
}

export default Home