import { Container } from './Container'

export default function SimpleLayout({
  title,
  intro,
  children,
}: {
  title: string
  intro?: string
  children: React.ReactNode
}): JSX.Element {
  return (
    <section className="bg-gradient-to-b from-gray-200 to-gray-50 py-10 dark:from-gray-950 dark:to-gray-900 lg:py-20">
      <Container>
        <header className="relative z-10 mx-auto max-w-full px-4 text-center">
          <h1 className="text-4xl font-bold leading-none tracking-tight lg:text-5xl">{title}</h1>
          {intro && (
            <h2 className="my-4 text-lg font-normal sm:px-16 lg:px-48 lg:text-xl">{intro}</h2>
          )}
        </header>
        <div>{children}</div>
      </Container>
    </section>
  )
}
