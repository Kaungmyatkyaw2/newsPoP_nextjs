
import { ArticlePage } from '@/components/article'
import { fetchNews } from '@/utils'
import React from 'react'

const CategoryPage = async ({ params, searchParams }: { params: { searchText: string }, searchParams: { page: number } }) => {
    const res: { status: string, totalResults: 35, articles: Article[] } = await fetchNews(params.searchText)

    return (
        <ArticlePage title={params.searchText} data={res.articles} />
    )
}

export default CategoryPage