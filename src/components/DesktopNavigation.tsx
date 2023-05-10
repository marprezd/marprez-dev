import clsx from 'clsx'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { IconHome, IconNotebook, IconApps, IconSourceCode, IconPresentation, IconArticle } from '@tabler/icons-react'
import Tooltip from './Tooltip'

const icons = {
  IconArticle,
  IconHome,
  IconNotebook,
  IconApps,
  IconSourceCode,
  IconPresentation,
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
]

function NavItem({ href, children }: { href: string; children: React.ReactNode }): JSX.Element {
  let isActive = usePathname() === href

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 transition',
          isActive
            ? 'text-primary-500 dark:text-primary-400'
            : 'hover:text-primary-500 dark:hover:text-primary-400'
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-primary-500/0 via-primary-500/40 to-primary-500/0 dark:from-primary-400/0 dark:via-primary-400/40 dark:to-primary-400/0" />
        )}
      </Link>
    </li>
  )
}

type Props = {
  className?: string
}

export default function DesktopNavigation({
  className,
}: Props): JSX.Element {
  let router = useRouter()
  return (
    <nav className={className}>
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-gray-800 ring-1 ring-gray-900/5 backdrop-blur dark:bg-gray-800/90 dark:text-gray-200 dark:ring-white/10">
        {topNavItems.map(({ href, label, icon }, index) => {
          const Icon = icons[icon]
          return (
            <NavItem key={index} href={href}>
              <Tooltip message={label}>
                <Icon />
              </Tooltip>
            </NavItem>
          )
        })}
      </ul>
    </nav>
  )
}
