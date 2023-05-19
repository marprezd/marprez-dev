'use client'
import { ChevronDownIcon, ChevronUpIcon } from '@/components/Icons'
import RepositoryList from '@/components/RepositoryList'
import { useRef, useState } from 'react'

export default function Repositories({ repositories }: any): JSX.Element {
  let [isExpanded, setIsExpanded] = useState(false)
  const parentRef = useRef()

  return (
    <>
      {repositories.length > 0 && (
        <div>
          <h4 className="mb-10 text-center text-2xl font-semibold capitalize text-gray-700 underline decoration-secondary-40 decoration-solid decoration-2 underline-offset-8 dark:text-gray-300 dark:decoration-secondary-70">
            Repositories
          </h4>
          {repositories.slice(0, 2).map((repository: any, index: any) => (
            <RepositoryList key={index} props={repository} />
          ))}
          {repositories.slice(2).map((repository: any, index: any) => (
            <div
              key={index}
              className={
                'h-0 w-full overflow-hidden transition-height duration-[400ms] ease-in-out'
              }
              ref={parentRef as any}
              style={{
                height: isExpanded ? (parentRef.current as any).scrollHeight : 0,
              }}
            >
              <RepositoryList key={index} props={repository} />
            </div>
          ))}
          {repositories.length > 2 && (
            <div className="flex justify-center">
              <button
                className="group inline-flex items-center justify-center gap-x-2 rounded-full border border-primary-40 px-4 py-3 text-sm font-semibold text-primary-40 transition-all hover:bg-primary-40 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-40 focus:ring-offset-2 dark:border-primary-80 dark:text-primary-80 dark:hover:bg-primary-80 dark:hover:text-primary-20 dark:focus:ring-offset-primary-20"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? (
                  <>
                    Show less
                    <ChevronUpIcon className="ml-3 h-auto w-[10px] stroke-primary-50 group-hover:stroke-primary-40 dark:stroke-primary-90 dark:group-hover:stroke-primary-80" />
                  </>
                ) : (
                  <>
                    Show more
                    <ChevronDownIcon className="ml-3 h-auto w-[10px] stroke-primary-50 group-hover:stroke-primary-40 dark:stroke-primary-90 dark:group-hover:stroke-primary-80" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      )}
    </>
  )
}
