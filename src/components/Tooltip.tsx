import { ReactNode } from 'react'

type Props = {
  message: string
  children: ReactNode
}
export default function Tooltip({ message, children }: Props) {
  return (
    <div className="group relative flex">
      {children}
      <span className="absolute top-10 scale-0 rounded bg-gray-800 p-1 text-xs text-white transition-all group-hover:scale-100 dark:bg-gray-700">
        {message}
      </span>
    </div>
  )
}
