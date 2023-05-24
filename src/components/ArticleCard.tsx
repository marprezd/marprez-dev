import { Article } from 'contentlayer/generated'
import { Card } from './Card'
import Image from 'next/image'
import { format, parseISO } from 'date-fns'

export default function ArticleCard({ article }: { article: Article }): JSX.Element {
  const date = parseISO(`${article.publishedAt as string}`)
  return (
    <Card>
      <Card.Header>{article.categories[0].title}</Card.Header>
      <Card.Media>
        <Image
          alt={article.title}
          src={`/images/${article.covers[0].url}`}
          className="rounded-md object-cover"
          width={360}
          height={250}
        />
      </Card.Media>
      <Card.Title>{article.title}</Card.Title>
      <Card.AfterTitle>
        By {article.author.name}
        <span className="mx-2">{` • `}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-calendar mr-1 h-3.5 w-3.5"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"></path>
          <path d="M16 3v4"></path>
          <path d="M8 3v4"></path>
          <path d="M4 11h16"></path>
          <path d="M11 15h1"></path>
          <path d="M12 15v3"></path>
        </svg>
        <time dateTime={`${article.publishedAt as string}`}>{format(date, 'LLLL d, yyyy')}</time>
      </Card.AfterTitle>
      <Card.Description>{article.description}</Card.Description>
      <Card.Footer>
        <Card.Link href={`/articles/${article.slug}`}>Read article</Card.Link>
        <Card.ExtraInfo>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-clock mr-1 h-3.5 w-3.5"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
            <path d="M12 7v5l3 3"></path>
          </svg>
          {article.readingTime.text}
        </Card.ExtraInfo>
      </Card.Footer>
    </Card>
  )
}
