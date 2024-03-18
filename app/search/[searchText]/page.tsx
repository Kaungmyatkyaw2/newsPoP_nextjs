
import { ArticlePage } from '@/components/article'
import { fetchNews } from '@/utils'
import React from 'react'

const CategoryPage = async (
    { params, searchParams }: { params: { searchText: string }, searchParams: { page: number } }
    ) => {
    const res: NewsApiResponse = await fetchNews(params.searchText, searchParams.page)

    return (
        <ArticlePage title={params.searchText} data={res.articles} />
    )
}

export default CategoryPage