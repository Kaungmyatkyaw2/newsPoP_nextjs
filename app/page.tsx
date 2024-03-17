
import { ArticleCard } from '@/components/article'
import { Navbar } from '@/components/nav'
import { fetchTopHeadlines } from '@/utils'
import React from 'react'

const Home = async () => {

  const res: { status: string, totalResults: 35, articles: Article[] } = await fetchTopHeadlines()

  if (res.status !== "ok") {
    return <></>
  }

  return (
    <main>
      <Navbar />
      <section className='lg:px-28 px-5 space-y-6 py-10'>

        {
          res.articles.map((el) => <ArticleCard key={el.title} article={el}/>)
        }

      </section>
    </main>
  )
}

export default Home