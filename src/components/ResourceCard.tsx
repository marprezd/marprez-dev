import Link from 'next/link'
import { AnchorIcon } from './Icons'

export default function ResourceCard({ resource }: { resource: Resource }): JSX.Element {
  return (
    <Link
      className="animate-background rounded-md border border-gray-300 bg-white px-4 py-3 shadow-sm transition [animation-duration:_6s] hover:bg-white/75 hover:shadow-md dark:border-gray-700 dark:bg-gray-950 dark:hover:bg-gray-950/75"
      href={resource.url}
      target="_blank"
    >
      <div>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <span className="text-xs font-light uppercase text-gray-600 dark:text-gray-400">
            <span className='inline-flex'>{new URL(resource.url).hostname.replace('www.', '')} <AnchorIcon className="ml-1 h-4 w-4 mt-1" /></span>
          </span>
          <span className="rounded-full bg-tertiary-40 px-3 py-1 text-xs uppercase text-white dark:bg-tertiary-80 dark:text-tertiary-20">
            {resource.format}
          </span>
        </div>
        <div>
          <h4 className="mt-2 line-clamp-2 text-lg font-semibold">
            {resource.title}
          </h4>
          <p className="mt-2 line-clamp-3 text-sm text-gray-700 dark:text-gray-300">
            {resource.description}
          </p>
        </div>
      </div>
    </Link>
  )
}
