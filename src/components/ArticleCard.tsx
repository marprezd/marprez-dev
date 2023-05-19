import { Article } from 'contentlayer/generated'
import { Card } from './Card'
import Image from 'next/image'
// import Date from './Date'
import { format, parseISO } from 'date-fns'

export default function ArticleCard({ article }: { article: Article }): JSX.Element {
  const date = parseISO(`${article.publishedAt as string}`)
  return (
    <Card>
      <Card.Header>
        <Card.Badge>{article.categories[0].title}</Card.Badge>
        <Card.Title href={`/articles/${article.slug}`}>{article.title}</Card.Title>
        <Card.Media>
          <Image
            alt={article.title}
            width={64}
            height={64}
            src={`/images/${article.covers[0].url}`}
            className="h-16 w-16 rounded-lg object-cover shadow-sm"
          />
        </Card.Media>
      </Card.Header>
      <Card.Body>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card.Body>
      <Card.Footer>
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Published</dt>
          <dd className="text-xs text-gray-600 dark:text-gray-300">
            <time dateTime={`${article.publishedAt as string}`}>
              {format(date, 'LLLL d, yyyy')}
            </time>
          </dd>
        </div>
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Reading time</dt>
          <dd className="text-xs text-gray-600 dark:text-gray-300">{article.readingTime.text}</dd>
        </div>
      </Card.Footer>
    </Card>
  )
}
