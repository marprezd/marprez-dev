'use client'
import React from 'react'
import { ThemeProvider } from 'next-themes'

export default function ClientThemeProvider({
  children: children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  )
}
