import clsx from 'clsx'
import { format, parseISO } from 'date-fns'

export default function RepositoryList({
  classNames,
  props,
}: {
  classNames?: string
  props: Repository
}): JSX.Element {
  const date = parseISO(`${props.time}`)
  return (
    <div className={clsx('px-5 md:px-10', classNames)}>
      <ol className="relative border-l border-gray-300 py-5 dark:border-gray-700">
        <li className="mb-10 ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-secondary-40 ring-8 ring-secondary-95 dark:bg-secondary-80 dark:ring-secondary-30">
            <svg
              className="h-3 w-3 text-white dark:text-secondary-20"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">{props.name}</h3>
          <span className="mb-2 inline-block rounded bg-tertiary-40 px-2.5 py-1 text-sm font-medium text-white dark:bg-tertiary-80 dark:text-tertiary-20">
            {props.type}
          </span>
          <time
            className="mb-2 block text-xs leading-none text-gray-600 dark:text-gray-400"
            dateTime={`${props.time}`}
          >
            {format(date, 'LLLL d, yyyy')}
          </time>
          <p className="mb-2 dark:text-gray-200">{props.content}</p>
          <button
            className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-800 ring-offset-white transition-all hover:bg-gray-300 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-900"
            type="button"
            onClick={() => window.open(`${props.url}`, '_blank')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-4 w-4">
              {/* Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.  */}
              <path fill="currentColor" d={props.icon} />
            </svg>
            {props.urlTitle}
          </button>
        </li>
      </ol>
    </div>
  )
}
