'use client'
import ArticleCard from '@/components/ArticleCard'
import { Container } from '@/components/Container'
import { Article } from 'contentlayer/generated'
import Link from 'next/link'

export default function Articles({ articles }: { articles: Article[] }) {
  return (
    <>
      {articles.length > 0 && (
        <Container>
          <div className="mx-auto mb-10 max-w-xl text-center lg:mb-14">
            <h2 className="text-4xl font-bold dark:text-white md:text-4xl md:leading-tight">
              Latest articles
            </h2>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              There are some recent articles in different categories that may be of interest to you.
            </p>
          </div>
          <article className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {articles.slice(0, 4).map((article: any) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </article>
          <div className="mt-12 text-center">
            <Link
              href="/articles"
              className="inline-flex items-center justify-center gap-x-2 rounded-full border border-primary-40 px-4 py-3 text-sm font-semibold text-primary-40 transition-all hover:bg-primary-40 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-40 focus:ring-offset-2 dark:border-primary-80 dark:text-primary-80 dark:hover:bg-primary-80 dark:hover:text-primary-20 dark:focus:ring-offset-primary-20"
            >
              View all articles
              <svg width="16" height="16" fill="none" className="h-2.5 w-2.5" viewBox="0 0 16 16">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M5.28 2l5.646 5.646a.5.5 0 010 .708L5.279 14"
                ></path>
              </svg>
            </Link>
          </div>
        </Container>
      )}
    </>
  )
}
