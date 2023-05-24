import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

export function Card({
  as: Component = 'div',
  className,
  children,
}: {
  as?: React.ElementType
  className?: string
  children: React.ReactNode
}): JSX.Element {
  return (
    <Component className={clsx(className, 'rounded-md bg-white p-4 shadow-md dark:bg-gray-950')}>
      {children}
    </Component>
  )
}

Card.Header = function CardHeader({
  as: Component = 'header',
  children,
}: {
  as?: React.ElementType
  children: React.ReactNode
}): JSX.Element {
  return (
    <Component className="flex text-xs font-medium uppercase">
      <span className="mr-2 h-6 w-1 rounded-full bg-secondary-40 dark:bg-secondary-80" />
      <p>{children}</p>
    </Component>
  )
}

Card.Media = function CardMedia({
  as: Component = 'div',
  children,
}: {
  as?: React.ElementType
  children: React.ReactNode
}): JSX.Element {
  return <Component className="mt-2 w-full">{children}</Component>
}

Card.Title = function CardTitle({
  as: Component = 'h3',
  children,
}: {
  as?: React.ElementType
  children: React.ReactNode
}): JSX.Element {
  return (
    <Component className="mt-2 line-clamp-3 text-2xl font-bold tracking-tight">
      {children}
    </Component>
  )
}

Card.AfterTitle = function AfterTitle({
  as: Component = 'span',
  children,
}: {
  as?: React.ElementType
  children: React.ReactNode
}): JSX.Element {
  return (
    <Component className="inline-flex items-center text-xs text-gray-600 dark:text-gray-400">
      {children}
    </Component>
  )
}

Card.Description = function CardDescription({
  as: Component = 'div',
  children,
}: {
  as?: React.ElementType
  children: React.ReactNode
}): JSX.Element {
  return (
    <Component className="mt-3">
      <h4 className="text-xl font-bold">Summary</h4>
      <p className="mb-5 line-clamp-4 text-sm dark:text-gray-200">{children}</p>
    </Component>
  )
}

Card.Footer = function CardFooter({
  as: Component = 'footer',
  children,
}: {
  as?: React.ElementType
  children: React.ReactNode
}): JSX.Element {
  return <Component className="flex justify-between">{children}</Component>
}

Card.Link = function CardLink({
  children,
  ...props
}: {
  children: React.ReactNode
  [key: string]: any
}): JSX.Element {
  return (
    <>
      <Link
        className="group inline-flex items-center rounded-full bg-primary-50 px-3 py-2 text-xs font-medium uppercase text-white hover:bg-primary-40 focus:outline-none focus:ring-4 focus:ring-primary-90 dark:bg-primary-80 dark:text-primary-20 dark:hover:bg-primary-70 dark:focus:ring-primary-50"
        href={''}
        {...props}
      >
        {children}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-chevron-right ml-1 h-4 w-4 delay-100 duration-200 ease-in-out group-hover:translate-x-2"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M0 0h24v24H0z" stroke="none" />
          <path d="M9 6l6 6-6 6" />
        </svg>
      </Link>
    </>
  )
}

Card.ExtraInfo = function CardExtraInfo({
  as: Component = 'span',
  children,
}: {
  as?: React.ElementType
  children: React.ReactNode
}): JSX.Element {
  return (
    <Component className="inline-flex items-center text-xs text-gray-600 dark:text-gray-400">
      {children}
    </Component>
  )
}
