'use client'
import ArticleCard from '@/components/ArticleCard'
import { NotFoundIcon } from '@/components/Icons'
import { Article } from 'contentlayer/generated'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import Pagination from './Pagination'

export default function SearchArticles({ articles }: { articles: Article[] }): JSX.Element {
  const [searchValue, setSearchValue] = useState('')
  const searchParams = useSearchParams()
  const filteredArticles = articles.filter((article: any) => {
    const title = article.title.toLowerCase()
    const description = article.description.toLowerCase()
    const categories = article.categories[0].title.toLowerCase()
    const search = searchValue.toLowerCase()

    return title.includes(search) || description.includes(search) || categories.includes(search)
  })

  if (searchValue.length > 0) {
    articles = filteredArticles
  }

  const page = searchParams.get('page') ? parseInt(searchParams.get('page') || '{}') : 1
  const articlesPerPage = 6
  const totalArticles = articles.length
  const startIndex = (page - 1) * articlesPerPage
  let endIndex = page * articlesPerPage
  if (endIndex > totalArticles) {
    endIndex = totalArticles
  }
  const currentArticles = articles.slice(startIndex, endIndex)

  return (
    <>
      <form className="mx-auto mb-8 w-full max-w-md lg:mb-12">
        <label
          htmlFor="search-articles"
          className="text-secondary-900 sr-only mb-2 text-sm font-medium dark:text-white"
        >
          Search articles
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-search text-secondary-500 dark:text-secondary-400"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 0h24v24H0z" stroke="none" />
              <path d="M3 10a7 7 0 1014 0 7 7 0 10-14 0M21 21l-6-6" />
            </svg>
          </div>
          <input
            type="text"
            id="search-articles"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 placeholder-gray-500 focus:border-gray-500 focus:ring-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400 dark:focus:border-gray-500 dark:focus:ring-gray-500"
            placeholder="Search articles..."
            aria-label="Search articles"
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </form>
      <article className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-2 w-full">
        {currentArticles.map((article: any) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </article>
      {totalArticles === 0 && (
        <div className="mx-auto grid h-[20vh] max-w-3xl content-center space-y-16">
          <div className="text-center">
            <NotFoundIcon className="mx-auto h-20 w-20 text-gray-500 dark:text-gray-400" />
            <p className="text-xl font-medium text-gray-500 dark:text-gray-400">
              No articles found.
            </p>

            <p className="text-gray-500 dark:text-gray-400">Try searching for something else.</p>
          </div>
        </div>
      )}
      {totalArticles !== 0 && (
        <div className="mx-auto mt-8 grid max-w-3xl justify-items-center lg:mt-12">
          <Pagination totalArticles={totalArticles} />
        </div>
      )}
    </>
  )
}
