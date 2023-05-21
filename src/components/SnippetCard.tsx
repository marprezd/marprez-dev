import { Snippet } from 'contentlayer/generated'
import Image from 'next/image'
import Link from 'next/link'

export default function SnipeetCard({ snippet }: { snippet: Snippet }): JSX.Element {
  return (
    <Link
      className="group flex h-full w-full gap-y-6 rounded-lg p-5 transition-all bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-white/[.075]"
      href={`/snippets/${snippet.slug}`}
    >
      <Image
        alt={snippet.logo.alt}
        height={32}
        width={32}
        src={`/images/${snippet.logo.url}`}
        className="mr-6 mt-0.5 flex-shrink-0 h-8 w-8 rounded-xl grayscale"
      />
      <div>
        <div>
          <h3 className="block font-bold text-gray-800 dark:text-white">{snippet.title}</h3>
          <p className="break-all text-gray-600 dark:text-gray-400">{snippet.description}</p>
        </div>
        <div className="flex flex-wrap gap-1 mt-2">
          <span className="whitespace-nowrap rounded-full bg-tertiary-95 px-2.5 py-0.5 text-xs text-tertiary-40 dark:bg-tertiary-20 dark:text-tertiary-80">
            Snippet
          </span>

          <span className="whitespace-nowrap rounded-full bg-tertiary-95 px-2.5 py-0.5 text-xs text-tertiary-40 dark:bg-tertiary-20 dark:text-tertiary-80">
            {snippet.language}
          </span>
        </div>
        <p className="mt-2 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
          Learn more
          <svg
            className="h-2.5 w-2.5 transition ease-in-out group-hover:translate-x-1"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
              fill="currentColor"
            />
          </svg>
        </p>
      </div>
    </Link>
  )
}
