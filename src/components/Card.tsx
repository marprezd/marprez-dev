import clsx from 'clsx'
import Link from 'next/link'
import { ChevronRightIcon } from './Icons'
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
    <Component
      className={clsx(
        className,
        'group relative block overflow-hidden rounded-lg border border-gray-300 bg-white p-7 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 sm:p-8 md:p-9 lg:p-10'
      )}
    >
      {children}
    </Component>
  )
}

Card.Header = function CardHeader({
  as: Component = 'div',
  children,
}: {
  as?: React.ElementType
  children: React.ReactNode
}): JSX.Element {
  return <Component className="sm:flex sm:justify-between sm:gap-4">{children}</Component>
}

Card.Badge = function CardBadge({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <span className="absolute right-0 top-0 inline-flex items-center gap-1 rounded-bl-lg rounded-br-none rounded-tl-none rounded-tr-none bg-secondary-40 px-2 py-1 text-xs font-medium text-white dark:bg-secondary-80 dark:text-secondary-20">
      {children}
    </span>
  )
}

Card.Media = function CardMedia({
  as: Component = 'div',
  children,
}: {
  as?: React.ElementType
  children: React.ReactNode
}): JSX.Element {
  return <Component className="hidden sm:block sm:shrink-0">{children}</Component>
}

Card.Body = function CardBody({
  as: Component = 'div',
  children,
}: {
  as?: React.ElementType
  children: React.ReactNode
}): JSX.Element {
  return <Component className="mt-4">{children}</Component>
}

Card.Footer = function CardFooter({
  as: Component = 'dl',
  children,
}: {
  as?: React.ElementType
  children: React.ReactNode
}): JSX.Element {
  return <Component className="mt-6 flex gap-4 sm:gap-6">{children}</Component>
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
      <Link href={''} {...props}>
        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  )
}

Card.Title = function CardTitle({
  // as: Component = 'h3',
  href,
  children,
}: {
  // as?: React.ElementType
  href?: string
  children: React.ReactNode
}): JSX.Element {
  return (
    <div>
      <h3 className="text-lg font-bold dark:text-gray-50 sm:text-xl">
        {href ? <Card.Link href={href}>{children}</Card.Link> : children}
      </h3>
    </div>
  )
}

Card.Description = function CardDescription({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return <p className="max-w-[40ch] text-sm text-gray-700 dark:text-gray-200">{children}</p>
}

Card.Cta = function CardCta({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-primary-40 dark:text-primary-80"
    >
      {children}
      <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
    </div>
  )
}

Card.Eyebrow = function CardEyebrow({
  as: Component = 'p',
  decorate = false,
  className,
  children,
  ...props
}: {
  as?: React.ElementType
  decorate?: boolean
  className?: string
  children: React.ReactNode
  [key: string]: any
}): JSX.Element {
  return (
    <Component
      className={clsx(
        className,
        'relative z-10 order-first mb-3 flex items-center text-sm text-gray-400 dark:text-gray-500',
        decorate && 'pl-3.5'
      )}
      {...props}
    >
      {decorate && (
        <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
          <span className="h-4 w-0.5 rounded-full bg-gray-200 dark:bg-gray-500" />
        </span>
      )}
      {children}
    </Component>
  )
}
