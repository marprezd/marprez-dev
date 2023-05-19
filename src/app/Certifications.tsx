'use client'
import { ChevronDownIcon, ChevronUpIcon } from '@/components/Icons'
import CertificationList from '@/components/CertificationList'
import { useRef, useState } from 'react'

export default function Certifications({ certifications }: any): JSX.Element {
  let [isExpanded, setIsExpanded] = useState(false)
  const parentRef = useRef()

  return (
    <>
      {certifications.length > 0 && (
        <div>
          <h4 className="mb-10 mt-5 text-center text-2xl font-semibold capitalize text-gray-700 underline decoration-secondary-40 decoration-solid decoration-2 underline-offset-8 dark:text-gray-300 dark:decoration-secondary-70">
            certifications
          </h4>
          {certifications.slice(0, 2).map((certification: any, index: any) => (
            <CertificationList key={index} props={certification} />
          ))}
          {certifications.slice(2).map((certification: any, index: any) => (
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
              <CertificationList key={index} props={certification} />
            </div>
          ))}
          {certifications.length > 2 && (
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
