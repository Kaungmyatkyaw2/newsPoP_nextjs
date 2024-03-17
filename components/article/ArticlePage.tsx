import React from 'react'
import { ArticleCard, RandomNews } from '.'
import { Button } from '../ui/button'
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';

interface Props {
    data: Article[],
    title: string
}
function convertUrlParamToText(urlParam: string) {
    return decodeURIComponent(urlParam.replace(/\+/g, ' '));
}

export const ArticlePage = ({ data, title }: Props) => {

    const formattedTitle = convertUrlParamToText(title)

    return (
        <div className='grid grid-cols-12 md:gap-7'>
            <div className='md:col-span-7 col-span-12 space-y-10'>
                <h1 className='text-3xl font-bold'>{formattedTitle}</h1>
                {
                    data?.length ? data.map((el) => <ArticleCard key={el.title} article={el} />) : <div className='py-[30px]'>
                        No Data is found with this content
                    </div>
                }
            </div>
            <RandomNews />
            <div className='col-span-12 w-full flex justify-between pt-5'>
                <PreviousButton />
                <NextButton />
            </div>
        </div>)
}
