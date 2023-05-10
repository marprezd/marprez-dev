import { Popover, Transition } from '@headlessui/react'
import Link from 'next/dist/client/link'
import { Fragment } from 'react'
import { UrlObject } from 'url'
import { ChevronDownIcon, CloseIcon } from './Icons'
import {
  IconHome,
  IconNotebook,
  IconApps,
  IconSourceCode,
  IconPresentation,
  IconArticle,
  IconBriefcase,
} from '@tabler/icons-react'

const icons = {
  IconArticle,
  IconHome,
  IconNotebook,
  IconApps,
  IconSourceCode,
  IconPresentation,
  IconBriefcase,
}

interface TopNavItem {
  label: string
  href: string
  icon: keyof typeof icons
}

const topNavItems: TopNavItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: 'IconHome',
  },
  {
    label: 'Articles',
    href: '/articles',
    icon: 'IconArticle',
  },
  {
    label: 'Projects',
    href: '/projects',
    icon: 'IconApps',
  },
  {
    label: 'Courses',
    href: '/courses',
    icon: 'IconPresentation',
  },
  {
    label: 'Snippets',
    href: '/snippets',
    icon: 'IconSourceCode',
  },
  {
    label: 'Resources',
    href: '/resources',
    icon: 'IconNotebook',
  },
  {
    label: 'Hire me',
    href: '/hire-me',
    icon: 'IconBriefcase',
  },
]

function MobileNavItem({
  href,
  children,
}: {
  href: UrlObject | string
  children: React.ReactNode
}): JSX.Element {
  return (
    <li className="inline-flex items-center py-1">
      <Popover.Button
        as={Link}
        href={href}
        className="-mt-px inline-flex w-full items-center gap-x-3.5 px-4 py-2 text-sm font-medium text-primary-700 first:mt-0 hover:text-primary-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:text-primary-50 dark:hover:text-primary-200"
      >
        {children}
      </Popover.Button>
    </li>
  )
}

type Props = {
  className?: string
}

export default function MobileNavigation({ className }: Props): JSX.Element {
  return (
    <Popover className={className}>
      <Popover.Button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-800 shadow-lg shadow-gray-800/5 ring-1 ring-gray-900/5 backdrop-blur dark:bg-gray-800/90 dark:text-gray-200 dark:ring-white/10 dark:hover:ring-white/20">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-gray-500 group-hover:stroke-gray-700 dark:group-hover:stroke-gray-400" />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-gray-800/40 backdrop-blur-sm dark:bg-black/80" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top bg-white p-8 ring-1 ring-gray-900/5 dark:bg-gray-900 dark:ring-gray-800"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <CloseIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              </Popover.Button>

              <h2 className="text-sm font-medium text-gray-600 dark:text-gray-400">Navigation</h2>
            </div>

            <nav className="mt-6 basis-full">
              <ul className="-my-2 flex flex-col divide-y divide-gray-100 text-base dark:divide-gray-100/5">
                {topNavItems.map(({ href, label, icon }, index) => {
                  const Icon = icons[icon]
                  return (
                    <MobileNavItem key={index} href={href}>
                      <Icon />
                      {label}
                    </MobileNavItem>
                  )
                })}
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}
