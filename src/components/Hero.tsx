import DevActivitySvg from './DevActivitySvg'

export const Hero: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="order-last col-span-full place-self-center text-center sm:text-left md:order-first md:col-span-6">
        <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white lg:text-5xl">
          Hello, <span className="text-secondary-40 dark:text-secondary-80">I am Mario!</span>{' '}
          Welcome to my <span className="text-secondary-40 dark:text-secondary-80">personal</span>{' '}
          website.
        </h1>
        <p className="my-6 text-lg font-normal text-gray-600 dark:text-gray-300 lg:text-xl">
          I write about Python, Machine Learning, Data Visualization, APIs Design, UI App, Java, and
          other Tech subjects.
        </p>
      </div>
      <div className="col-span-full md:col-span-6">
        <DevActivitySvg />
      </div>
    </div>
  )
}
