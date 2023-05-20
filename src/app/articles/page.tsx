import SimpleLayout from '@/components/SimpleLayout'
import { server } from 'config'
import { allArticles, Article } from 'contentlayer/generated'
import type { Metadata } from 'next'
import SearchArticles from './SearchArticles'

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'All my articles are written with the goal of helping you learn something new. I hope you enjoy them!',

  // Open Graph
  openGraph: {
    title: 'Articles - Mario Pérez',
    description:
      'All my articles are written with the goal of helping you learn something new. I hope you enjoy them!',
    url: `${server}/articles`,
    type: 'website',
    siteName: 'Mario Pérez - Freelance Python Developer',
    images: [
      {
        url: `${server}/images/og-image.png`,
        alt: 'Mario Pérez - Freelance Python Developer',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    site: '@marprezd',
    creator: '@marprezd',
    title: 'Articles - Mario Pérez',
    description:
      'All my articles are written with the goal of helping you learn something new. I hope you enjoy them!',
    images: [
      {
        url: `${server}/images/og-image.png`,
        alt: 'Mario Pérez - Freelance Python Developer',
        width: 1200,
        height: 630,
      },
    ],
  },

  // Canonical
  alternates: {
    canonical: `${server}/articles`,
    types: {
      'application/rss+xml': `${server}/feed.xml`,
    },
  },
}

// Get sorted articles from the contentlayer
async function getSortedArticles(): Promise<Article[]> {
  let articles = allArticles

  articles = articles.filter((article: Article) => article.status === 'published')

  return articles.sort((a: Article, b: Article) => {
    if (a.publishedAt && b.publishedAt) {
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    }
    return 0
  })
}

export default async function Articles({
  params,
  searchParams,
}: {
  params?: any
  searchParams?: { [key: string]: string | string[] | undefined }
}): Promise<JSX.Element> {
  const articles = await getSortedArticles()
  const page = searchParams?.page ? parseInt(searchParams.page as string) : 1

  return (
    <SimpleLayout
      title="Articles about Machine Learning and Programming"
      intro="All my articles are written with the goal of helping you learn something new. I hope you enjoy them!"
    >
      {/* @ts-ignore */}
      <SearchArticles articles={articles} page={page} />
    </SimpleLayout>
  )
}
