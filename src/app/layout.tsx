import '../styles/globals.css'
import localFont from 'next/font/local'
import ClientThemeProvider from './ClientThemeProvider'
import Header from '@/components/Header'

// Font files can be colocated inside of `app`
const Inter = localFont({
  src: './Inter.var.woff2',
  display: 'swap',
  variable: '--font-inter',
})

const Jetbrains = localFont({
  src: './jetbrains-mono-regular.woff2',
  display: 'swap',
  variable: '--font-jetbrains',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${Inter.variable} ${Jetbrains.variable} h-full antialiased`}>
      <body className="min-h-screen bg-gray-100 text-base font-normal text-gray-800 antialiased transition-all duration-200 dark:bg-gray-900 dark:text-gray-100">
        <ClientThemeProvider>
          <div className='relative'>
            <Header />
            <main>{children}</main>
          </div>
        </ClientThemeProvider>
      </body>
    </html>
  )
}
