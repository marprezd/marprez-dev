import Image from 'next/image'

export default function ComingSoon() {
  return (
    <div className="flex max-h-screen max-w-full items-center justify-center text-center">
      <div>
        <Image src="/images/coming-soon.png" alt="Coming soon" width={256} height={163} />
        <div className='text-xs text-gray-500 dark:text-gray-400'>
          Illustration by{' '}
          <a href="https://icons8.com/illustrations/author/ODexzOcCgAMh">Finn Reville</a> from{' '}
          <a href="https://icons8.com/illustrations">Ouch!</a>
        </div>
      </div>
    </div>
  )
}
