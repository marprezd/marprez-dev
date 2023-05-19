'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from './Icons'

export default function ThemeSelector(): JSX.Element {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const currentTheme = theme === 'system' ? systemTheme : theme

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function toggleTheme(): void {
    disableTransitionsTemporarily()

    if (currentTheme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-gray-800/5 ring-1 ring-gray-900/5 backdrop-blur transition dark:bg-gray-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={toggleTheme}
    >
      <SunIcon className="h-6 w-6 fill-primary-40 stroke-primary-40 transition group-hover:fill-primary-35 group-hover:stroke-primary-35 dark:hidden [@media(prefers-color-scheme:dark)]:fill-primary-80 [@media(prefers-color-scheme:dark)]:stroke-primary-80 [@media(prefers-color-scheme:dark)]:group-hover:fill-primary-70 [@media(prefers-color-scheme:dark)]:group-hover:stroke-primary-70" />
      <MoonIcon className="hidden h-6 w-6 fill-primary-40 stroke-primary-40 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-primary-70 [@media_not_(prefers-color-scheme:dark)]:fill-primary-35/10 [@media_not_(prefers-color-scheme:dark)]:stroke-primary-80" />
    </button>
  )
}
